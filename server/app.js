// 'Import' the Express module instead of http
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import movies from "./routers/movies.js"

// import whatevertheroute2 from "./routers/whatevertheroute2.js";
// import whatevertheroute from "./routers/whatevertheroute.js";

// Initialize the Express application
const app = express();
// Load environment variables from .env file
dotenv.config();

// mongoose connection
mongoose.connect(process.env.MONGODB, {
  // Configuration options to remove deprecation warnings, just include them to remove clutter
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

// Mongoose middleware config
db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

// get the PORT from the environment variables, OR use 4040 as default
const PORT = process.env.PORT || 4040;

const logging = (request, response, next) => {
  console.log(
    `${request.method} ${request.url} ${Date.now().toLocaleString("en-US")}`
  );
  next();
};

// CORS Middleware
const cors = (request, response, next) => {
  response.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  response.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(cors);
app.use(express.json());
app.use(logging);
app.use("/movies", movies)

// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
  // Create the headers for response by default 200
  // Create the response body
  // End and return the response
  response.json({ message: "Service healthy" });
});

// only handles requests with specified routes
// app.use("/whatevertheroute2", whatevertheroute2);
// app.use("/whatevertheroute", whatevertheroute);

// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
