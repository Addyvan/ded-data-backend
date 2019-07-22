import { ApolloServer, gql } from 'apollo-server';

import { prisma as MappingPrisma } from './generated/mapping/prisma-client';
import { prisma as ReportingPrisma } from './generated/reporting/prisma-client';

import schema from "./schema";


// MAKE A FUNCTION WHICH OUTPUTS A SCHEMA

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
    mappingPrisma: MappingPrisma,
    reportingPrisma: ReportingPrisma
    /*
    token: await introspect.verifyToken(req),
    defaults: await getDefaults()*/
  })
})


server.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000`),
)