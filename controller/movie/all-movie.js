const Movie = require("../../model/movie.model");

const allMovies = async (userId) => {
  if (!userId) throw new Error("must be logged in");
  return await Movie.find({});
};

module.exports = allMovies;
