import { extendType, intArg } from "nexus";
import gcCollabFragment from "./fragments/gcCollabFragment";

const gcCollabData = extendType( {
  type: "Query",
  definition(t) {
    t.list.field('gcCollabDatas', {
      type: 'gcCollabData',
      args: {
        month: intArg({required: false}),
        year: intArg({required: false})
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
        argument = {where: {period: argument}};

        let result = await ctx.reportingPrisma.gcCollabDatas(argument).$fragment(gcCollabFragment);
      
        for (let i = 0; i < result.length; i++){
          result[i].period = {
            year: result[i].period.date.substr(0,4),
            month: result[i].period.date.substr(5,2)
          };
        }
      
      return result;

      },
    })
  }
});

export default gcCollabData;