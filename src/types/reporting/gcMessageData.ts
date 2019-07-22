import { prismaObjectType } from "nexus-prisma";

const GCmessageData = prismaObjectType({
  name: 'gcMessageData',
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