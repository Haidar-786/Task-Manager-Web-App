import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Actions/Actions";
// import { useNavigate } from "react-router-dom";
import "../../components/Login/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //navigating after the login success to tasks
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    // login(username, password);
    if (!email || !password) {
      alert("Please complete all fields");
    } else {
      // console.log(email,password,navigate)
      // navigate("/create")
      dispatch(login(email, password));
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        style={{padding:"10px",border :"1px solid #ccc", marginbottom:"10px"}}/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{padding:"10px",border :"1px solid #ccc"}}/>
        <button type="submit" className="btn" style={{backgroundcolor:"lightgreen"}}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
