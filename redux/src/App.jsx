import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withdraw as withDrawFromSlice, deposit as depositFromSlice } from './slices/balanceSlice';
import Transactions from './Transactions';
import { addTransaction } from './slices/transactionsSlice';

export default function App() {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.balance.value);
  const amountInput = useRef();

  const withdarw = () => {
    dispatch(withDrawFromSlice(+amountInput.current.value));``
    dispatch(addTransaction({ beforeBalance: balance, amount: +amountInput.current.value, afterBalance: (balance - +amountInput.current.value), type: "withdraw" }));
  }

  const deposit = () => {
    dispatch(depositFromSlice(+amountInput.current.value));
    dispatch(addTransaction({ beforeBalance: balance, amount: +amountInput.current.value, afterBalance: (balance + +amountInput.current.value), type: "deposit" }));
  }

  return (
    <div className='col-12 App d-flex flex-column container align-items-center pt-3 gap-3'>
      <div className='bg-white rounded shadow border p-3 col-12 col-md-5 gap-2' >
        <p>E-Wallet Balance : {balance} EGP</p>
        <input ref={amountInput} className='form-control' type="number" placeholder='Enter Amount' />
        <div className='col-12 d-flex justify-content-between pt-3'>
          <button className='btn btn-danger' onClick={withdarw}>Withdraw</button>
          <button className='btn btn-success' onClick={deposit}>Deposit</button>
        </div>
      </div>
      <Transactions />
    </div>
  )
}
