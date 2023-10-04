import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


export const server = "http://localhost:4000"
export const Context = createContext();

const AppWrapper=()=>{
  const[isAuthenticated,setIsAuthenticated] = useState(false)
  const[Loading,setLoading] = useState(false);
  const[user,setUser]=useState({});
  return(
    <Context.Provider value={{ isAuthenticated,setIsAuthenticated,Loading,setLoading,user,setUser}}>
    <App />
    </Context.Provider>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);


