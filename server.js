const { ApolloServer } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

require("./db");

const typeDefs = require("./graphql/typeDefs-graphql");
const resolvers = require("./graphql/resolvers-graphql");
const context = require("./middleware/context");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log(`server is running at ${url}`);
});
