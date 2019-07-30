import { objectType, intArg } from "nexus";

const GCaccountSummary = objectType({
  name: 'gcAccountSummary',
  definition(t : any) {

    t.int("totalNumAccounts", {
      nullable: true
    });
      
  },
});

export default GCaccountSummary;