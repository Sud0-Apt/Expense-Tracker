import React, { useEffect, useState } from 'react';
import './css/fetchtransac.css';
import { useTxnContext } from '../hooks/useTxn';
import { type } from '@testing-library/user-event/dist/type';
import { useAuthContext } from '../hooks/useAuth';

function FetchTransactions() {
    const {transactions,dispatch}=useTxnContext()
    const {user}=useAuthContext()
    const {token}=useAuthContext()
    useEffect (() => {
        const fetchTransactions = async () => {
            const response = await fetch('http://localhost:5000/api/txn/',{
              headers:{
                'Authorization':`Bearer ${token}`
              }
            })
            const json = await response.json()
            if (response.ok) {
                dispatch({type:'SET_TXNS', payload:json})
            }
        }
        if (user){
          fetchTransactions()
        }
        
    }, [])

  return (
    <div className="transactions">
      <h2>Transactions</h2>
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions && transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.TxnDate}</td>
              <td>${transaction.Amount}</td>
              <td>{transaction.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FetchTransactions;
