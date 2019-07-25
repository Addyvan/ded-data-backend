import { prisma, Period } from "../src/generated/reporting/prisma-client/index";

const JANUARY_1789 = {
  month: 1,
  year: 1789,
  gcAccount: {
    create: {
      totalNumAccounts: 200,
      numNewAccounts: 5
    }
  },
  gcCollab: {
    create: {
      totalNumAccounts: 200,
      numNewAccounts: 5,
      gaStats: {
        create: {
          numSessions: 200, 
          avgPageviewsPerSession: 5,
          avgSessionDuration: 50,
          avgPageLoadTime: 1.3, 
          bounceRate: 0.75
        }
      },
      totalNumGroups: 100,
      numNewGroups: 5
    }
  },
  gcConnex: {
    create: {
        totalNumAccounts: 200,
        numNewAccounts: 5,
        gaStats: {
          create: {
            numSessions: 200,
            avgPageviewsPerSession: 5,
            avgSessionDuration: 50,
            avgPageLoadTime: 0.30,
            bounceRate: 0.75
          }
        },
        totalNumGroups: 100,
        numNewGroups: 5
    }
  },
  gcMessage: {
    create: {
      totalNumAccounts: 200,
      numNewAccounts: 5,
      totalNumChannelMessages: 200,
      numNewChannelMessages: 5,
      totalNumPrivateGroupMessages: 200,
      numNewPrivateGroupMessages: 5,
      totalNumDirectMessages: 200,
      numNewDirectMessages: 5,
      totalNumFileUploads: 200,
      numNewFileUploads: 5
    }
  },
  gcPedia: {
    create: {
      totalNumAccounts: 200,
      numNewAccounts: 5,
      totalNumArticles: 200,
      numNewArticles: 5,
      totalNumEdits: 200,
      numNewEdits: 5
    }
  },
  gcWiki: {
    create: {
      totalNumAccounts: 200,
      numNewAccounts: 5,
      gaStats: {
        create: {
          numSessions: 200,
          avgPageviewsPerSession: 5,
          avgSessionDuration: 50,
          avgPageLoadTime: 0.30,
          bounceRate: 0.75
        }
      },
      totalNumArticles: 200,
      numNewArticles: 5,
      totalNumEdits: 200,
      numNewEdits: 5
    }
  }
};



const FEBRUARY_1789 = {
    month: 2,
    year: 1789,
    gcAccount: {
      create: {
        totalNumAccounts: 205,
        numNewAccounts: 5
      }
    },
    gcCollab: {
      create: {
        totalNumAccounts: 205,
        numNewAccounts: 5,
        gaStats: {
          create: {
            numSessions: 200, 
            avgPageviewsPerSession: 5,
            avgSessionDuration: 50,
            avgPageLoadTime: 1.3, 
            bounceRate: 0.75
          }
        },
        totalNumGroups: 105,
        numNewGroups: 5
      }
    },
    gcConnex: {
      create: {
          totalNumAccounts: 205,
          numNewAccounts: 5,
          gaStats: {
            create: {
              numSessions: 200,
              avgPageviewsPerSession: 5,
              avgSessionDuration: 50,
              avgPageLoadTime: 0.30,
              bounceRate: 0.75
            }
          },
          totalNumGroups: 105,
          numNewGroups: 5
      }
    },
    gcMessage: {
      create: {
        totalNumAccounts: 205,
        numNewAccounts: 5,
        totalNumChannelMessages: 205,
        numNewChannelMessages: 5,
        totalNumPrivateGroupMessages: 205,
        numNewPrivateGroupMessages: 5,
        totalNumDirectMessages: 205,
        numNewDirectMessages: 5,
        totalNumFileUploads: 205,
        numNewFileUploads: 5
      }
    },
    gcPedia: {
      create: {
        totalNumAccounts: 205,
        numNewAccounts: 5,
        totalNumArticles: 205,
        numNewArticles: 5,
        totalNumEdits: 205,
        numNewEdits: 5
      }
    },
    gcWiki: {
      create: {
        totalNumAccounts: 205,
        numNewAccounts: 5,
        gaStats: {
          create: {
            numSessions: 200,
            avgPageviewsPerSession: 5,
            avgSessionDuration: 50,
            avgPageLoadTime: 0.30,
            bounceRate: 0.75
          }
        },
        totalNumArticles: 205,
        numNewArticles: 5,
        totalNumEdits: 205,
        numNewEdits: 5
      }
    }
  };
  
  const MARCH_1789 = {
    month: 3,
    year: 1789,
    gcAccount: {
      create: {
        totalNumAccounts: 210,
        numNewAccounts: 5
      }
    },
    gcCollab: {
      create: {
        totalNumAccounts: 210,
        numNewAccounts: 5,
        gaStats: {
          create: {
            numSessions: 200,
            avgPageviewsPerSession: 5,
            avgSessionDuration: 50,
            avgPageLoadTime: 0.30,
            bounceRate: 0.75
          }
        },
        totalNumGroups: 105,
        numNewGroups: 5
      }
    },
    gcConnex: {
      create: {
          totalNumAccounts: 210,
          numNewAccounts: 5,
          gaStats: {
            create: {
              numSessions: 200, 
              avgPageviewsPerSession: 5,
              avgSessionDuration: 50,
              avgPageLoadTime: 0.30,
              bounceRate: 0.75 
            }
          },
          totalNumGroups: 105,
          numNewGroups: 5
      }
    },
    gcMessage: {
      create: {
        totalNumAccounts: 210,
        numNewAccounts: 5,
        totalNumChannelMessages: 210,
        numNewChannelMessages: 5,
        totalNumPrivateGroupMessages: 210,
        numNewPrivateGroupMessages: 5,
        totalNumDirectMessages: 210,
        numNewDirectMessages: 5,
        totalNumFileUploads: 210,
        numNewFileUploads: 5
      }
    },
    gcPedia: {
      create: {
        totalNumAccounts: 210,
        numNewAccounts: 5,
        totalNumArticles: 210,
        numNewArticles: 5,
        totalNumEdits: 210,
        numNewEdits: 5
      }
    },
    gcWiki: {
      create: {
        totalNumAccounts: 210,
        numNewAccounts: 5,
        gaStats: {
          create: {
            numSessions: 200, 
            avgPageviewsPerSession: 5,
            avgSessionDuration: 50,
            avgPageLoadTime: 0.30,
            bounceRate: 0.75
          }
        },
        totalNumArticles: 210,
        numNewArticles: 5,
        totalNumEdits: 210,
        numNewEdits: 5
      }
    }
  };



async function seed() {

  let period : Period = await prisma.createPeriod(JANUARY_1789);
  console.log(period);
  period = await prisma.createPeriod(FEBRUARY_1789);
  console.log(period);
  period = await prisma.createPeriod(MARCH_1789);
  console.log(period);

}

seed();