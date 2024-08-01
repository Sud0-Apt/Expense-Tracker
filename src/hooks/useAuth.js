import { AuthContext } from "../context/AuthContext"
import { useContext,useReducer } from 'react'

export const useAuthContext = () => {
    const context = useContext (AuthContext)
    if (!context) {
        throw Error('useTxnContext must be used inside an TxnContextProvider')
    }
    return context
}
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload.user, token: action.payload.token };
    case 'LOGOUT':
      return { user: null, token: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null, token: null });

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};


// src/hooks/useAuth.js
// import { useContext, createContext, useReducer } from 'react';

// const AuthContext = createContext();

// const authReducer = (state, action) => {
//   switch (action.type) {
//     case 'LOGIN':
//       return { user: action.payload.user, token: action.payload.token };
//     case 'LOGOUT':
//       return { user: null, token: null };
//     default:
//       return state;
//   }
// };

// export const AuthProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, { user: null, token: null });

//   return (
//     <AuthContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuthContext = () => useContext(AuthContext);
