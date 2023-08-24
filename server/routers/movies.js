
import { Router } from  'express';
import Movie from '../models/Movie.js';

const router = Router();

// Create movie route
router.post("/", async (request, response) => {
  try {
    const newMovie = new Movie(request.body);
    const data = await newMovie.save();
    response.json(data);
  } catch(error) {
    console.log(error);
    if ('name' in error && error.name === 'ValidationError')
      return response.status(400).json(error.errors);
    return response.status(500).json({ message: error.message });
  }
});

// Get all movies route
router.get("/", async (request, response) => {
  try {
    const query = request.query;
    const data = await Movie.find(query);
    response.json(data);
  } catch(error) {
    console.log(error);
    return response.status(500).json({ message: error.message });
  }
});

router.get("/search", async (request, response) => {
  try {
    const query = {};

    if (request.query.genre) {
      query.genre = request.query.genre;
    }

    if (request.query.year) {
      query.year = request.query.year;
    }

    // ... add more query parameters as needed ...

    const movies = await Movie.find(query);
    response.json(movies);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
});

// Get a single movie by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Movie.findById(request.params.id);
    if (!data) return response.status(404).json({ message: "Movie not found" });
    response.json(data);
  } catch(error) {
    console.log(error);
    return response.status(500).json({ message: error.message });
  }
});

// Delete a movie by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await Movie.findByIdAndRemove(request.params.id);
    if (!data) return response.status(404).json({ message: "Movie not found" });
    response.json(data);
  } catch(error) {
    console.log(error);
    return response.status(500).json({ message: error.message });
  }
});

// Update a single movie by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;
    const data = await Movie.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          title: body.title,
          year: body.year,
          genre: body.genre,
          description: body.description
        }
      },
      {
        new: true
      }
    );
    if (!data) return response.status(404).json({ message: "Movie not found" });
    response.json(data);
  } catch(error) {
    console.log(error);
    if ('name' in error && error.name === 'ValidationError')
      return response.status(400).json(error.errors);
    return response.status(500).json({ message: error.message });
  }
});

export default router;
