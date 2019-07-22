import { queryField } from "nexus";

const gcCollabData = queryField('gcCollabData', {
  type: 'gcCollabData',
  resolve: (parent, args, ctx, info) => {
    return ctx.reportingPrisma.gcCollabDatas();
  },
});

export default gcCollabData;