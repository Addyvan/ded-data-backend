import { objectType } from "nexus";
import PeriodSimple from "./variants/periodSimple";

const GCmessageData = objectType({
  name: 'gcMessageData',
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
    
    t.int("totalNumChannelMessages", {
      nullable: true
    });
    t.int("numNewChannelMessages", {
      nullable: true
    });
    t.int("totalNumPrivateGroupMessages", {
      nullable: true
    });
    t.int("numNewPrivateGroupMessages", {
      nullable: true
    });
    t.int("totalNumDirectMessages", {
      nullable: true
    });
    t.int("numNewDirectMessages", {
      nullable: true
    });
    t.int("totalNumFileUploads", {
      nullable: true
    });
    t.int("numNewFileUploads", {
      nullable: true
    });

  },
});

export default GCmessageData;