import { extendType, intArg } from "nexus";
import gcConnexFragment from "./fragments/gcConnexFragment";

const gcConnexData = extendType( {
  type: "Query",
  definition(t) {
    t.list.field('gcConnexDatas', {
      type: 'gcConnexData',
      args: {
        month: intArg({required: false}),
        year: intArg({required: false})
      },
      resolve: (parent, args, ctx, info) => {
        return ctx.reportingPrisma.gcConnexDatas({where: {period: args}}).$fragment(gcConnexFragment);
      },
    })
  }
});

export default gcConnexData;