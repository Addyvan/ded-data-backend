import { extendType, intArg } from "nexus";
import {Period, gcAccountData} from "../../../generated/reporting/prisma-client";
import gcCollabData from "./gcCollabData";
//import month_ASC from "../../../generated/reporting/prisma-client/index";

import quarterFragment from "./fragments/quarterFragment";



function accountSummary(first , second , third ){
  //console.log(first);
  
  return {
    totalNumAccounts: third.totalNumAccounts,
    numNewAccounts: first.numNewAccounts + second.numNewAccounts + third.numNewAccounts,
  };
}




const quarter = extendType( {
  type: "Query",
  definition(t) {
    t.field('quarter', {
      type: 'quarter',
      args: {
        year: intArg(),
        quarterNum: intArg()

      },
    resolve: async (parent, args : any, ctx, info) => {
      
      const range : any = 1 + (args.quarterNum - 1) * 3;

      
      const periodRange : Period[] = await ctx.reportingPrisma.periods({ /*TODO: orderBy: ____ ,*/where: { year: args.year, month_in: [range, range + 1, range + 2] } } ).$fragment(quarterFragment);
      if (periodRange.length != 3) throw Error ("Insufficient data available");
      var [a, b, c] = periodRange;
      
      console.log(periodRange);


      const test = accountSummary(periodRange[0], periodRange[1], periodRange[2]);
      
      return await {
          startPeriod: periodRange[0],
          endPeriod: periodRange[2],
          gcAccountSummary: test,
          gcCollabSummary: null,
          gcConnexSummary: null,
          gcMessageSummary: null,
          gcPediaSummary: null,
          gcWikiSummary: null
      };
      },
    })
  }
});

export default quarter;


