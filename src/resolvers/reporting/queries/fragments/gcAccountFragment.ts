
const gcAccountFragment = `
fragment gcAccount on gcAccount {
    totalNumAccounts
    numNewAccounts
    period {
        year
        month
    }
}
`

export default gcAccountFragment;