import { idArg, mutationField } from "nexus";

const linkPersonProject = mutationField('linkPersonProject', {
  type: 'Person',
  args: {
    personId: idArg(),
    projectId: idArg(),
  },
  resolve: (_parent, { personId, projectId }, ctx) => {
    
    return ctx.prisma.updatePerson({
      data: {
        projects: {
          connect: [{id: projectId}]
        }
      },
      where: {id: personId}
    })
  },
});

export default linkPersonProject;