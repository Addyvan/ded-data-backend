import { objectType, intArg, idArg } from "nexus";
import gcAccountData from "./gcAccountData";
import Period from "./period";
import { addMockFunctionsToSchema } from "graphql-tools";

const quarter = objectType({
  name: 'quarter',
  definition(t : any) {
    
    t.field("startPeriod", {
      type: Period, 
      /*args: {
        year: intArg(),
        month: intArg()
      },*/
      resolve(root, args: any, ctx) {
        return ctx.prisma.periods();
      }
    });
    t.field("endPeriod", {
        type: Period, 
        resolve(root, args: any, ctx) {
            return ctx.prisma.periods();
          }
    });
    

    
 
  }, //end of definition
});

export default quarter;