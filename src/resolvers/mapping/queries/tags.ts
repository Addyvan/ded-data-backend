import { stringArg, extendType } from "nexus";

const tags = extendType({
  type: "Query",
  definition(t) {
    t.list.field('tags', {
      type: 'Tag',
      args: {
        id: stringArg({required: false})
      },
      resolve: (parent, args : any, ctx) => {
        if (args.id) {
          return ctx.mappingPrisma.tags({where: {id: args.id}});
        } else {
          return ctx.mappingPrisma.tags(args);
        }
      },
    });
  }
});

export default tags;