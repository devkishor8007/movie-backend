const { gql } = require("apollo-server");

const typeDefs = gql`
type Query {
  user(_id: ID): User
  users: [User]
  movies: [Movie]
  movie(by: ID!): Movie
}

  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    movie: [Movie]
  }

  type Movie {
    title: String!
    desc: String!
    image: String!
    by: ID!
  }

  type Token {
    token: String!
  }

  type ChangePassword {
    message: String!
  }

  type Mutation {
    signup(input: IRegister!): User
    signin(input: ILogin!): Token
    changepassword(input: IChangePassword!): ChangePassword
    createMovie(input: IMovie!): Movie
  }

  input IRegister {
    username: String!
    email: String!
    password: String!
  }

  input ILogin {
    email: String!
    password: String!
  }

  input IChangePassword {
    email: String!
    oldpassword: String!
    newpassword: String!
  }

  input IMovie {
    title: String!
    desc: String!
    image: String!
    by: ID
  }
`;

module.exports = typeDefs;
