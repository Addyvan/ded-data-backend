import { extendType } from "nexus";

const gcAccountData = extendType( {
  type: "Query",
  definition(t) {
    t.list.field('gcAccountDatas', {
      type: 'gcAccountData',

    resolve: async (parent, args : any, ctx, info) => {
      return ctx.reportingPrisma.gcAccountDatas(args);
      },
    })
  }
});

export default gcAccountData;


