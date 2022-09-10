const Movie = require("../../model/movie.model");

const singleMovie = async (userId) => {
  if (!userId) throw new Error("must be logged in");
  return await Movie.findById(userId);
};

module.exports = singleMovie;
