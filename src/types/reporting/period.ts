import { prismaObjectType } from "nexus-prisma";

const Period = prismaObjectType({
  name: 'Period',
  definition(t : any) {
    t.prismaFields([
      "id",
      "month",
      "year",
      "gcAccount",
      "gcCollab",
      "gcConnex",
      "gcMessage",
      "gcPedia",
      "gcWiki"
      
    ])
  },
});

export default Period;