import { Header, Nav, Main, Footer } from "./components";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import * as store from "./store";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
    `;
  afterRender(state);
  console.log("Hello");
  router.updatePageLinks();
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  // document.querySelector(".fa-bars").addEventListener("click", () => {
  //   document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  // });
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
          )
          .then((response) => {
            const kelvinToFahrenheit = (kelvinTemp) =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            store.Home.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main,
            };
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          });
        break;
      // Added in Lesson 7.1
      case "MovieSearch":
        axios
          .get(`/movies/search`)
          .then((response) => {
            store.MovieSearch.movies = response.data;
            done();
          })
          .catch((error) => {
            console.log("Failed to fetch movies", error);
            done();
          });
        break;
      case "Movies":
        axios
          .get(`/movies`)
          .then((response) => {
            store.Movies.movies = response.data;
            console.log(response.data);
            done();
          })
          .catch((error) => {
            console.log("Failed to fetch movies", error);
            done();
          });
        break;
      default:
        done();
    }
  },
  already: (params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    // if (view === "Home") {
    //   document
    //     .getElementById("searchForm")
    //     .addEventListener("submit", function (event) {
    //       event.preventDefault(); // Prevents the form from submitting in the traditional way
    //       const query = document.getElementById("searchQuery").value;
    //       axios
    //         .get(`/movies/search?year=${query}`)
    //         .then((response) => {
    //           store.MovieSearch.movies = response.data;
    //           render(store.MovieSearch); // Re-render the view with updated data
    //         })
    //         .catch((error) => {
    //           console.error("Failed to fetch movies:", error);
    //         });
    //     });
    // }

    render(store[view]);
  },
});

router
  .on({
    "/": () => render(store.Home),
    ":view": params => {
      let view = capitalize(params.data.view);

      if (store.hasOwnProperty(view)) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
