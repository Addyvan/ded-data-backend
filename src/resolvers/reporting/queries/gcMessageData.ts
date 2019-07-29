import { extendType, intArg } from "nexus";
import gcMessageFragment from "./fragments/gcMessageFragment";

const gcMessageData = extendType( {
  type: "Query",
  definition(t) {
    t.list.field('gcMessageDatas', {
      type: 'gcMessageData',
      args: {
        month: intArg({required: false}),
        year: intArg({required: false})
      },

    resolve: async (parent, args : any, ctx, info) => {
      return ctx.reportingPrisma.gcMessageDatas({where: {period: args}}).$fragment(gcMessageFragment);
      },
    })
  }
});

export default gcMessageData;



