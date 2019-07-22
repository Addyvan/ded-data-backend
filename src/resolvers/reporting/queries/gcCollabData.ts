import { queryField } from "nexus";

const gcCollabData = queryField('gcCollabData', {
  type: 'GCcollabData',
  resolve: (parent, args, ctx, info) => {
    return ctx.reportingPrisma.gcCollabDatas();
  },
});

export default gcCollabData;