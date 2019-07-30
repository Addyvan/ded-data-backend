import { extendType, intArg } from "nexus";
import gcAccountFragment from "./fragments/gcAccountFragment";
import { gcAccountData } from "../../../generated/reporting/prisma-client";


const gcAccountData = extendType( {
  type: "Query",
  definition(t) {
    t.list.field('gcAccountDatas', {
      type: 'gcAccountData',
      args: {
        month: intArg({required: false}),
        year: intArg({required: false})
      },
    resolve: async (parent, args : any, ctx, info) => {

      let result : gcAccountData[] = ctx.reportingPrisma.gcAccountDatas({where: {period: args}}).$fragment(gcAccountFragment);
      console.log(result["totalNumAccounts"]);
      return result;
      }
    })
  }
});


export default gcAccountData;


