import { extendType } from "nexus";

const gcPediaData = extendType( {
  type: "Query",
  definition(t) {
    t.list.field('gcPediaDatas', {
      type: 'gcPediaData',

    resolve: async (parent, args : any, ctx, info) => {
      return ctx.reportingPrisma.gcPediaDatas(args);
      },
    })
  }
});

export default gcPediaData;


