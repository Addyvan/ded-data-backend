import { objectType } from "nexus";

const GCmessageSummary = objectType({
  name: 'gcMessageSummary',
  definition(t : any) {
    t.int("totalNumAccounts", {
      nullable: true
    });
    
    t.int("totalNumChannelMessages", {
      nullable: true
    });
    t.int("totalNumPrivateGroupMessages", {
      nullable: true
    });
    t.int("totalNumDirectMessages", {
      nullable: true
    });
    t.int("totalNumFileUploads", {
      nullable: true
    });

  },
});

export default GCmessageSummary;