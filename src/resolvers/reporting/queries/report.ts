import { intArg, queryField } from "nexus";

const report = queryField('report', {
  type: "report",
  args: {
    year: intArg(),
    month: intArg()
  },

  resolve: async (parent, args : any, ctx, info) => {
    console.log("executing");
    const periods : any = await ctx.reportingPrisma.periods({where: {month: args.month, year: args.year }})[0];
    console.log(periods);
    return periods;
  }
});

export default report;