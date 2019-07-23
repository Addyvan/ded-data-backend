import { extendType, intArg } from "nexus";
import {Period} from "../../../generated/reporting/prisma-client";

const periods = extendType( {
  type: "Query",
  definition(t) {
    t.list.field('periods', {
      type: 'Period',
      args: {
        month: intArg({required: false}),
        year: intArg({required: false})
      },
    resolve: async (parent, args, ctx, info) => {
      const test : Period[]  = await ctx.reportingPrisma.periods({where: args});
      return await test;
      },
    })
  }
});

export default periods;
