import React, { useState, useEffect } from 'react';
import './css/dashboard.css';
import { useTxnContext } from '../hooks/useTxn';
import { useAuthContext } from '../hooks/useAuth';
import NavbarPage from './navbarpage';
import { useLocation,useNavigate } from "react-router-dom";

function UpdateTxn() {
  const {dispatch}=useTxnContext()
  const {user}=useAuthContext()
  const {token}=useAuthContext()
  const [transaction, setTransaction] = useState({
    TxnDate: '',
    Amount: '',
    type: ''
  });
  const [type,setType]=useState('')
  const [Amount, setAmt]=useState('')
  const [TxnDate, setDate]=useState('')
  
  const [error,setError]=useState(null)
  const location = useLocation();
  const id = location.state;
  const navigate=useNavigate();

  useEffect (() => {
    const fetchTransaction = async () => {
        console.log(id)
        const response = await fetch('http://localhost:5000/api/txn/'+id, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch transaction');
        }

        const data = await response.json();
        setDate(data.TxnDate.split('T')[0]);
        setAmt(data.Amount);
        setType(data.type);
        /*setTransaction({
          TxnDate: data.TxnDate.split('T')[0],
          Amount: data.Amount,
          type: data.type
        });*/
        console.log(data)
      
      
    };
    if(user){
      fetchTransaction();
    }
    
  },[id,user])

  /*const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      [name]: value,
    }));
  }*/
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    //const userid=user._id
    const txn = {type,Amount,TxnDate}
    console.log(txn)
    const response = await fetch('http://localhost:5000/api/txn/'+id, {
      method: 'PUT',
      body: JSON.stringify(txn),
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${user.token}`
      }
    })
    const updatedTransaction = await response.json();
    if(!response.ok){
      setError(updatedTransaction.error)
    }
    if(response.ok){
      // Dispatch the UPDATE_TXN action
      dispatch({ type: 'UPDATE_TXN', payload: updatedTransaction });
      console.log(updatedTransaction);
      navigate('/transactions')
    }
    
  };

  return (
    <div className="dashboard">
      <NavbarPage title="Expense Entry" />
      <form onSubmit={handleSubmit} className="expense-form">
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={TxnDate}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={Amount}
            onChange={(e) => setAmt(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            <option value="food">Food</option>
            <option value="transportation">Transportation</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className="btn">Modify Expense</button>
        {error && <div className="error">{error} </div>}
      </form>
    </div>
  );
}

export default UpdateTxn;