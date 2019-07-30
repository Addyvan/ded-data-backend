import { objectType } from "nexus";
import GAstats from "../gaStats";

const GCwikiSummary = objectType({
  name: 'gcWikiSummary',
  definition(t : any) {

    t.int("totalNumAccounts", {
      nullable: true
    });
    t.field("gaStats", {
      type: GAstats,
      nullable: true
    });

    t.int("totalNumArticles", {
      nullable: true
    });
    t.int("totalNumEdits", {
      nullable: true
    });

  },
});

export default GCwikiSummary;