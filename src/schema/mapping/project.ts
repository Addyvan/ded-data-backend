import { prismaObjectType } from "nexus-prisma";

const Project = prismaObjectType({
  name: 'Project',
  definition(t : any) {
    t.prismaFields([
      'id',
      'name',
      'description',
      {
        name: 'tags',
        args: ['*'], // remove the arguments from the `posts` field of the `User` type in the Prisma schema
      },
      {
        name: 'people',
        args: ['*'], // remove the arguments from the `posts` field of the `User` type in the Prisma schema
      },
    ])
  },
});

export default Project;