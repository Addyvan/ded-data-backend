import { extendType, intArg } from "nexus";
import gcAccountFragment from "./fragments/gcAccountFragment";


const gcAccountData = extendType( {
  type: "Query",
  definition(t) {
    t.field('gcAccountDatas', {
      type: 'gcAccountData',
      args: {
        month: intArg({required: false}),
        year: intArg({required: false})
      },
    resolve: async (parent, args : any, ctx, info) => {

      return ctx.reportingPrisma.gcAccountDatas({where: {period: args}}).$fragment(gcAccountFragment);

      }
    })
  }
});


export default gcAccountData;


