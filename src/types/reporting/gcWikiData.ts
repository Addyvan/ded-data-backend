import { objectType } from "nexus";
import PeriodSimple from "./variants/periodSimple";
import GAstats from "./gaStats";

const GCwikiData = objectType({
  name: 'gcWikiData',
  definition(t : any) {
    t.field("period", {
      type: PeriodSimple, 
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

    t.int("totalNumArticles", {
      nullable: true
    });
    t.int("numNewArticles", {
      nullable: true
    });
    t.int("totalNumEdits", {
      nullable: true
    });
    t.int("numNewEdits", {
      nullable: true
    });

  },
});

export default GCwikiData;