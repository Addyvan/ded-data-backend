/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as types from "../../typegenAutoConfig/reporting"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Period: { // root type
    month: number; // Int!
    year: number; // Int!
  }
  Query: {};
  RestrictedPeriod: { // root type
    startPeriod?: NexusGenRootTypes['Period'] | null; // Period
  }
  gaStats: { // root type
    avgPageLoadTime?: number | null; // Float
    avgPageviewsPerSession?: number | null; // Float
    avgSessionDuration?: number | null; // Float
    bounceRate?: number | null; // Float
    id: string; // ID!
    numSessions?: number | null; // Int
  }
  gcAccountData: { // root type
    numNewAccounts?: number | null; // Int
    period: NexusGenRootTypes['Period']; // Period!
    totalNumAccounts?: number | null; // Int
  }
  gcCollabData: { // root type
    gaStats?: NexusGenRootTypes['gaStats'] | null; // gaStats
    numNewAccounts?: number | null; // Int
    numNewGroups?: number | null; // Int
    period: NexusGenRootTypes['Period']; // Period!
    totalNumAccounts?: number | null; // Int
    totalNumGroups?: number | null; // Int
  }
  gcConnexData: { // root type
    gaStats?: NexusGenRootTypes['gaStats'] | null; // gaStats
    numNewAccounts?: number | null; // Int
    numNewGroups?: number | null; // Int
    period: NexusGenRootTypes['Period']; // Period!
    totalNumAccounts?: number | null; // Int
    totalNumGroups?: number | null; // Int
  }
  gcMessageData: { // root type
    numNewAccounts?: number | null; // Int
    numNewChannelMessages?: number | null; // Int
    numNewDirectMessages?: number | null; // Int
    numNewFileUploads?: number | null; // Int
    numNewPrivateGroupMessages?: number | null; // Int
    period: NexusGenRootTypes['Period']; // Period!
    totalNumAccounts?: number | null; // Int
    totalNumChannelMessages?: number | null; // Int
    totalNumDirectMessages?: number | null; // Int
    totalNumFileUploads?: number | null; // Int
    totalNumPrivateGroupMessages?: number | null; // Int
  }
  gcPediaData: { // root type
    numNewAccounts?: number | null; // Int
    numNewArticles?: number | null; // Int
    numNewEdits?: number | null; // Int
    period: NexusGenRootTypes['Period']; // Period!
    totalNumAccounts?: number | null; // Int
    totalNumArticles?: number | null; // Int
    totalNumEdits?: number | null; // Int
  }
  gcWikiData: { // root type
    gaStats?: NexusGenRootTypes['gaStats'] | null; // gaStats
    numNewAccounts?: number | null; // Int
    numNewArticles?: number | null; // Int
    numNewEdits?: number | null; // Int
    period: NexusGenRootTypes['Period']; // Period!
    totalNumAccounts?: number | null; // Int
    totalNumArticles?: number | null; // Int
    totalNumEdits?: number | null; // Int
  }
  quarter: { // root type
    endPeriod?: NexusGenRootTypes['Period'] | null; // Period
    gcAccountSummary?: NexusGenRootTypes['gcAccountData'] | null; // gcAccountData
    gcCollabSummary?: NexusGenRootTypes['gcCollabData'] | null; // gcCollabData
    gcConnexSummary?: NexusGenRootTypes['gcConnexData'] | null; // gcConnexData
    gcMessageSummary?: NexusGenRootTypes['gcMessageData'] | null; // gcMessageData
    gcPediaSummary?: NexusGenRootTypes['gcPediaData'] | null; // gcPediaData
    gcWikiSummary?: NexusGenRootTypes['gcWikiData'] | null; // gcWikiData
    startPeriod?: NexusGenRootTypes['Period'] | null; // Period
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
}

export interface NexusGenFieldTypes {
  Period: { // field return type
    gcAccount: NexusGenRootTypes['gcAccountData'] | null; // gcAccountData
    gcCollab: NexusGenRootTypes['gcCollabData']; // gcCollabData!
    gcConnex: NexusGenRootTypes['gcConnexData']; // gcConnexData!
    gcMessage: NexusGenRootTypes['gcMessageData']; // gcMessageData!
    gcPedia: NexusGenRootTypes['gcPediaData']; // gcPediaData!
    gcWiki: NexusGenRootTypes['gcWikiData']; // gcWikiData!
    month: number; // Int!
    year: number; // Int!
  }
  Query: { // field return type
    gcAccountDatas: NexusGenRootTypes['gcAccountData'][]; // [gcAccountData!]!
    gcCollabDatas: NexusGenRootTypes['gcCollabData'][]; // [gcCollabData!]!
    gcConnexDatas: NexusGenRootTypes['gcConnexData'][]; // [gcConnexData!]!
    gcMessageDatas: NexusGenRootTypes['gcMessageData'][]; // [gcMessageData!]!
    gcPediaDatas: NexusGenRootTypes['gcPediaData'][]; // [gcPediaData!]!
    gcWikiDatas: NexusGenRootTypes['gcWikiData'][]; // [gcWikiData!]!
    period: NexusGenRootTypes['Period']; // Period!
    periods: NexusGenRootTypes['Period'][]; // [Period!]!
    quarter: NexusGenRootTypes['quarter']; // quarter!
  }
  RestrictedPeriod: { // field return type
    startPeriod: NexusGenRootTypes['Period'] | null; // Period
  }
  gaStats: { // field return type
    avgPageLoadTime: number | null; // Float
    avgPageviewsPerSession: number | null; // Float
    avgSessionDuration: number | null; // Float
    bounceRate: number | null; // Float
    id: string; // ID!
    numSessions: number | null; // Int
  }
  gcAccountData: { // field return type
    numNewAccounts: number | null; // Int
    period: NexusGenRootTypes['Period']; // Period!
    totalNumAccounts: number | null; // Int
  }
  gcCollabData: { // field return type
    gaStats: NexusGenRootTypes['gaStats'] | null; // gaStats
    numNewAccounts: number | null; // Int
    numNewGroups: number | null; // Int
    period: NexusGenRootTypes['Period']; // Period!
    totalNumAccounts: number | null; // Int
    totalNumGroups: number | null; // Int
  }
  gcConnexData: { // field return type
    gaStats: NexusGenRootTypes['gaStats'] | null; // gaStats
    numNewAccounts: number | null; // Int
    numNewGroups: number | null; // Int
    period: NexusGenRootTypes['Period']; // Period!
    totalNumAccounts: number | null; // Int
    totalNumGroups: number | null; // Int
  }
  gcMessageData: { // field return type
    numNewAccounts: number | null; // Int
    numNewChannelMessages: number | null; // Int
    numNewDirectMessages: number | null; // Int
    numNewFileUploads: number | null; // Int
    numNewPrivateGroupMessages: number | null; // Int
    period: NexusGenRootTypes['Period']; // Period!
    totalNumAccounts: number | null; // Int
    totalNumChannelMessages: number | null; // Int
    totalNumDirectMessages: number | null; // Int
    totalNumFileUploads: number | null; // Int
    totalNumPrivateGroupMessages: number | null; // Int
  }
  gcPediaData: { // field return type
    numNewAccounts: number | null; // Int
    numNewArticles: number | null; // Int
    numNewEdits: number | null; // Int
    period: NexusGenRootTypes['Period']; // Period!
    totalNumAccounts: number | null; // Int
    totalNumArticles: number | null; // Int
    totalNumEdits: number | null; // Int
  }
  gcWikiData: { // field return type
    gaStats: NexusGenRootTypes['gaStats'] | null; // gaStats
    numNewAccounts: number | null; // Int
    numNewArticles: number | null; // Int
    numNewEdits: number | null; // Int
    period: NexusGenRootTypes['Period']; // Period!
    totalNumAccounts: number | null; // Int
    totalNumArticles: number | null; // Int
    totalNumEdits: number | null; // Int
  }
  quarter: { // field return type
    endPeriod: NexusGenRootTypes['Period'] | null; // Period
    gcAccountSummary: NexusGenRootTypes['gcAccountData'] | null; // gcAccountData
    gcCollabSummary: NexusGenRootTypes['gcCollabData'] | null; // gcCollabData
    gcConnexSummary: NexusGenRootTypes['gcConnexData'] | null; // gcConnexData
    gcMessageSummary: NexusGenRootTypes['gcMessageData'] | null; // gcMessageData
    gcPediaSummary: NexusGenRootTypes['gcPediaData'] | null; // gcPediaData
    gcWikiSummary: NexusGenRootTypes['gcWikiData'] | null; // gcWikiData
    startPeriod: NexusGenRootTypes['Period'] | null; // Period
  }
}

export interface NexusGenArgTypes {
  Query: {
    period: { // args
      id: string; // String!
    }
    periods: { // args
      month?: number | null; // Int
      year?: number | null; // Int
    }
    quarter: { // args
      quarterNum: number; // Int!
      year: number; // Int!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Period" | "Query" | "RestrictedPeriod" | "gaStats" | "gcAccountData" | "gcCollabData" | "gcConnexData" | "gcMessageData" | "gcPediaData" | "gcWikiData" | "quarter";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: types.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}