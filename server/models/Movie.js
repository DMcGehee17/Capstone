import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  year: {
    type: String,
    required: true,
    enum: ["thin", "chicago", "deep-dish", "hella-thick"]
  },
  genre: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  description: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
