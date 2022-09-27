import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { auth } from "./base";

const Login = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
//   const navigate = useNavigate();

   
  const handleSubmit = (e) => {
    e.preventDefault();
    function onRegister() {
      setStatus("");
      signInWithEmailAndPassword(auth, email, password).
      then(()=>{navigate('/')}).
      catch((error) =>
      setStatus(error.code?.substring(5))
      )
    }
    onRegister();
  };

  const navigateHome = () => {
        navigate('/');
  };
  const navigateSignup = () => {
    navigate('/signup');
  };

  const clickContactUs = () => {
    navigate("/contactus");
};

  return (
    <div>
      
      <form className="loginForm" onSubmit={handleSubmit}>
      <b id="error" >{status}</b>
        <input
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button class="button"><span>Login</span></button>
        <p>New User? <button class="button" onClick={navigateSignup}><span>Signup</span></button></p>
      </form>
      <button class="button" onClick={clickContactUs}><span>Contact Us</span></button>
    </div>
  );
};

export default Login;