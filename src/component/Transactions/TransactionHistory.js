import React from 'react'
import PropTypes from 'prop-types'
import css from './TransactionHistory.module.css'


const TransactionHistory = ({transactionData}) => {
    return (
        <div className={css.box}>
        <table class="transaction-history">
  <thead>
    <tr>
      <th className={css.nameTag}>Type</th>
      <th className={css.nameTag}>Amount</th>
      <th className={css.nameTag}>Currency</th>
    </tr>
  </thead>

  <tbody>
      {transactionData.map(el=> <tr key={el.id}>
      <td>{el.type}</td>
      <td>{el.amount}</td>
      <td>{el.currency}</td>
      </tr>)}
  </tbody>
</table>
</div>
    );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
    transactionData: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string
        })
    )
}