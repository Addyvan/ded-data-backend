import { stringArg, queryField } from "nexus";

const period = queryField('period', {
  type: 'Period',
  args: {
    id: stringArg(),
  },
  resolve: async (parent, args : any, ctx, info) => {
    console.log (args.id);
    const periods: any = await ctx.reportingPrisma.periods({where: {id: args.id}});
    return periods;
}});

export default period;