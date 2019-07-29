import { objectType } from "nexus";
import Project from "./project";


const Person = objectType({
  name: 'Person',
  definition(t : any) {

    t.id("id", {
      nullable: false
    });
    t.string("name", {
      nullable: false
    });
    t.int("gcId", {
      nullable: true,
    })
    t.list.field("projects", {
      type: Project,
      nullable: true
    })

  },
});

export default Person;

