import { extendType } from "nexus";

const gcCollabData = extendType( {
  type: "Query",
  definition(t) {
    t.list.field('gcCollabDatas', {
      type: 'gcCollabData',
      resolve: (parent, args, ctx, info) => {
        return ctx.reportingPrisma.gcCollabDatas(args);
      },
    })
  }
});

export default gcCollabData;