import { queryField } from "nexus";

const gcAccountData = queryField('gcAccountData', {
  type: 'GCaccountData',
  resolve: (parent, args, ctx, info) => {
    return ctx.reportingPrisma.gcAccountDatas();
  },
});

export default gcAccountData;