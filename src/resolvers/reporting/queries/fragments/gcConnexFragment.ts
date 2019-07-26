
const gcConnexFragment = `
fragment gcConnex on gcConnex {
    totalNumAccounts
    numNewAccounts
    period {
        year
        month
    }
    totalNumGroups
    numNewGroups
    gaStats {
        numSessions
        avgPageviewsPerSession
        avgSessionDuration
        avgPageLoadTime
        bounceRate
    }
}
`

export default gcConnexFragment;