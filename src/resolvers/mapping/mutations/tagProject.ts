import { idArg, mutationField } from "nexus";

const tagProject = mutationField('tagProject', {
  type: 'Project',
  args: {
    projectId: idArg(),
    tagId: idArg()
  },
  resolve: (_parent, { projectId, tagId }, ctx) => {
    
    return ctx.prisma.updateProject({
      data: {
        tags: {
          connect: [{id: tagId}]
        }
      },
      where: {id: projectId}
    })
  },
})

export default tagProject;