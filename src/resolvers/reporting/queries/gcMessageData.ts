import { queryField } from "nexus";

const gcMessageData = queryField('gcMessageData', {
  type: 'GCmessageData',
  resolve: (parent, args, ctx, info) => {
    return ctx.reportingPrisma.gcMessageDatas();
  },
});
export default gcMessageData;