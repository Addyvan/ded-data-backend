
const gcWikiFragment = `
fragment gcWiki on gcWiki {
    
    period {
        date
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