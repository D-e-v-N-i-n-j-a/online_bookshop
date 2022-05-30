import {React,useState} from "react";
import { useNavigate } from "react-router-dom";
const logo = require("../assets/icons/logo.png");
//const user = require("../assets/icons/user.png");
const NavigationBar = () => {
  let navigator = useNavigate();
    var [defaultValue,isClicker] = useState(true);
    function openDrawer(){
        isClicker(false)
    }
    function close(){
        isClicker(true);
    }
    return (
      
    <nav>
      <div className="logo">
        <img onClick={()=>{navigator("/")}} src={logo} alt="" />
      </div>
      <ul className={!defaultValue && "openDrawer" || "nav_links"}>
        <li  className="nav_link">
          Home
          <div className="underline"></div>
        </li>
        <li className="nav_link">
          Books
          <div className="underline"></div>
        </li>
        <li onClick={()=>{navigator("/library")}} className="nav_link">
          My Library
          <div className="underline"></div>
        </li>

        <li className="nav_link" id="mobile">Login</li>
      </ul>

      <div className="user_accounts">
        <span onClick={()=>{navigator("/login")}}>Login/Register</span>
      </div>
     {
         defaultValue &&  <div onClick={openDrawer} className="bars">
         <i className="fa fa-bars"></i>
       </div> ||  <div onClick={close} className="bars">
        <i className="fa fa-times"></i>
      </div>
     }
    </nav>
  );
};

export default NavigationBar;
