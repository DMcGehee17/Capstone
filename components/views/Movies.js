import html from "html-literal";

export default (state) => html`
  <div>
    ${state.movies.map(movie => `
      <div class="movie">
        <h2>${movie.title}</h2>
        <p>${movie.description}</p> <!-- Assuming each movie has a description property -->
      </div>
    `).join('')}
  </div>
`;
