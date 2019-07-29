import { extendType, intArg } from "nexus";
import gcCollabFragment from "./fragments/gcCollabFragment";

const gcCollabData = extendType( {
  type: "Query",
  definition(t) {
    t.list.field('gcCollabDatas', {
      type: 'gcCollabData',
      args: {
        month: intArg({required: false}),
        year: intArg({required: false})
      },
      resolve: (parent, args, ctx, info) => {
        return ctx.reportingPrisma.gcCollabDatas({where: {period: args}}).$fragment(gcCollabFragment);
      },
    })
  }
});

export default gcCollabData;