import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 .,!?'"-]*$/,
  },
  year: {
    type: Number,
  },
  genre: {
    type: String,
    validate: /^[A-Za-z0-9 .,!?'"-]*$/,
  },
  description: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 .,!?'"-]*$/,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
