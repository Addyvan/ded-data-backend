import { prisma, Period } from "../src/generated/reporting/prisma-client/index";

const JUNE_2018 = {
  month: 6,
  year: 2018,
  collab: {
    create: {
      totalNumAccounts: 28397,
      numNewAccounts: 2732,
      totalNumGroups: 1463,
      numNewGroups: 157
    }
  },
  connex: {
    create: {
      totalNumAccounts: 152737,
      numNewAccounts: 3100,
      totalNumGroups: 8688,
      numNewGroups: 117 
    }
  },
  message: {
    create: {
      totalNumAccounts: 2654,
      numNewAccounts: 874,
      totalNumChannelMessages: 15778,
      numNewChannelMessages: 3705,
      totalNumPrivateGroupMessages: 77552,
      numNewPrivateGroupMessages: 42806,
      totalNumDirectMessages: 263659,
      numNewDirectMessages: 147031,
      totalNumFileUploads: 2693,
      numNewFileUploads: 1254
    }
  },
  pedia: {
    create: {
      totalNumAccounts: 83638,
      numNewAccounts: 746,
      totalNumArticles: 366793,
      numNewArticles: 3660,
      totalNumEdits: 1911771,
      numNewEdits: 23530
    }
  },
  wiki: {
    create: {
      totalNumAccounts: 193,
      numNewAccounts: 35,
      totalNumArticles: 1050,
      numNewArticles: 170,
      totalNumEdits: 3315,
      numNewEdits: 756
    }
  }
};

const JUNE_2019 = {
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
};



async function seed() {

  let period : Period = await prisma.createPeriod(JUNE_2018);
  console.log(period);
  period = await prisma.createPeriod(JUNE_2019);
  console.log(period);

}

seed();