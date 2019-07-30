import { objectType } from "nexus/dist";
import GCaccountSimple from "./variants/gcAccountSimple";
import GCcollabSimple from "./variants/gcCollabSimple";
import GCconnexSimple from "./variants/gcConnexSimple";
import GCmessageSimple from "./variants/gcMessageSimple";
import GCpediaSimple from "./variants/gcPediaSimple";
import GCwikiSimple from "./variants/gcWikiSimple";

const period = objectType({
  
  name: 'period',
  definition(t : any) {
    
    t.int("year", {
      nullable: true
    });
    t.int("month", {
      nullable: true
    });

    t.field("gcAccountData", {
        type: GCaccountSimple,
        nullable: true
      });
      t.field("gcCollabData", {
        type: GCcollabSimple, 
        nullable: true
      });
      t.field("gcConnexData", {
        type: GCconnexSimple,
        nullable: true
      });
      t.field("gcMessageData", {
        type: GCmessageSimple, 
        nullable: true
      });
      t.field("gcPediaData", {
        type: GCpediaSimple, 
        nullable: true
      });
      t.field("gcWikiData", {
        type: GCwikiSimple, 
        nullable: true
      });

  },
});

export default period;

