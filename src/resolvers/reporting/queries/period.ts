import { extendType, stringArg } from "nexus";
import {Period} from "../../../generated/reporting/prisma-client";
import quarterFragment from "./fragments/quarterFragment";
import gcAccountData from "./gcAccountData";
//import {extendedPeriod} from "../../../types/reporting/extendedPeriod";

const period = extendType( {
  type: "Query",
  definition(t) {
    t.field('period', {
      type: 'extendedPeriod',
      args: {
        id: stringArg(),
      },
      resolve: async (parent, args : any, ctx, info) => {
        const period = await ctx.reportingPrisma.period(args).$fragment(quarterFragment);
        
        return {
          year: period["year"],
          month: period["month"],
          gcAccountData: period["gcAccount"],
          gcCollabData: period["gcCollab"],
          gcConnexData: period["gcConnex"],
          gcMessageData: period["gcMessage"],
          gcPediaData: period["gcPedia"],
          gcWikiData: period["gcWiki"],
        }
      

        //return period;
         /*
        if (period) {
          return period;
        }
        return {
          year: -1,
          month: -1
        };*/
      },
    })
  }
});

export default period;


