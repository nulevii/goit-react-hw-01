import React from 'react'
import { TransactionInterface } from '../../utilities/interfaces'
import style from './style.module.css'

function TransactionHistory ({
  items
}: {
  items: TransactionInterface[]
}): JSX.Element {
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, amount, currency, type }) => (
              <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TransactionHistory
