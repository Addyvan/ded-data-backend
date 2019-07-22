import { queryField } from "nexus";

const gcConnexData = queryField('gcConnexData', { 
  type: 'gcConnexData', 
  resolve: (parent, args, ctx, info) => {
    return ctx.reportingPrisma.gcConnexDatas(); 
  },
});

export default gcConnexData;