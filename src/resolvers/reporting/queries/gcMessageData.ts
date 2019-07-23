import { queryField } from "nexus";

const gcMessageData = queryField('gcMessageData', {
  type: 'gcMessageData',
  resolve: (parent, args, ctx, info) => {
    return ctx.reportingPrisma.gcMessageDatas(args);
  },
});
export default gcMessageData;