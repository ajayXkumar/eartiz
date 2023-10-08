import React from "react";
import { useState,useContext } from "react";
import axios from "axios"
import {useNavigate } from 'react-router-dom';
import "./user.css"
import { Cartcontext } from '../context/shopcartcontext';

const Login = () => {

  const {loginStatussetter,loginStatus} = useContext(Cartcontext);

  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate =useNavigate();

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
      if(result.data.message=="Login successful"){
        loginStatussetter(true); 
        navigate("/")
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
            Handleemail(e.target.value);
          }}
        />

        <input
          className="second"
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => {
            Handlepassword(e.target.value);
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