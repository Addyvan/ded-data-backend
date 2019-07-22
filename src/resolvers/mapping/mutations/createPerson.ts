import { stringArg, intArg, mutationField } from "nexus";

const createPerson = mutationField('createPerson', {
  type: 'Person',
  args: {
    name: stringArg(),
    gcId: intArg(),
  },
  resolve: (_parent, { name, gcId }, ctx) => {
    return ctx.prisma.createPerson({
      name,
      gcId,
    })
  },
});

export default createPerson;