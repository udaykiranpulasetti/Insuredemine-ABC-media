import React, { useState } from "react";
import "../login/Login.css";
import UserDb from "../../userData";
import {useNavigate} from 'react-router-dom';


const Login = ({setUser, setLogin, setPrivateUser }) => {
  let navigate = useNavigate();
  const [email, seteEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e) => {
    let success = false;
    e.preventDefault();
    UserDb.map((person) => {
      if (person.userid === email && person.password === password) {
        if(person.public === false) setPrivateUser(true);
        setLogin(true);
        success = true;       
        setUser(person.username);
        return navigate("/Home");   
      }
    });
    {
      !success && alert("Email and Password are incorrect");
    }
  };
 
  return (
    <div className="loginModal">
      <form className="loginCard" onSubmit={onSubmitHandler}>
        <div className="inputs">
          <div className="input">
            <label>UserId:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => seteEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <input className="btn btn-primary" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
