import { queryField } from "nexus";

const periods = queryField('periods', {
  type: 'Period',
  
  resolve: async (parent, args, ctx, info) => {

    const periods : any = await ctx.reportingPrisma.periods();

    return await periods;
  },
});

export default periods;