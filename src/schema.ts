import { makePrismaSchema } from 'nexus-prisma';
import * as path from 'path';

import { mergeSchemas } from "graphql-tools";

import datamodelInfoMapping from './generated/mapping/nexus-prisma';
import { prisma as MappingPrisma } from './generated/mapping/prisma-client';

import datamodelInfoReporting from './generated/reporting/nexus-prisma';
import { prisma as ReportingPrisma } from './generated/reporting/prisma-client';

import { 
  Mapping as MappingQuery,
  Reporting as ReportingQuery
} from "./resolvers/Query";

import { 
  Mapping as MappingMutation
} from "./resolvers/Mutation";

import {
  Mapping as MappingSchema,
  Reporting as ReportingSchema
} from "./types/Schema";

import BlankQuery from "./resolvers/BlankQuery";

const mappingSchema = makePrismaSchema({
  // Provide all the GraphQL types we've implemented
  types: [
    BlankQuery, // If you don't put this it auto gives you all the prisma queries
    MappingQuery,
    MappingMutation,
    MappingSchema
  ],

  // Configure the interface to Prisma
  prisma: {
    datamodelInfo: datamodelInfoMapping,
    client: MappingPrisma,
  },

  // Specify where Nexus should put the generated files
  outputs: {
    schema: path.join(__dirname, './generated/mapping/schema.graphql'),
    typegen: path.join(__dirname, './generated/mapping/nexus.ts'),
  },

  // Configure nullability of input arguments: All arguments are non-nullable by default
  nonNullDefaults: {
    input: true,
    output: true,
  },

  // Configure automatic type resolution for the TS representations of the associated types
  typegenAutoConfig: {
    sources: [
      {
        source: path.join(__dirname, './typegenAutoConfig/mapping.ts'),
        alias: 'types',
      },
    ],
    contextType: 'types.Context',
  },
});

const reportingSchema = makePrismaSchema({
  // Provide all the GraphQL types we've implemented
  types: [
    BlankQuery, // If you don't put this it auto gives you all the prisma queries
    ReportingQuery,
    ReportingSchema
  ],

  // Configure the interface to Prisma
  prisma: {
    datamodelInfo: datamodelInfoReporting,
    client: ReportingPrisma,
  },

  // Specify where Nexus should put the generated files
  outputs: {
    schema: path.join(__dirname, './generated/reporting/schema.graphql'),
    typegen: path.join(__dirname, './generated/reporting/nexus.ts'),
  },

  // Configure nullability of input arguments: All arguments are non-nullable by default
  nonNullDefaults: {
    input: true,
    output: true,
  },

  // Configure automatic type resolution for the TS representations of the associated types
  typegenAutoConfig: {
    sources: [
      {
        source: path.join(__dirname, './typegenAutoConfig/reporting.ts'),
        alias: 'types',
      },
    ],
    contextType: 'types.Context',
  },
});

const schema = mergeSchemas({
  schemas: [
    mappingSchema,
    reportingSchema
  ],
});

export default schema;