import { extendType, intArg } from "nexus";
import gcWikiFragment from "./fragments/gcWikiFragment";

const gcWikiData = extendType( {
  type: "Query",
  definition(t) {
    t.list.field('gcWikiDatas', {
      type: 'gcWikiData',
      args: {
        month: intArg({required: false}),
        year: intArg({required: false})
      },

    resolve: async (parent, args : any, ctx, info) => {
      return ctx.reportingPrisma.gcWikiDatas({where: {period: args}}).$fragment(gcWikiFragment);
      },
    })
  }
});

export default gcWikiData;


