import { extendType, intArg } from "nexus";

const quarter = extendType( {
  type: "Query",
  definition(t) {
    t.field('quarter', {
      type: 'quarter',
      args: {
        year: intArg(),
        month: intArg()
      },
    resolve: async (parent, args : any, ctx, info) => {
      const startPeriod : any = await ctx.reportingPrisma.periods()[0];
      const endPeriod : any = await ctx.reportingPrisma.periods()[0];
      
      
      await console.log(startPeriod.id);
      await console.log(endPeriod);

      return await {
          startPeriod: startPeriod,
          endPeriod: endPeriod
      };
      },
    })
  }
});

export default quarter;


