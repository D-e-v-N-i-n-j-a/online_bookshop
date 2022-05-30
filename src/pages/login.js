import React from "react";
import { useEffect,useState, } from "react";
import { useNavigate } from "react-router-dom";
import TextBoxModel from "../components/textbox_model";
const image = require("../assets/images/avator.jpg");

const LoginPage = () => {
    let navigate = useNavigate();
    var [username,setUserName] = useState('')
    var [password,setPassword] = useState('')
  function handleForm(e) {
    e.preventDefault();
    const data = {username,password}
   if (username === '' || password === '') {
       alert("please fill the section")
   }else{ 
       navigate("/");
       console.log(data)
   }
  }
  return (
    <section className="login_container">
      <div className="login_form_container">
        <form onSubmit={handleForm}>
        <span>DON'T HAVE AN ACCOUNTS? <span className="create_accounts_link">signup</span></span>

          <img className="avatar" src={image} alt="" />
          <TextBoxModel placeholder={"Enter user name"} type={"text"} id={"uName"} value={username} callBack={(e)=>{setUserName(e.target.value)}}/>
          <TextBoxModel placeholder={"Enter user password"} type={"password"} id={"password"} value={password} callBack={(e)=>{setPassword(e.target.value)}}/>
          <div className="forgot_password">
          <span >Forgot password?</span>
          <button  className="btn_submit">Login</button>
          </div>
         
        </form>
        <span>OR</span>
            <div className="social">
            <button className="google_btn btn">Login with google <i className="fab fas-google"></i></button>
            <button className="linkedin_btn btn">Login with facebook <i className="fab fas-facebook"></i></button>
            </div>
      </div> 
    </section>
  );
};

export default LoginPage; 
