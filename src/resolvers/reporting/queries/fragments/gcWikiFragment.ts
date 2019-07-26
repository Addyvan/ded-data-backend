
const gcWikiFragment = `
fragment gcWiki on gcWiki {
    
    period {
        year
        month
    }
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
`

export default gcWikiFragment;