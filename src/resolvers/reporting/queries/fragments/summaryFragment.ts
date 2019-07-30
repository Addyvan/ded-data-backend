
const summaryFragment = `
fragment summaryFragment on Period {
  date
  
  gcAccount {
    totalNumAccounts
  }
  gcCollab {
    totalNumAccounts
    gaStats {
      numSessions
      avgPageviewsPerSession
      avgSessionDuration
      avgPageLoadTime
      bounceRate
    }
    totalNumGroups
  }
  gcConnex {
    totalNumAccounts
    gaStats {
      numSessions
      avgPageviewsPerSession
      avgSessionDuration
      avgPageLoadTime
      bounceRate
    }
    totalNumGroups
  }
  gcMessage {
    totalNumAccounts
    totalNumChannelMessages
    totalNumPrivateGroupMessages
    totalNumDirectMessages
    totalNumFileUploads
  }

  gcPedia {
    totalNumAccounts
    totalNumArticles
    totalNumEdits
  }

  gcWiki {
    totalNumAccounts
    gaStats {
      numSessions
      avgPageviewsPerSession
      avgSessionDuration
      avgPageLoadTime
      bounceRate
    }

    totalNumArticles
    totalNumEdits
  }
}
`

export default summaryFragment;