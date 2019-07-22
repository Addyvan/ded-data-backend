import { prisma, Period } from "../src/generated/reporting/prisma-client/index";



async function seed() {

  const period : Period = await prisma.createPeriod({
    month: 6,
    year: 2019,
    collab: {
      create: {
        totalNumAccounts: 56551,
        numNewAccounts: 2314,
        totalNumGroups: 2827,
        numNewGroups: 136
      }
    },
    connex: {
      create: {
        totalNumAccounts: 179378,
        numNewAccounts: 2550,
        totalNumGroups: 9788,
        numNewGroups: 105 
      }
    },
    message: {
      create: {
        totalNumAccounts: 9162,
        numNewAccounts: 264,
        totalNumChannelMessages: 46181,
        numNewChannelMessages: 1453,
        totalNumPrivateGroupMessages: 553592,
        numNewPrivateGroupMessages: 36096,
        totalNumDirectMessages: 1743866,
        numNewDirectMessages: 87708,
        totalNumFileUploads: 18617,
        numNewFileUploads: 926
      }
    },
    pedia: {
      create: {
        totalNumAccounts: 91545,
        numNewAccounts: 661,
        totalNumArticles: 403299,
        numNewArticles: 3111,
        totalNumEdits: 2160679,
        numNewEdits: 18672
      }
    },
    wiki: {
      create: {
        totalNumAccounts: 868,
        numNewAccounts: 94,
        totalNumArticles: 2264,
        numNewArticles: 213,
        totalNumEdits: 9598,
        numNewEdits: 750
      }
    }
  });

  console.log(period);
}

seed();