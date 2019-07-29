//any value in keeping period rather than just using periods

import { extendType, stringArg, intArg, arg } from "nexus";
import quarterFragment from "./fragments/quarterFragment";

const period = extendType( {
  type: "Query",
  definition(t) {
    t.field('period', {
      type: 'period',
      nullable: true,
      args: {
        month: intArg({required: true}),
        year: intArg({required: true})
      },
      resolve: async (parent, args : any, ctx, info) => {
        const periods = await ctx.reportingPrisma.periods( { where: {month: args.month, year: args.year} } ).$fragment(quarterFragment);
        const period = periods[0];
        
        return period;
      
      },
    })
  }
});

export default period;


