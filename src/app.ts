import express from "express";
import * as db from "./config/db"
import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs } from "./schema/typeDefs"
import { resolvers } from "./schema/resolvers"
import dotenv from 'dotenv';

dotenv.config();

db.connect()

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
