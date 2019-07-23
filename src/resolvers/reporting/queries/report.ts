//Unused currently, may be useful later depending on frontend

/*import { extendType, intArg } from "nexus";

const report = extendType( {
  type: "Query",
  definition(t) {
    t.list.field('reports', {
      type: 'report',
      args: {
        year: intArg(),
        month: intArg()
      },
    resolve: async (parent, args : any, ctx, info) => {
      const report : any = await ctx.reportingPrisma.periods({where: {month: args.month, year: args.year }})[0];
      return report;
      },
    })
  }
});

export default report;
*/

