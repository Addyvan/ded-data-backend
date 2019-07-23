import { intArg, extendType } from "nexus";

const periods = extendType({
  type: "Query",
  definition(t) {
    t.list.field('periods', {
      type: 'Period',
      args: {
        month: intArg({required: false}),
        year: intArg({required: false})
      },
      resolve: (parent, args : any, ctx, info) => {
        return ctx.reportingPrisma.periods({where: args});
      },
    })
  }
});

export default periods;