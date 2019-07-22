import { prismaObjectType } from "nexus-prisma";

const GCaccountData = prismaObjectType({
  name: 'gcAccountData',
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