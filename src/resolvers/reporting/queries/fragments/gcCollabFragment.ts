
const gcCollabFragment = `
fragment gcCollab on gcCollab {
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

export default gcCollabFragment;