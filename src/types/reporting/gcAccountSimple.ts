import { objectType, intArg } from "nexus";

const GCaccountSimple = objectType({
  name: 'gcAccountSimple',
  definition(t : any) {


    t.int("totalNumAccounts", {
      nullable: true
    });
    t.int("numNewAccounts", {
      nullable: true
    });
      
  },
});

export default GCaccountSimple;