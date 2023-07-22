import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import dotenv from 'dotenv';

dotenv.config();

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello World",
  },
};

const startApolloServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  const app = express();

  await server.start();

  server.applyMiddleware({ app });

  app.listen({ port: process.env.PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};


startApolloServer().catch((err) => {
    console.log('Error starting Apollo Server:', err)
})
