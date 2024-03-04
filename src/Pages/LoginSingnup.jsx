import React, { useState } from 'react'
import './CSS/LoginSignup.css'

function LoginSingnup() {
  const [state, setsatate] = useState("Login")
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async () =>{
    console.log("Login success full",formData)
    let responseData
    await fetch('http://localhost:8000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((Response)=> Response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token)
      window.location.replace("/")
    }
    else{
      alert(responseData.errors)
    }
  }

  const signup = async () =>{
    console.log("Sign up success full",formData)
    let responseData
    await fetch('http://localhost:8000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((Response)=> Response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token)
      window.location.replace("/")
    }
    else{
      alert(responseData.errors)
    }
  }


  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address'/>
          <input  name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state==="Sign Up"?<p className="loginsignup-login">มีบัญชีอยู่แล้ว? <span onClick={()=>{setsatate("Login")}}>เข้าสู่ระบบที่นี่</span></p>
        :<p className="loginsignup-login"> <span onClick={()=>{setsatate("Sign Up")}}>สร้างบัญชีที่นี่</span></p>}
        
        
        
      </div>
    </div>
  )
}

export default LoginSingnup

