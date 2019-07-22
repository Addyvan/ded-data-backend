import { stringArg, queryField } from "nexus";

const tags = queryField('tags', {
  type: 'Tag',
  args: {
    id: stringArg()
  },
  resolve: (parent, args : any, ctx) => {
    if (args.id) {
      return ctx.prisma.tags({where: {id: args.id}});
    } else {
      return ctx.prisma.tags(args);
    }
  },
});

export default tags;