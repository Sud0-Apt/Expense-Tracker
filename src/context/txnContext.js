import { createContext, useReducer } from 'react'

export const TxnContext = createContext()

export const txnReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TXNS':
            return {
                transactions: action.payload
            }
        case 'CREATE_TXN':
            return {
                transactions: [action.payload, ...state.transactions]
            }
        case 'DELETE_TXN':
            return {
                transactions:state.transactions.filter((t)=> t._id!==action.payload._id)
            }
        case 'UPDATE_TXN':
            return {
                transactions: state.transactions.map(t => 
                    t._id === action.payload._id ? action.payload : t
                )
            }
        default:
            return state
    }
}

export const TxnsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer (txnReducer, {
        transactions: []
    })
    return (
        <TxnContext.Provider value={{...state,dispatch}}>
        { children }
        </TxnContext.Provider>
    )
}