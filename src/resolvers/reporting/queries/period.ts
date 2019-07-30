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
        
        if (args.month && (args.month < 0 || args.month > 12)){
          throw Error ("Invalid month given. Must be an integer from 1-12");
        }

        let month = args.month.toString();
        month = (args.month < 10) ? "0" + args.month.toString() : month;         
        let year = args.year.toString();
    
        
        let argument = { where: { AND: {
            date_starts_with: year,
            date_contains: month,
          }}};
        
        const results = await ctx.reportingPrisma.periods(argument).$fragment(quarterFragment);
        
        const result = results[0];
        //console.log(period);
        let toolList = ["gcAccount", "gcCollab", "gcConnex", "gcMessage", "gcPedia", "gcWiki"];
      
        toolList.forEach(tool => {
          result[tool + "Data"] = result[tool];
          result[tool] = null;
        });
        
        result.year = result.date.substr(0,4);
        result.month = result.date.substr(5,2);
        
        console.log(result);

      
      return result;
      
      },
    })
  }
});

export default period;


