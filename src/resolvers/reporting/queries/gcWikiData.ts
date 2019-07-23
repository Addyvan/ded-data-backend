import { extendType } from "nexus";

const gcWikiData = extendType( {
  type: "Query",
  definition(t) {
    t.list.field('gcWikiDatas', {
      type: 'gcWikiData',

    resolve: async (parent, args : any, ctx, info) => {
      return ctx.reportingPrisma.gcWikiDatas(args);
      },
    })
  }
});

export default gcWikiData;


