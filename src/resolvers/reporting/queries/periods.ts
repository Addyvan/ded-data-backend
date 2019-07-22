import { extendType } from "nexus";

const periods = extendType({
  type: "Query",
  definition(t) {
    t.list.field('periods', {
      type: 'Period',
      resolve: (parent, args : any, ctx, info) => {
        return ctx.reportingPrisma.periods(args);
      },
    })
  }
});

export default periods;