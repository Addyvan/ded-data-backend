import { objectType, intArg } from "nexus";
import Period from "./period";

const GCaccountData = objectType({
  name: 'gcAccountData',
  definition(t : any) {

    t.field("period", {
      type: Period, 
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