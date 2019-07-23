import { prismaObjectType } from "nexus-prisma";

const Period = prismaObjectType({
  name: 'Period',
  definition(t : any) {
    t.prismaFields([
      "id",
      "month",
      "year",
      "account",
      "collab",
      "connex",
      "message",
      "pedia",
      "wiki"
    ])
  },
});

export default Period;