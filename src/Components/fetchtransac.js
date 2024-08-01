import React, { useEffect, useState } from 'react';
import './css/fetchtransac.css';
import { useTxnContext } from '../hooks/useTxn';
import { type } from '@testing-library/user-event/dist/type';
import { useAuthContext } from '../hooks/useAuth';
import NavbarPage from './navbarpage';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

function FetchTransactions() {
    const {transactions,dispatch}=useTxnContext()
    const {user}=useAuthContext()
    const {token}=useAuthContext()
    const navigate=useNavigate()
    useEffect (() => {
        const fetchTransactions = async () => {
            const response = await fetch('http://localhost:5000/api/txn/',{
              headers:{
                'Authorization':`Bearer ${user.token}`
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
        
    }, [dispatch,user])

  const handleModify= (id)=>{
    navigate('/updatetxn',{state:id})
  }
  const handleDelete=async (id)=>{
    const response=await fetch('http://localhost:5000/api/txn/'+id,{
      method:'DELETE',
      headers: {
        Authorization: `Bearer ${user.token}`,
      }
    })
    const json=await response.json()
    if(!response.ok){
      console.log('error')
    }
    if (response.ok){
      dispatch({type:'DELETE_TXN',payload:json})
    }
  }

  return (
    <div className="transactions">
      <NavbarPage title="Transactions"/>
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Modify</th>
            {/* <th>Delete</th> */}
          </tr>
        </thead>
        <tbody>
          {transactions && transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction.TxnDate.split('T')[0]}</td>
              <td>Rs.{transaction.Amount}</td>
              <td>{transaction.type}</td>
              <IconButton onClick={() => handleModify(transaction._id)} aria-label="modify">
                <EditIcon />
              </IconButton>
              <IconButton onClick={()=>handleDelete(transaction._id)} aria-label='delete'>
                <DeleteIcon />
              </IconButton>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FetchTransactions;

