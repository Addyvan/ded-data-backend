import { objectType } from "nexus";

const Count = objectType({
  name: 'Count',
  definition(t : any) {
    t.int("people", { description: "Total number of people" });
    t.int("projects", { description: "Total number of projects" });
    t.int("tags", { description: "Total number of tags" });
  },
});

export default Count;