/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as types from "../../typegenAutoConfig/mapping"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Count: { // root type
    people: number; // Int!
    projects: number; // Int!
    tags: number; // Int!
  }
  Mutation: {};
  Person: { // root type
    gcId?: number | null; // Int
    id: string; // ID!
    name: string; // String!
    projects?: NexusGenRootTypes['Project'][] | null; // [Project!]
  }
  Project: { // root type
    description: string; // String!
    id: string; // ID!
    name: string; // String!
    people?: NexusGenRootTypes['Person'][] | null; // [Person!]
    tags?: NexusGenRootTypes['Tag'][] | null; // [Tag!]
  }
  Query: {};
  Tag: { // root type
    id: string; // ID!
    name: string; // String!
    projects?: NexusGenRootTypes['Project'][] | null; // [Project!]
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
  Count: { // field return type
    people: number; // Int!
    projects: number; // Int!
    tags: number; // Int!
  }
  Mutation: { // field return type
    createPerson: NexusGenRootTypes['Person']; // Person!
    createProject: NexusGenRootTypes['Project']; // Project!
    createTag: NexusGenRootTypes['Tag']; // Tag!
    linkPersonProject: NexusGenRootTypes['Person']; // Person!
    tagProject: NexusGenRootTypes['Project']; // Project!
  }
  Person: { // field return type
    gcId: number | null; // Int
    id: string; // ID!
    name: string; // String!
    projects: NexusGenRootTypes['Project'][] | null; // [Project!]
  }
  Project: { // field return type
    description: string; // String!
    id: string; // ID!
    name: string; // String!
    people: NexusGenRootTypes['Person'][] | null; // [Person!]
    tags: NexusGenRootTypes['Tag'][] | null; // [Tag!]
  }
  Query: { // field return type
    counts: NexusGenRootTypes['Count']; // Count!
    people: NexusGenRootTypes['Person'][]; // [Person!]!
    projects: NexusGenRootTypes['Project'][]; // [Project!]!
    tags: NexusGenRootTypes['Tag'][]; // [Tag!]!
  }
  Tag: { // field return type
    id: string; // ID!
    name: string; // String!
    projects: NexusGenRootTypes['Project'][] | null; // [Project!]
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createPerson: { // args
      gcId: number; // Int!
      name: string; // String!
    }
    createProject: { // args
      description: string; // String!
      name: string; // String!
    }
    createTag: { // args
      name: string; // String!
    }
    linkPersonProject: { // args
      personId: string; // ID!
      projectId: string; // ID!
    }
    tagProject: { // args
      projectId: string; // ID!
      tagId: string; // ID!
    }
  }
  Query: {
    people: { // args
      id?: string | null; // String
    }
    projects: { // args
      id?: string | null; // String
    }
    tags: { // args
      id?: string | null; // String
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Count" | "Mutation" | "Person" | "Project" | "Query" | "Tag";

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