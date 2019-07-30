import { objectType } from "nexus";

const GCpediaSummary = objectType({
  name: 'gcPediaSummary',
  definition(t : any) {
    t.int("totalNumAccounts", {
      nullable: true
    });

    t.int("totalNumArticles", {
      nullable: true
    });
    t.int("totalNumEdits", {
      nullable: true
    });
  }
});

export default GCpediaSummary;