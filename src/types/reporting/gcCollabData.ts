import { prismaObjectType } from "nexus-prisma";

const GCcollabData = prismaObjectType({
  name: 'gcCollabData',
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

export default GCcollabData;