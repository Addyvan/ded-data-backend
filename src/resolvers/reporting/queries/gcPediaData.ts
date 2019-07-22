import { queryField } from "nexus";

const gcPediaData = queryField('gcPediaData', {
  type: 'gcPediaData',
  resolve: (parent, args, ctx, info) => {
    return ctx.reportingPrisma.gcPediaDatas();
  },
});

export default gcPediaData;