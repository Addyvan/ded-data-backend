import { prismaObjectType } from "nexus-prisma";

const GCcollabData = prismaObjectType({
  name: 'GCcollabData',
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

export default GCcollabData;