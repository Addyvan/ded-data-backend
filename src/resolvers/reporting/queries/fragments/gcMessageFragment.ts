
const gcMessageFragment = `
fragment gcMessage on gcMessage {
    totalNumAccounts
    numNewAccounts
    period {
        year
        month
    }
    totalNumChannelMessages
    numNewChannelMessages
    totalNumPrivateGroupMessages
    numNewPrivateGroupMessages
    totalNumDirectMessages
    numNewDirectMessages
    totalNumFileUploads
    numNewFileUploads
}
`

export default gcMessageFragment;