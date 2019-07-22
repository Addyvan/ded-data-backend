import { intArg, stringArg, idArg } from 'nexus';
import { prismaObjectType } from "nexus-prisma";

const Mutation = prismaObjectType({
  name: 'Mutation',

  definition(t) {

    t.field('createPerson', {
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
    })

    t.field('createProject', {
      type: 'Project',
      args: {
        name: stringArg(),
        description: stringArg()
      },
      resolve: (_parent, { name, description }, ctx) => {
        console.log("CREATING PROJECT");
        return ctx.prisma.createProject({
          name,
          description
        })
      },
    })

    t.field('createTag', {
      type: 'Tag',
      args: {
        name: stringArg()
      },
      resolve: (_parent, { name }, ctx) => {
        return ctx.prisma.createTag({
          name
        })
      },
    })

    t.field('linkPersonProject', {
      type: 'Tag',
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
    })

    t.field('tagProject', {
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

  },
});

export default Mutation;