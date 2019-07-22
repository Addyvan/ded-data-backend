import { prismaObjectType } from "nexus-prisma";

const Tag = prismaObjectType({
  name: 'Tag',
  definition(t : any) {
    t.prismaFields([
      'id',
      'name',
      {
        name: 'projects',
        args: ['*'], // remove the arguments from the `posts` field of the `User` type in the Prisma schema
      },
    ])
  },
});

export default Tag;