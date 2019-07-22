import { stringArg, mutationField } from "nexus";

const createTag = mutationField('createTag', {
  type: 'Tag',
  args: {
    name: stringArg()
  },
  resolve: (_parent, { name }, ctx) => {
    return ctx.mappingPrisma.createTag({
      name
    })
  },
});

export default createTag;