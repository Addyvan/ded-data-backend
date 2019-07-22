import { prismaObjectType } from "nexus-prisma";

const Person = prismaObjectType({
  name: 'Person',
  definition(t : any) {
    t.prismaFields([
      'id',
      'name',
      'gcId',
      {
        name: 'projects',
        args: ['*'],
      },
    ])
  },
});

export default Person;