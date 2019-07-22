import { prismaObjectType } from "nexus-prisma";

const Period = prismaObjectType({
  name: 'Period',
  definition(t : any) {
    t.prismaFields([
      "id",
      "month",
      "year"
    ])
  },
});

export default Period;