import React from 'react'
import { useSelector } from 'react-redux'

export default function Transactions() {
    const transactions = useSelector(state => state.transactions.value);
    return (
        <table className='table table-dark table-bordered'>
            <thead>
                <tr>
                    <th>-</th>
                    <th>Before Balance</th>
                    <th>Transaction Amount</th>
                    <th>Transaction Type</th>
                    <th>After Balance</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((el, index) => {
                    return (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <th>{el.beforeBalance}</th>
                            <th>{el.amount}</th>
                            <th>{el.type}</th>
                            <th>{el.afterBalance}</th>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
