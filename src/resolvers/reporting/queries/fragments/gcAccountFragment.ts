
const gcAccountFragment = `
fragment gcAccount on gcAccount {
    totalNumAccounts
    numNewAccounts
    period {
        date
    }
}
`

export default gcAccountFragment;