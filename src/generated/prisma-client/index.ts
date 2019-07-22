// Code generated by Prisma (prisma@1.30.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  person: (where?: PersonWhereInput) => Promise<boolean>;
  project: (where?: ProjectWhereInput) => Promise<boolean>;
  tag: (where?: TagWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  person: (where: PersonWhereUniqueInput) => PersonPromise;
  persons: (
    args?: {
      where?: PersonWhereInput;
      orderBy?: PersonOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Person>;
  personsConnection: (
    args?: {
      where?: PersonWhereInput;
      orderBy?: PersonOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => PersonConnectionPromise;
  project: (where: ProjectWhereUniqueInput) => ProjectPromise;
  projects: (
    args?: {
      where?: ProjectWhereInput;
      orderBy?: ProjectOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Project>;
  projectsConnection: (
    args?: {
      where?: ProjectWhereInput;
      orderBy?: ProjectOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ProjectConnectionPromise;
  tag: (where: TagWhereUniqueInput) => TagPromise;
  tags: (
    args?: {
      where?: TagWhereInput;
      orderBy?: TagOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Tag>;
  tagsConnection: (
    args?: {
      where?: TagWhereInput;
      orderBy?: TagOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => TagConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createPerson: (data: PersonCreateInput) => PersonPromise;
  updatePerson: (
    args: { data: PersonUpdateInput; where: PersonWhereUniqueInput }
  ) => PersonPromise;
  updateManyPersons: (
    args: { data: PersonUpdateManyMutationInput; where?: PersonWhereInput }
  ) => BatchPayloadPromise;
  upsertPerson: (
    args: {
      where: PersonWhereUniqueInput;
      create: PersonCreateInput;
      update: PersonUpdateInput;
    }
  ) => PersonPromise;
  deletePerson: (where: PersonWhereUniqueInput) => PersonPromise;
  deleteManyPersons: (where?: PersonWhereInput) => BatchPayloadPromise;
  createProject: (data: ProjectCreateInput) => ProjectPromise;
  updateProject: (
    args: { data: ProjectUpdateInput; where: ProjectWhereUniqueInput }
  ) => ProjectPromise;
  updateManyProjects: (
    args: { data: ProjectUpdateManyMutationInput; where?: ProjectWhereInput }
  ) => BatchPayloadPromise;
  upsertProject: (
    args: {
      where: ProjectWhereUniqueInput;
      create: ProjectCreateInput;
      update: ProjectUpdateInput;
    }
  ) => ProjectPromise;
  deleteProject: (where: ProjectWhereUniqueInput) => ProjectPromise;
  deleteManyProjects: (where?: ProjectWhereInput) => BatchPayloadPromise;
  createTag: (data: TagCreateInput) => TagPromise;
  updateTag: (
    args: { data: TagUpdateInput; where: TagWhereUniqueInput }
  ) => TagPromise;
  updateManyTags: (
    args: { data: TagUpdateManyMutationInput; where?: TagWhereInput }
  ) => BatchPayloadPromise;
  upsertTag: (
    args: {
      where: TagWhereUniqueInput;
      create: TagCreateInput;
      update: TagUpdateInput;
    }
  ) => TagPromise;
  deleteTag: (where: TagWhereUniqueInput) => TagPromise;
  deleteManyTags: (where?: TagWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  person: (
    where?: PersonSubscriptionWhereInput
  ) => PersonSubscriptionPayloadSubscription;
  project: (
    where?: ProjectSubscriptionWhereInput
  ) => ProjectSubscriptionPayloadSubscription;
  tag: (
    where?: TagSubscriptionWhereInput
  ) => TagSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ProjectOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "description_ASC"
  | "description_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type PersonOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "gcId_ASC"
  | "gcId_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type TagOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface PersonUpdateManyDataInput {
  gcId?: Int;
  name?: String;
}

export type PersonWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  gcId?: Int;
}>;

export interface TagUpdateWithoutProjectsDataInput {
  name?: String;
}

export interface PersonWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  gcId?: Int;
  gcId_not?: Int;
  gcId_in?: Int[] | Int;
  gcId_not_in?: Int[] | Int;
  gcId_lt?: Int;
  gcId_lte?: Int;
  gcId_gt?: Int;
  gcId_gte?: Int;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  projects_every?: ProjectWhereInput;
  projects_some?: ProjectWhereInput;
  projects_none?: ProjectWhereInput;
  AND?: PersonWhereInput[] | PersonWhereInput;
  OR?: PersonWhereInput[] | PersonWhereInput;
  NOT?: PersonWhereInput[] | PersonWhereInput;
}

export interface TagUpsertWithWhereUniqueWithoutProjectsInput {
  where: TagWhereUniqueInput;
  update: TagUpdateWithoutProjectsDataInput;
  create: TagCreateWithoutProjectsInput;
}

export interface ProjectWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  lead_every?: PersonWhereInput;
  lead_some?: PersonWhereInput;
  lead_none?: PersonWhereInput;
  tags_every?: TagWhereInput;
  tags_some?: TagWhereInput;
  tags_none?: TagWhereInput;
  people_every?: PersonWhereInput;
  people_some?: PersonWhereInput;
  people_none?: PersonWhereInput;
  AND?: ProjectWhereInput[] | ProjectWhereInput;
  OR?: ProjectWhereInput[] | ProjectWhereInput;
  NOT?: ProjectWhereInput[] | ProjectWhereInput;
}

export interface ProjectUpdateWithoutPeopleDataInput {
  name?: String;
  description?: String;
  lead?: PersonUpdateManyInput;
  tags?: TagUpdateManyWithoutProjectsInput;
}

export interface ProjectUpdateInput {
  name?: String;
  description?: String;
  lead?: PersonUpdateManyInput;
  tags?: TagUpdateManyWithoutProjectsInput;
  people?: PersonUpdateManyWithoutProjectsInput;
}

export interface PersonUpdateManyInput {
  create?: PersonCreateInput[] | PersonCreateInput;
  update?:
    | PersonUpdateWithWhereUniqueNestedInput[]
    | PersonUpdateWithWhereUniqueNestedInput;
  upsert?:
    | PersonUpsertWithWhereUniqueNestedInput[]
    | PersonUpsertWithWhereUniqueNestedInput;
  delete?: PersonWhereUniqueInput[] | PersonWhereUniqueInput;
  connect?: PersonWhereUniqueInput[] | PersonWhereUniqueInput;
  set?: PersonWhereUniqueInput[] | PersonWhereUniqueInput;
  disconnect?: PersonWhereUniqueInput[] | PersonWhereUniqueInput;
  deleteMany?: PersonScalarWhereInput[] | PersonScalarWhereInput;
  updateMany?:
    | PersonUpdateManyWithWhereNestedInput[]
    | PersonUpdateManyWithWhereNestedInput;
}

export interface TagScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  AND?: TagScalarWhereInput[] | TagScalarWhereInput;
  OR?: TagScalarWhereInput[] | TagScalarWhereInput;
  NOT?: TagScalarWhereInput[] | TagScalarWhereInput;
}

export interface PersonUpdateWithWhereUniqueNestedInput {
  where: PersonWhereUniqueInput;
  data: PersonUpdateDataInput;
}

export interface ProjectSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ProjectWhereInput;
  AND?: ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput;
  OR?: ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput;
  NOT?: ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput;
}

export interface PersonUpdateDataInput {
  gcId?: Int;
  name?: String;
  projects?: ProjectUpdateManyWithoutPeopleInput;
}

export interface TagUpdateManyMutationInput {
  name?: String;
}

export interface PersonUpsertWithWhereUniqueNestedInput {
  where: PersonWhereUniqueInput;
  update: PersonUpdateDataInput;
  create: PersonCreateInput;
}

export interface ProjectUpdateWithoutTagsDataInput {
  name?: String;
  description?: String;
  lead?: PersonUpdateManyInput;
  people?: PersonUpdateManyWithoutProjectsInput;
}

export interface PersonScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  gcId?: Int;
  gcId_not?: Int;
  gcId_in?: Int[] | Int;
  gcId_not_in?: Int[] | Int;
  gcId_lt?: Int;
  gcId_lte?: Int;
  gcId_gt?: Int;
  gcId_gte?: Int;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  AND?: PersonScalarWhereInput[] | PersonScalarWhereInput;
  OR?: PersonScalarWhereInput[] | PersonScalarWhereInput;
  NOT?: PersonScalarWhereInput[] | PersonScalarWhereInput;
}

export interface ProjectUpdateWithWhereUniqueWithoutTagsInput {
  where: ProjectWhereUniqueInput;
  data: ProjectUpdateWithoutTagsDataInput;
}

export interface PersonUpdateManyWithWhereNestedInput {
  where: PersonScalarWhereInput;
  data: PersonUpdateManyDataInput;
}

export interface TagUpdateInput {
  name?: String;
  projects?: ProjectUpdateManyWithoutTagsInput;
}

export interface ProjectUpdateManyMutationInput {
  name?: String;
  description?: String;
}

export interface ProjectCreateWithoutTagsInput {
  id?: ID_Input;
  name: String;
  description: String;
  lead?: PersonCreateManyInput;
  people?: PersonCreateManyWithoutProjectsInput;
}

export interface TagUpdateManyWithoutProjectsInput {
  create?: TagCreateWithoutProjectsInput[] | TagCreateWithoutProjectsInput;
  delete?: TagWhereUniqueInput[] | TagWhereUniqueInput;
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput;
  set?: TagWhereUniqueInput[] | TagWhereUniqueInput;
  disconnect?: TagWhereUniqueInput[] | TagWhereUniqueInput;
  update?:
    | TagUpdateWithWhereUniqueWithoutProjectsInput[]
    | TagUpdateWithWhereUniqueWithoutProjectsInput;
  upsert?:
    | TagUpsertWithWhereUniqueWithoutProjectsInput[]
    | TagUpsertWithWhereUniqueWithoutProjectsInput;
  deleteMany?: TagScalarWhereInput[] | TagScalarWhereInput;
  updateMany?:
    | TagUpdateManyWithWhereNestedInput[]
    | TagUpdateManyWithWhereNestedInput;
}

export interface TagCreateInput {
  id?: ID_Input;
  name: String;
  projects?: ProjectCreateManyWithoutTagsInput;
}

export interface TagUpdateWithWhereUniqueWithoutProjectsInput {
  where: TagWhereUniqueInput;
  data: TagUpdateWithoutProjectsDataInput;
}

export interface PersonCreateInput {
  id?: ID_Input;
  gcId?: Int;
  name: String;
  projects?: ProjectCreateManyWithoutPeopleInput;
}

export interface TagWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  projects_every?: ProjectWhereInput;
  projects_some?: ProjectWhereInput;
  projects_none?: ProjectWhereInput;
  AND?: TagWhereInput[] | TagWhereInput;
  OR?: TagWhereInput[] | TagWhereInput;
  NOT?: TagWhereInput[] | TagWhereInput;
}

export interface ProjectCreateWithoutPeopleInput {
  id?: ID_Input;
  name: String;
  description: String;
  lead?: PersonCreateManyInput;
  tags?: TagCreateManyWithoutProjectsInput;
}

export interface PersonUpsertWithWhereUniqueWithoutProjectsInput {
  where: PersonWhereUniqueInput;
  update: PersonUpdateWithoutProjectsDataInput;
  create: PersonCreateWithoutProjectsInput;
}

export interface TagCreateManyWithoutProjectsInput {
  create?: TagCreateWithoutProjectsInput[] | TagCreateWithoutProjectsInput;
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput;
}

export interface PersonUpdateWithoutProjectsDataInput {
  gcId?: Int;
  name?: String;
}

export interface PersonUpdateInput {
  gcId?: Int;
  name?: String;
  projects?: ProjectUpdateManyWithoutPeopleInput;
}

export interface TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput;
  data: TagUpdateManyDataInput;
}

export interface ProjectUpdateWithWhereUniqueWithoutPeopleInput {
  where: ProjectWhereUniqueInput;
  data: ProjectUpdateWithoutPeopleDataInput;
}

export interface TagUpdateManyDataInput {
  name?: String;
}

export interface PersonSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PersonWhereInput;
  AND?: PersonSubscriptionWhereInput[] | PersonSubscriptionWhereInput;
  OR?: PersonSubscriptionWhereInput[] | PersonSubscriptionWhereInput;
  NOT?: PersonSubscriptionWhereInput[] | PersonSubscriptionWhereInput;
}

export interface ProjectUpsertWithWhereUniqueWithoutPeopleInput {
  where: ProjectWhereUniqueInput;
  update: ProjectUpdateWithoutPeopleDataInput;
  create: ProjectCreateWithoutPeopleInput;
}

export type ProjectWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  name?: String;
}>;

export interface ProjectScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  AND?: ProjectScalarWhereInput[] | ProjectScalarWhereInput;
  OR?: ProjectScalarWhereInput[] | ProjectScalarWhereInput;
  NOT?: ProjectScalarWhereInput[] | ProjectScalarWhereInput;
}

export type TagWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  name?: String;
}>;

export interface ProjectUpdateManyWithWhereNestedInput {
  where: ProjectScalarWhereInput;
  data: ProjectUpdateManyDataInput;
}

export interface PersonCreateManyInput {
  create?: PersonCreateInput[] | PersonCreateInput;
  connect?: PersonWhereUniqueInput[] | PersonWhereUniqueInput;
}

export interface ProjectUpdateManyDataInput {
  name?: String;
  description?: String;
}

export interface ProjectUpdateManyWithoutPeopleInput {
  create?: ProjectCreateWithoutPeopleInput[] | ProjectCreateWithoutPeopleInput;
  delete?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput;
  connect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput;
  set?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput;
  disconnect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput;
  update?:
    | ProjectUpdateWithWhereUniqueWithoutPeopleInput[]
    | ProjectUpdateWithWhereUniqueWithoutPeopleInput;
  upsert?:
    | ProjectUpsertWithWhereUniqueWithoutPeopleInput[]
    | ProjectUpsertWithWhereUniqueWithoutPeopleInput;
  deleteMany?: ProjectScalarWhereInput[] | ProjectScalarWhereInput;
  updateMany?:
    | ProjectUpdateManyWithWhereNestedInput[]
    | ProjectUpdateManyWithWhereNestedInput;
}

export interface PersonUpdateManyMutationInput {
  gcId?: Int;
  name?: String;
}

export interface ProjectUpsertWithWhereUniqueWithoutTagsInput {
  where: ProjectWhereUniqueInput;
  update: ProjectUpdateWithoutTagsDataInput;
  create: ProjectCreateWithoutTagsInput;
}

export interface PersonUpdateWithWhereUniqueWithoutProjectsInput {
  where: PersonWhereUniqueInput;
  data: PersonUpdateWithoutProjectsDataInput;
}

export interface ProjectCreateManyWithoutTagsInput {
  create?: ProjectCreateWithoutTagsInput[] | ProjectCreateWithoutTagsInput;
  connect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput;
}

export interface PersonCreateWithoutProjectsInput {
  id?: ID_Input;
  gcId?: Int;
  name: String;
}

export interface PersonCreateManyWithoutProjectsInput {
  create?:
    | PersonCreateWithoutProjectsInput[]
    | PersonCreateWithoutProjectsInput;
  connect?: PersonWhereUniqueInput[] | PersonWhereUniqueInput;
}

export interface ProjectCreateInput {
  id?: ID_Input;
  name: String;
  description: String;
  lead?: PersonCreateManyInput;
  tags?: TagCreateManyWithoutProjectsInput;
  people?: PersonCreateManyWithoutProjectsInput;
}

export interface PersonUpdateManyWithoutProjectsInput {
  create?:
    | PersonCreateWithoutProjectsInput[]
    | PersonCreateWithoutProjectsInput;
  delete?: PersonWhereUniqueInput[] | PersonWhereUniqueInput;
  connect?: PersonWhereUniqueInput[] | PersonWhereUniqueInput;
  set?: PersonWhereUniqueInput[] | PersonWhereUniqueInput;
  disconnect?: PersonWhereUniqueInput[] | PersonWhereUniqueInput;
  update?:
    | PersonUpdateWithWhereUniqueWithoutProjectsInput[]
    | PersonUpdateWithWhereUniqueWithoutProjectsInput;
  upsert?:
    | PersonUpsertWithWhereUniqueWithoutProjectsInput[]
    | PersonUpsertWithWhereUniqueWithoutProjectsInput;
  deleteMany?: PersonScalarWhereInput[] | PersonScalarWhereInput;
  updateMany?:
    | PersonUpdateManyWithWhereNestedInput[]
    | PersonUpdateManyWithWhereNestedInput;
}

export interface ProjectCreateManyWithoutPeopleInput {
  create?: ProjectCreateWithoutPeopleInput[] | ProjectCreateWithoutPeopleInput;
  connect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput;
}

export interface ProjectUpdateManyWithoutTagsInput {
  create?: ProjectCreateWithoutTagsInput[] | ProjectCreateWithoutTagsInput;
  delete?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput;
  connect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput;
  set?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput;
  disconnect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput;
  update?:
    | ProjectUpdateWithWhereUniqueWithoutTagsInput[]
    | ProjectUpdateWithWhereUniqueWithoutTagsInput;
  upsert?:
    | ProjectUpsertWithWhereUniqueWithoutTagsInput[]
    | ProjectUpsertWithWhereUniqueWithoutTagsInput;
  deleteMany?: ProjectScalarWhereInput[] | ProjectScalarWhereInput;
  updateMany?:
    | ProjectUpdateManyWithWhereNestedInput[]
    | ProjectUpdateManyWithWhereNestedInput;
}

export interface TagSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: TagWhereInput;
  AND?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput;
  OR?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput;
  NOT?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput;
}

export interface TagCreateWithoutProjectsInput {
  id?: ID_Input;
  name: String;
}

export interface NodeNode {
  id: ID_Output;
}

export interface TagPreviousValues {
  id: ID_Output;
  name: String;
}

export interface TagPreviousValuesPromise
  extends Promise<TagPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface TagPreviousValuesSubscription
  extends Promise<AsyncIterator<TagPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface ProjectConnection {
  pageInfo: PageInfo;
  edges: ProjectEdge[];
}

export interface ProjectConnectionPromise
  extends Promise<ProjectConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ProjectEdge>>() => T;
  aggregate: <T = AggregateProjectPromise>() => T;
}

export interface ProjectConnectionSubscription
  extends Promise<AsyncIterator<ProjectConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProjectEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProjectSubscription>() => T;
}

export interface ProjectSubscriptionPayload {
  mutation: MutationType;
  node: Project;
  updatedFields: String[];
  previousValues: ProjectPreviousValues;
}

export interface ProjectSubscriptionPayloadPromise
  extends Promise<ProjectSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ProjectPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProjectPreviousValuesPromise>() => T;
}

export interface ProjectSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProjectSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProjectSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProjectPreviousValuesSubscription>() => T;
}

export interface AggregatePerson {
  count: Int;
}

export interface AggregatePersonPromise
  extends Promise<AggregatePerson>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePersonSubscription
  extends Promise<AsyncIterator<AggregatePerson>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PersonEdge {
  node: Person;
  cursor: String;
}

export interface PersonEdgePromise extends Promise<PersonEdge>, Fragmentable {
  node: <T = PersonPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PersonEdgeSubscription
  extends Promise<AsyncIterator<PersonEdge>>,
    Fragmentable {
  node: <T = PersonSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface Project {
  id: ID_Output;
  name: String;
  description: String;
}

export interface ProjectPromise extends Promise<Project>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  lead: <T = FragmentableArray<Person>>(
    args?: {
      where?: PersonWhereInput;
      orderBy?: PersonOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  tags: <T = FragmentableArray<Tag>>(
    args?: {
      where?: TagWhereInput;
      orderBy?: TagOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  people: <T = FragmentableArray<Person>>(
    args?: {
      where?: PersonWhereInput;
      orderBy?: PersonOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface ProjectSubscription
  extends Promise<AsyncIterator<Project>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  lead: <T = Promise<AsyncIterator<PersonSubscription>>>(
    args?: {
      where?: PersonWhereInput;
      orderBy?: PersonOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  tags: <T = Promise<AsyncIterator<TagSubscription>>>(
    args?: {
      where?: TagWhereInput;
      orderBy?: TagOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  people: <T = Promise<AsyncIterator<PersonSubscription>>>(
    args?: {
      where?: PersonWhereInput;
      orderBy?: PersonOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface Tag {
  id: ID_Output;
  name: String;
}

export interface TagPromise extends Promise<Tag>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  projects: <T = FragmentableArray<Project>>(
    args?: {
      where?: ProjectWhereInput;
      orderBy?: ProjectOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface TagSubscription
  extends Promise<AsyncIterator<Tag>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  projects: <T = Promise<AsyncIterator<ProjectSubscription>>>(
    args?: {
      where?: ProjectWhereInput;
      orderBy?: ProjectOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface AggregateTag {
  count: Int;
}

export interface AggregateTagPromise
  extends Promise<AggregateTag>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTagSubscription
  extends Promise<AsyncIterator<AggregateTag>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface TagConnection {
  pageInfo: PageInfo;
  edges: TagEdge[];
}

export interface TagConnectionPromise
  extends Promise<TagConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<TagEdge>>() => T;
  aggregate: <T = AggregateTagPromise>() => T;
}

export interface TagConnectionSubscription
  extends Promise<AsyncIterator<TagConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<TagEdgeSubscription>>>() => T;
  aggregate: <T = AggregateTagSubscription>() => T;
}

export interface ProjectEdge {
  node: Project;
  cursor: String;
}

export interface ProjectEdgePromise extends Promise<ProjectEdge>, Fragmentable {
  node: <T = ProjectPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ProjectEdgeSubscription
  extends Promise<AsyncIterator<ProjectEdge>>,
    Fragmentable {
  node: <T = ProjectSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PersonConnection {
  pageInfo: PageInfo;
  edges: PersonEdge[];
}

export interface PersonConnectionPromise
  extends Promise<PersonConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PersonEdge>>() => T;
  aggregate: <T = AggregatePersonPromise>() => T;
}

export interface PersonConnectionSubscription
  extends Promise<AsyncIterator<PersonConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PersonEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePersonSubscription>() => T;
}

export interface PersonPreviousValues {
  id: ID_Output;
  gcId?: Int;
  name: String;
}

export interface PersonPreviousValuesPromise
  extends Promise<PersonPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  gcId: () => Promise<Int>;
  name: () => Promise<String>;
}

export interface PersonPreviousValuesSubscription
  extends Promise<AsyncIterator<PersonPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  gcId: () => Promise<AsyncIterator<Int>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface PersonSubscriptionPayload {
  mutation: MutationType;
  node: Person;
  updatedFields: String[];
  previousValues: PersonPreviousValues;
}

export interface PersonSubscriptionPayloadPromise
  extends Promise<PersonSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PersonPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PersonPreviousValuesPromise>() => T;
}

export interface PersonSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PersonSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PersonSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PersonPreviousValuesSubscription>() => T;
}

export interface ProjectPreviousValues {
  id: ID_Output;
  name: String;
  description: String;
}

export interface ProjectPreviousValuesPromise
  extends Promise<ProjectPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
}

export interface ProjectPreviousValuesSubscription
  extends Promise<AsyncIterator<ProjectPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
}

export interface Person {
  id: ID_Output;
  gcId?: Int;
  name: String;
}

export interface PersonPromise extends Promise<Person>, Fragmentable {
  id: () => Promise<ID_Output>;
  gcId: () => Promise<Int>;
  name: () => Promise<String>;
  projects: <T = FragmentableArray<Project>>(
    args?: {
      where?: ProjectWhereInput;
      orderBy?: ProjectOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface PersonSubscription
  extends Promise<AsyncIterator<Person>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  gcId: () => Promise<AsyncIterator<Int>>;
  name: () => Promise<AsyncIterator<String>>;
  projects: <T = Promise<AsyncIterator<ProjectSubscription>>>(
    args?: {
      where?: ProjectWhereInput;
      orderBy?: ProjectOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface AggregateProject {
  count: Int;
}

export interface AggregateProjectPromise
  extends Promise<AggregateProject>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProjectSubscription
  extends Promise<AsyncIterator<AggregateProject>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface TagEdge {
  node: Tag;
  cursor: String;
}

export interface TagEdgePromise extends Promise<TagEdge>, Fragmentable {
  node: <T = TagPromise>() => T;
  cursor: () => Promise<String>;
}

export interface TagEdgeSubscription
  extends Promise<AsyncIterator<TagEdge>>,
    Fragmentable {
  node: <T = TagSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface TagSubscriptionPayload {
  mutation: MutationType;
  node: Tag;
  updatedFields: String[];
  previousValues: TagPreviousValues;
}

export interface TagSubscriptionPayloadPromise
  extends Promise<TagSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = TagPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TagPreviousValuesPromise>() => T;
}

export interface TagSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TagSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TagSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TagPreviousValuesSubscription>() => T;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Person",
    embedded: false
  },
  {
    name: "Project",
    embedded: false
  },
  {
    name: "Tag",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466/`
});
export const prisma = new Prisma();
