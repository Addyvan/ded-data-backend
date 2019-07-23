import { extendType, stringArg } from "nexus";

const period = extendType( {
  type: "Query",
  definition(t) {
    t.list.field('period', {
      type: 'Period',
      args: {
        id: stringArg(),
      },
      resolve: async (parent, args : any, ctx, info) => {
        const period: any = await ctx.reportingPrisma.periods({where: {id: args.id}});
        return period;
      },
    })
  }
});

export default period;


