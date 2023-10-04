import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import { Context, server } from '../index'
import toast from 'react-hot-toast'

const Register = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {isAuthenticated,setIsAuthenticated,Loading,setLoading} = useContext(Context);

   const submitHandler= async (e)=>{
    e.preventDefault();
    setLoading(true);
       try {
        console.log(server);
        const response = await axios.post(`${server}/users/new`,{
            name,email,password, 
        },{
            headers:{
                "Content-Type":"application/json"           // aslo this is bydefault 
            },
            withCredentials:true,
        })
        console.log(server);
        toast.success(response.data.message);
        setIsAuthenticated(true);
        setLoading(false);
    } catch (error) {
        toast.error("Some Error");
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
        <input value={name} onChange={(e)=>setName(e.target.value)} type='text' placeholder='Name' required/>
        <input value={email} onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='Email' required/>
        <input  
        value={password} 
        onChange={(e)=> setPassword(e.target.value)} 
        type='password' 
        placeholder='Password'
        required />

        <button type='submit'>Sign Up</button>
        <h4>Or</h4>
        <Link to="/login">Login</Link>
        </form>
    </section>
</div>
  )
}

export default Register