import React from "react";
import { useState } from "react";
import axios from "axios"
import navigate from "react"
import "./user.css"
const Login = () => {

  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const Handlepassword = (value) => {
    if (value != null) {
      setpassword(value);
    }
  };

  const Handleemail=(value)=>{
    if(value!=null){
      setemail(value)
    }
    
  }

  const handlesubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:8000/login' ,{email,password})
    .then(result=> {
      console.log(result)
      if(result.data==="success"){
        navigate('/home')
      }
    })
    .catch(error=>console.log(error))
  }

  return (
    <div className="login-css">
      <form className="from"  onSubmit={handlesubmit}>
        <input
          className="email"
          type="email"
          placeholder="email"
          name="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />

        <input
          className="second"
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <button className="submit-button" type="submit">
          login
        </button>
      </form>
    </div>
  );
};

export default Login;