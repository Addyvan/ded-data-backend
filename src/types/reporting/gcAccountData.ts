import { objectType, intArg } from "nexus";
import PeriodSimple from "./variants/periodSimple";

const GCaccountData = objectType({
  name: 'gcAccountData',
  
  definition(t : any) {
    t.field("period", {
      type: PeriodSimple, 
    });

    t.int("totalNumAccounts", {
      nullable: true
    });
    t.int("numNewAccounts", {
      nullable: true
    });
      
  },
});

export default GCaccountData;