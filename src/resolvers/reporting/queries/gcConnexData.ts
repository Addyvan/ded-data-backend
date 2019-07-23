import { extendType } from "nexus";

const gcConnexData = extendType( {
  type: "Query",
  definition(t) {
    t.list.field('gcConnexDatas', {
      type: 'gcConnexData',
      resolve: (parent, args, ctx, info) => {
        return ctx.reportingPrisma.gcConnexDatas(args);
      },
    })
  }
});

export default gcConnexData;