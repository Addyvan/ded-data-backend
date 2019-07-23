import { extendType } from "nexus";

const gcMessageData = extendType( {
  type: "Query",
  definition(t) {
    t.list.field('gcMessageDatas', {
      type: 'gcMessageData',

    resolve: async (parent, args : any, ctx, info) => {
      return ctx.reportingPrisma.gcMessageDatas(args);
      },
    })
  }
});

export default gcMessageData;



