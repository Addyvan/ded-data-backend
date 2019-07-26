
import { objectType } from "nexus";
import GAstats from "./gaStats";

const GCconnexSimple = objectType({
  name: 'gcConnexSimple',
  definition(t : any) {


    t.int("totalNumAccounts", {
      nullable: true
    });
    t.int("numNewAccounts", {
      nullable: true
    });

    t.field("gaStats", {
      type: GAstats,
      nullable: true
    });

    t.int("totalNumGroups", {
      nullable: true
    });
    t.int("numNewGroups", {
      nullable: true
    });

    //"mostActiveDepartments",
    //"mostActiveGroups"
  },
});

export default GCconnexSimple;