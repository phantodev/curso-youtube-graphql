const { gql, ApolloServer } = require("apollo-server");

/***
 * Scalar Types
 * - int,
 * - float,
 * - String,
 * - Boolean,
 * - ID
 */

// resolver are like a functions on GraphQL
const resolvers = {
  Query: {
    name() {
      return "Eduardo";
    },
    city() {
      return "Curitiba";
    },
    state() {
      return "Paraná";
    },
    age() {
      return 18;
    },
    premium() {
      return true;
    },
    id() {
      return 1345456469;
    },
    preferences() {
      return ["Woman", "Man", "Cuckold", "BigTits"];
    },
  },
};

// Here we need define types to each queries
const typeDefs = gql`
  type Query {
    name: String
    city: String
    state: String
    age: Int
    premium: Boolean
    id: ID
    preferences: [String]
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen();
