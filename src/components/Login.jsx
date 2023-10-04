import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Context, server } from '../index'
import toast from 'react-hot-toast'
import axios from 'axios'

const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {isAuthenticated,setIsAuthenticated,Loading,setLoading} = useContext(Context);

  const submitHandler= async (e)=>{
    e.preventDefault();
    setLoading(true);
       try {
        console.log(server);
        const {data} = await axios.post(`${server}/users/login`,{
            email,password, 
        },{
            headers:{
                "Content-Type":"application/json"           // aslo this is bydefault 
            },
            withCredentials:true,
        })
        // console.log(server);
        toast.success(data.message);
        setIsAuthenticated(true);
        setLoading(false);
    } catch (error) {
        toast.error(error.message);
        console.log(error.message);  
        setIsAuthenticated(false);
        setLoading(false);
    }
   };
  if(isAuthenticated) return <Navigate to={"/"}/>
  return (
    <div className='login'>
        <section>
            <form onSubmit={submitHandler}>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='Email' required/>
             <input  
             value={password} 
             onChange={(e)=> setPassword(e.target.value)} 
             type='password' 
             placeholder='Password'
             required />
            <button disabled={Loading} type='submit'>Login</button>
            <h4>Or</h4>
            <Link to="/register">Sign Up</Link>
            </form>
        </section>
    </div>
  )
}

export default Login