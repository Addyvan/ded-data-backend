import { prismaObjectType } from "nexus-prisma";

const GCconnexData = prismaObjectType({
  name: 'GCconnexData',
  definition(t : any) {
    t.prismaFields([
      "id",
      "period",
      "totalNumAccounts",
      "numNewAccounts",
      "gaData",

      "totalNumGroups",
      "numNewGroups",
      "mostActiveDepartments",
      "mostActiveGroups"
    ])
  },
});

export default GCconnexData;