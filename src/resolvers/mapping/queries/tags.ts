import { stringArg, queryField } from "nexus";

const tags = queryField('tags', {
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

export default tags;