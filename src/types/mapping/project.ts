import { objectType } from "nexus";
import Tag from "./tag";
import Person from "./person";

const Project = objectType({
  name: 'Project',
  definition(t : any) {

    t.id("id", {
      nullable: false
    });
    t.string("name", {
      nullable: false
    });
    t.string("description", {
      nullable: false
    });
    t.list.field("tags", {
      type: Tag,
      nullable: true
    })
    t.list.field("people", {
      type: Person,
      nullable: true
    })
  
  },
});

export default Project;
