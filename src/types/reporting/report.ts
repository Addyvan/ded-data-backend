//Unused currently, may be useful later depending on frontend

import { objectType, intArg, idArg } from "nexus";
import gcAccountData from "./gcAccountData";
import Period from "./period";
import { addMockFunctionsToSchema } from "graphql-tools";

const report = objectType({
  name: 'report',
  definition(t : any) {
    
    t.list.field("period", {
      type: Period, 
      args: {
        year: intArg(),
        month: intArg()
      },
      resolve(root, args: any,ctx) {
        return ctx.prisma.periods({where: {month: args.month, year: args.year }});
      },
    },
    );


    /*t.list.field('gcAccountData', {
      type: 'GCaccountData',
      
      resolve(root, args, ctx) {
        return ctx.prisma.gcAccountDatas()
      }
  });*/
    
 
  }, //end of definition
});

export default report;