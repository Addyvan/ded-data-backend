import { extendType } from "nexus";
import gcWikiFragment from "./fragments/gcWikiFragment";

const gcWikiData = extendType( {
  type: "Query",
  definition(t) {
    t.list.field('gcWikiDatas', {
      type: 'gcWikiData',

    resolve: async (parent, args : any, ctx, info) => {
      return ctx.reportingPrisma.gcWikiDatas(args).$fragment(gcWikiFragment);
      },
    })
  }
});

export default gcWikiData;


