import { extendType } from "nexus";
import gcConnexFragment from "./fragments/gcConnexFragment";

const gcConnexData = extendType( {
  type: "Query",
  definition(t) {
    t.list.field('gcConnexDatas', {
      type: 'gcConnexData',
      resolve: (parent, args, ctx, info) => {
        return ctx.reportingPrisma.gcConnexDatas(args).$fragment(gcConnexFragment);
      },
    })
  }
});

export default gcConnexData;