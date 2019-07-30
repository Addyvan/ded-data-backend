import { objectType } from "nexus";
import GAstats from "../gaStats";

const GCconnexSummary = objectType({
  name: 'gcConnexSummary',
  definition(t : any) {

    t.int("totalNumAccounts", {
      nullable: true
    });

    t.field("gaStats", {
      type: GAstats,
      nullable: true
    });

    t.int("totalNumGroups", {
      nullable: true
    });

    //"mostActiveDepartments",
    //"mostActiveGroups"
  },
});

export default GCconnexSummary;
