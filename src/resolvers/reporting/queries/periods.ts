import { extendType, intArg, stringArg } from "nexus";
import {Period} from "../../../generated/reporting/prisma-client";
import quarterFragment from "./fragments/quarterFragment";

const periods = extendType( {
  type: "Query",
  definition(t) {
    t.list.field('periods', {
      type: 'period',
      nullable: false,
      args: {
        month: intArg({required: false}),
        year: intArg({required: false}),
        orderBy: stringArg()
      },
    resolve: async (parent, args, ctx, info) => {
      let periods : Period[]  = await ctx.reportingPrisma.periods({where: {year: args.year, month: args.month}, orderBy: args.orderBy}).$fragment(quarterFragment);
      let toolList = ["gcAccount", "gcCollab", "gcConnex", "gcMessage", "gcPedia", "gcWiki"];
      
      periods.forEach(element => {
        toolList.forEach(tool => {
          element[tool + "Data"] = element[tool];
          element[tool] = null;
        })
      });
      return periods;
      },
    })
  }
});

export default periods;
