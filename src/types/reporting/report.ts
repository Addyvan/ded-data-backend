//Unused currently, may be useful later depending on frontend

import { objectType, intArg, idArg } from "nexus";
import gcAccountData from "./gcAccountData";
import PeriodSimple from "./periodSimple";

const report = objectType({
  name: 'report',
  definition(t : any) {
    
    t.field("period", {
      type: PeriodSimple, 
      nullable: false
    });


    /*t.list.field('gcAccountData', {
      type: 'GCaccountData',
      
      resolve(root, args, ctx) {
        return ctx.prisma.gcAccountDatas()
      }
  });*/
    
 
  }, //end of definition
});

export default report;