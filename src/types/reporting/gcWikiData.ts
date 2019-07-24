import { prismaObjectType } from "nexus-prisma";

const GCwikiData = prismaObjectType({
  name: 'gcWikiData',
  definition(t : any) {
    t.prismaFields([
      "id",
      "period",
      "totalNumAccounts",
      "numNewAccounts",
      "gaStats",

      "totalNumArticles",
      "numNewArticles",
      "totalNumEdits",
      "numNewEdits"
    ])
  },
});

export default GCwikiData;