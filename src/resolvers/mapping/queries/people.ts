import { stringArg, queryField } from "nexus";

const people = queryField('people', {
  type: 'Person',
  args: {
    id: stringArg()
  },
  resolve: async (parent, args : any, ctx, info) => {
    if (args.id) {
      return ctx.mappingPrisma.persons({where: {id: args.id}});
    } else {
      console.log(await ctx.mappingPrisma.persons(args));
      return ctx.mappingPrisma.persons(args);
    }
  },
});

export default people;