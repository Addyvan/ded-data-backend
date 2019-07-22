import { prismaObjectType } from "nexus-prisma";

const GCmessageData = prismaObjectType({
  name: 'GCmessageData',
  definition(t : any) {
    t.prismaFields([
      "id",
      "period",
      "totalNumAccounts",
      "numNewAccounts",

      "totalNumChannelMessages",
      "numNewChannelMessages",
      "totalNumPrivateGroupMessages",
      "numNewPrivateGroupMessages",
      "totalNumDirectMessages",
      "numNewDirectMessages",
      "totalNumFileUploads",
      "numNewFileUploads"
    ])
  },
});

export default GCmessageData;