import { ApolloServer, gql } from 'apollo-server';
import { makePrismaSchema } from 'nexus-prisma';
import * as path from 'path';
import datamodelInfo from './generated/nexus-prisma';
import { prisma } from './generated/prisma-client';

import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";

import Person from "./schema/person";
import Project from "./schema/project";
import Tag from "./schema/tag";
import Count from "./schema/count";

const schema = makePrismaSchema({
  // Provide all the GraphQL types we've implemented
  types: [
    Query, 
    Mutation,
    Person, 
    Project,
    Tag,
    Count
  ],

  // Configure the interface to Prisma
  prisma: {
    datamodelInfo,
    client: prisma,
  },

  // Specify where Nexus should put the generated files
  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts'),
  },

  // Configure nullability of input arguments: All arguments are non-nullable by default
  nonNullDefaults: {
    input: false,
    output: false,
  },

  // Configure automatic type resolution for the TS representations of the associated types
  typegenAutoConfig: {
    sources: [
      {
        source: path.join(__dirname, './types.ts'),
        alias: 'types',
      },
    ],
    contextType: 'types.Context',
  },
})

const server = new ApolloServer({
  schema,
  /*
  engine: {
    apiKey: config.engine.apiID,
  },
  tracing: config.app.tracing,
  cors: {
    origin: "*"
  },*/
  context: async (req) => ({
    ...req,
    prisma: prisma,
    /*
    token: await introspect.verifyToken(req),
    defaults: await getDefaults()*/
  })
})

server.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000`),
)