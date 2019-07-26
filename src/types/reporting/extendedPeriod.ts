import { objectType } from "nexus/dist";
import GCaccountSimple from "./gcAccountSimple";
import GCcollabSimple from "./gcCollabSimple";
import GCconnexSimple from "./gcConnexSimple";
import GCmessageSimple from "./gcMessageSimple";
import GCpediaSimple from "./gcPediaSimple";
import GCwikiSimple from "./gcWikiSimple";

const extendedPeriod = objectType({
  
  name: 'extendedPeriod',
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

export default extendedPeriod;

