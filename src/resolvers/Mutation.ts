
// Mapping mutations
import createPerson from "./mapping/mutations/createPerson";
import createProject from "./mapping/mutations/createProject";
import createTag from "./mapping/mutations/createTag";
import linkPersonProject from "./mapping/mutations/linkPersonProject";
import tagProject from "./mapping/mutations/tagProject";

const Mapping = {
  createPerson,
  createProject,
  createTag,
  linkPersonProject,
  tagProject
}

export {
  Mapping
};