import { extendType, intArg } from "nexus";
import gcPediaFragment from "./fragments/gcPediaFragment";

const gcPediaData = extendType( {
  type: "Query",
  definition(t) {
    t.list.field('gcPediaDatas', {
      type: 'gcPediaData',
      args: {
        month: intArg({required: false}),
        year: intArg({required: false})
      },

    resolve: async (parent, args : any, ctx, info) => {
      return ctx.reportingPrisma.gcPediaDatas({where: {period: args}}).$fragment(gcPediaFragment);
      },
    })
  }
});

export default gcPediaData;


