import { objectType } from "nexus";
import project from "./project";

const Tag = objectType({
  name: 'Tag',
  definition(t : any) {

    t.id("id", {
      nullable: false
    });

    t.string("name", {
      nullable: false
    });
    t.list.field("projects", {
      type: project, 
      nullable: true
    })
      
  },
});

export default Tag;
