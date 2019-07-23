import { queryField } from "nexus";

const gcAccountData = queryField('gcAccountData', {
  type: 'gcAccountData',
  resolve: (parent, args, ctx, info) => {
    return ctx.reportingPrisma.gcAccountDatas(args);
  },
});

export default gcAccountData;