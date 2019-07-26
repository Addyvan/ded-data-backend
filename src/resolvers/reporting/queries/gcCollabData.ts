import { extendType } from "nexus";
import gcCollabFragment from "./fragments/gcCollabFragment";

const gcCollabData = extendType( {
  type: "Query",
  definition(t) {
    t.list.field('gcCollabDatas', {
      type: 'gcCollabData',
      resolve: (parent, args, ctx, info) => {
        return ctx.reportingPrisma.gcCollabDatas(args).$fragment(gcCollabFragment);
      },
    })
  }
});

export default gcCollabData;