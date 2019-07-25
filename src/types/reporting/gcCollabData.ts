import { objectType } from "nexus";
import Period from "./period";
import GAstats from "./gaStats";

const GCcollabData = objectType({
  name: 'gcCollabData',
  definition(t : any) {

    t.field("period", {
      type: Period, 
      nullable: false
    });

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

export default GCcollabData;
