import { objectType } from "nexus";

const GCpediaSimple = objectType({
  name: 'gcPediaSimple',
  definition(t : any) {
    t.int("totalNumAccounts", {
      nullable: true
    });
    t.int("numNewAccounts", {
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
  }
});

export default GCpediaSimple;