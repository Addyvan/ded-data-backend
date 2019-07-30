import { objectType } from "nexus";
import GAstats from "../gaStats";

const GCwikiSimple = objectType({
  name: 'gcWikiSimple',
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

export default GCwikiSimple;