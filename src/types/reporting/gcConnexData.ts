import { prismaObjectType } from "nexus-prisma";

const GCconnexData = prismaObjectType({
  name: 'gcConnexData',
  definition(t : any) {
    t.prismaFields([
      "id",
      "period",
      "totalNumAccounts",
      "numNewAccounts",
      "gaStats",

      "totalNumGroups",
      "numNewGroups",
      //"mostActiveDepartments",
      //"mostActiveGroups"
    ])
  },
});

export default GCconnexData;