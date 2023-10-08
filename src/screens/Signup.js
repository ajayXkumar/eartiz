import React from "react";
import { useState } from "react";
import axios from "axios"
import "./user.css"
const Signup = () => {
  const [name, setname] = useState();
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
  const Handlename=(value)=>{
    if(value!=null){
      setname(value)
    }
   
  }
  const handlesubmit =(e)=>{
      e.preventDefault()
      if(name!=null && email!=null && password!=null){
      axios.post('http://localhost:8000/register' ,{name,email,password})
      .then(result=>console.log(result))
      .catch(error=>console.log(error)) 
      }
  }

  
  return (
    <div className="login-css" onSubmit={handlesubmit}>
      <form className="from">
        <input
          className="name"
          type="text"
          placeholder="username"
          name="name"
          onChange={(e) => Handlename(e.target.value)}
        />

        <input
          className="email"
          type="email"
          placeholder="email"
          name="email"
          onChange={(e) => Handleemail(e.target.value)}
        />

        <input
          className="second"
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => Handlepassword(e.target.value)}
        />
        <button className="submit-button" type="submit">
          signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
