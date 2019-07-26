import { extendType } from "nexus";
import gcMessageFragment from "./fragments/gcMessageFragment";

const gcMessageData = extendType( {
  type: "Query",
  definition(t) {
    t.list.field('gcMessageDatas', {
      type: 'gcMessageData',

    resolve: async (parent, args : any, ctx, info) => {
      return ctx.reportingPrisma.gcMessageDatas(args).$fragment(gcMessageFragment);
      },
    })
  }
});

export default gcMessageData;



