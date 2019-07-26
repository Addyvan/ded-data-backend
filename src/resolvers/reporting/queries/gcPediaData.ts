import { extendType } from "nexus";
import gcPediaFragment from "./fragments/gcPediaFragment";

const gcPediaData = extendType( {
  type: "Query",
  definition(t) {
    t.list.field('gcPediaDatas', {
      type: 'gcPediaData',

    resolve: async (parent, args : any, ctx, info) => {
      return ctx.reportingPrisma.gcPediaDatas(args).$fragment(gcPediaFragment);
      },
    })
  }
});

export default gcPediaData;


