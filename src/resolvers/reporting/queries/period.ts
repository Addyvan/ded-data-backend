import { stringArg, queryField } from "nexus";

const period = queryField('period', {
  type: 'Period',
  args: {
    id: stringArg(),
  },
  resolve: async (parent, args : any, ctx, info) => {
    const periods: any = await ctx.reportingPrisma.periods({where: {id: args.id}});
    return periods;
}});

export default period;