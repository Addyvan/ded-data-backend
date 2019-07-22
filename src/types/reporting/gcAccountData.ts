import { prismaObjectType } from "nexus-prisma";

const GCaccountData = prismaObjectType({
  name: 'GCaccountData',
  definition(t : any) {
    t.prismaFields([
      "id",
      "period",
      "totalNumAccounts",
      "numNewAccounts"
    ])
  },
});

export default GCaccountData;