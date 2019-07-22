import { stringArg, queryField } from "nexus";

const people = queryField('people', {
  type: 'Person',
  args: {
    id: stringArg()
  },
  resolve: async (parent, args : any, ctx, info) => {
    if (args.id) {
      return ctx.prisma.persons({where: {id: args.id}});
    } else {
      console.log(await ctx.prisma.persons(args));
      return ctx.prisma.persons(args);
    }
  },
});

export default people;