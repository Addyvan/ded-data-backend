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
        orderBy: stringArg({required:false})
      },
    resolve: async (parent, args, ctx, info) => {

      if (args.month && (args.month < 0 || args.month > 12)){
        throw Error ("Invalid month given. Must be an integer from 1-12");
      }

      let month = (! args.month) ? "" : args.month.toString();
      month = (args.month < 10) ? "0" + args.month.toString() : month;         
      let year = (! args.year) ? "" : args.year.toString();
        
      let argument = null;
      if (args.month && args.year){
        argument = { AND: {
          date_starts_with: year,
          date_contains: month,
        }}
      } else {
        argument = { OR: {
          date_starts_with: year,
          date_contains: month,
        }}
      }
      argument = {where: argument, orderBy: "date_ASC"};


      let periods = await ctx.reportingPrisma.periods(argument).$fragment(quarterFragment);
      let toolList = ["gcAccount", "gcCollab", "gcConnex", "gcMessage", "gcPedia", "gcWiki"];
      
      periods.forEach(element => {
        toolList.forEach(tool => {
          element[tool + "Data"] = element[tool];
          element[tool] = null;
        });
        element.year = element.date.substr(0,4);
        element.month = element.date.substr(5,2);

      });
      return periods;


      /*
      for (let i = 0; i < result.length; i++){
        result[i].period = {
          year: result[i].period.date.substr(0,4),
          month: result[i].period.date.substr(5,2)
        };
      }
      const period = result[0];

    
    return period;*/





      },
    })
  }
});

export default periods;
