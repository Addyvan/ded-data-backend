
const quarterFragment = `
fragment allPeriod on Period {
  month
  year
  
  
  gcAccount {
    totalNumAccounts
    numNewAccounts
  }
  gcCollab {
    
    totalNumAccounts
    numNewAccounts
    gaStats {
      numSessions
      avgPageviewsPerSession
      avgSessionDuration
      avgPageLoadTime
      bounceRate
    }
    totalNumGroups
    numNewGroups
  }
  gcConnex {
    
    totalNumAccounts
    numNewAccounts
    gaStats {
      numSessions
      avgPageviewsPerSession
      avgSessionDuration
      avgPageLoadTime
      bounceRate
    }
    totalNumGroups
    numNewGroups
  }
  gcMessage {
    
    totalNumAccounts
    numNewAccounts

    totalNumChannelMessages
    numNewChannelMessages
    totalNumPrivateGroupMessages
    numNewPrivateGroupMessages
    totalNumDirectMessages
    numNewDirectMessages
    totalNumFileUploads
    numNewFileUploads
  }

  gcPedia {
    
    totalNumAccounts
    numNewAccounts

    totalNumArticles
    numNewArticles
    totalNumEdits
    numNewEdits
  }

  gcWiki {
    
    totalNumAccounts
    numNewAccounts

    gaStats {
      numSessions
      avgPageviewsPerSession
      avgSessionDuration
      avgPageLoadTime
      bounceRate
    }

    totalNumArticles
    numNewArticles
    totalNumEdits
    numNewEdits
  }
}
`

export default quarterFragment;