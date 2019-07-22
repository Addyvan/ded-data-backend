import { prismaObjectType } from "nexus-prisma";

const GCpediaData = prismaObjectType({
  name: 'gcPediaData',
  definition(t : any) {
    t.prismaFields([
      "id",
      "period",
      "totalNumAccounts",
      "numNewAccounts",
      
      "totalNumArticles",
      "numNewArticles",
      "totalNumEdits",
      "numNewEdits"
    ])
  },
});

export default GCpediaData;