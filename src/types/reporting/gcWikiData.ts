import { prismaObjectType } from "nexus-prisma";

const GCwikiData = prismaObjectType({
  name: 'GCwikiData',
  definition(t : any) {
    t.prismaFields([
      "id",
      "period",
      "totalNumAccounts",
      "numNewAccounts",
      "gaData",

      "totalNumArticles",
      "numNewArticles",
      "totalNumEdits",
      "numNewEdits"
    ])
  },
});

export default GCwikiData;