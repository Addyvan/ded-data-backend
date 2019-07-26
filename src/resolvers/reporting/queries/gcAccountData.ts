import { extendType } from "nexus";
import gcAccountFragment from "./fragments/gcAccountFragment";

const gcAccountData = extendType( {
  type: "Query",
  definition(t) {
    t.list.field('gcAccountDatas', {
      type: 'gcAccountData',

    resolve: async (parent, args : any, ctx, info) => {
      return ctx.reportingPrisma.gcAccountDatas(args).$fragment(gcAccountFragment);
      }
    })
  }
});

export default gcAccountData;


