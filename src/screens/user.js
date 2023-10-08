import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function User() {
  const [showLogin, setShowLogin] = useState(true);
  
  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      <div>
        {showLogin ? <Login /> : <Signup />}
        <button className="switch-button" onClick={toggleForm}>
          {showLogin ? "new user register " : "already an user"}
        </button>
      </div>
    </div>
  );
}

export default User;
