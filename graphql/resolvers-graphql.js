const User = require("../model/user-model");
const Movie = require("../model/movie.model");

const {
  profile,
  changePassword,
  login,
  register,
} = require("../controller/user/index");

const {
  singleMovie,
  createMovie,
  allMovies,
} = require("../controller/movie/index");

const resolvers = {
  Query: {
    users: async () => await User.find({}),
    user: async (_, args, { userId }) => profile(userId),
    movies: async (_, args, { userId }) => allMovies(userId),
    movie: async (_, args, { userId }) => singleMovie(userId),
  },
  User: {
    movie: async (u) => await Movie.find({ by: u._id }),
  },
  Mutation: {
    signup: async (_, args) => register(args),

    signin: async (_, args) => login(args),

    changepassword: async (_, args, { userId }) => changePassword(args, userId),

    createMovie: async (_, args, { userId }) => createMovie(args, userId),
  },
};

module.exports = resolvers;
