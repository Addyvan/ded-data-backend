import { stringArg, extendType } from "nexus";

const people = extendType({
  type: "Query",
  definition(t) {
    t.list.field('people', {
      type: 'Person',
      args: {
        id: stringArg({required: false})
      },
      resolve: async (parent, args : any, ctx, info) => {
        if (args.id) {
          return ctx.mappingPrisma.persons({where: {id: args.id}});
        } else {
          return ctx.mappingPrisma.persons(args);
        }
      },
    })
  }
});

export default people;