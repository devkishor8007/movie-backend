const Movie = require("../../model/movie.model");

const createMovie = async (args, userId) => {
  const { title, desc, image } = args.input;
  if (!userId) throw new Error("must be logged in");

  const addMovie = await Movie.create({
    title,
    desc,
    image,
    by: userId,
  });

  return addMovie;
};

module.exports = createMovie;
