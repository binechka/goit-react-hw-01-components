import PropTypes from "prop-types"


import css from "./TransactionHistory.module.css"

const TransactionHistory = ({items}) => {
    return <table className={css.transactionHistory}>
  <thead className={css.thead}>
    <tr className={css.tr}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

      <tbody className={css.tbody}>
            {items.map(transaction => {
              return <tr className={css.tr} key = {transaction.id}>
                    <td>{ transaction.type}</td>
                    <td>{ transaction.amount}</td>
                    <td>{ transaction.currency}</td>
    </tr>
            })}
  </tbody>
</table>
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
}

export default TransactionHistory