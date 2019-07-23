import { extendType, stringArg } from "nexus";
import {Period} from "../../../generated/reporting/prisma-client";

const period = extendType( {
  type: "Query",
  definition(t) {
    t.list.field('period', {
      type: 'Period',
      args: {
        id: stringArg(),
      },
      resolve: async (parent, args : any, ctx, info) => {
        const period : Period = await ctx.reportingPrisma.periods({where: {id: args.id}});
        return period;
      },
    })
  }
});

export default period;


