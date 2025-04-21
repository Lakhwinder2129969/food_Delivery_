import { LOGO_URL } from "../utils/constants.js";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
const [btnNameReact, setBtnNameReact] = useState("LOGIN");

useEffect(()=>{
  console.log("use effetc called");
},[])

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt=""></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>
            <Link to="/">HOME</Link>  
            </li>
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT US</Link>
            </li>
            <li>
              <Link to="/cart">CART</Link>  
            </li>
            <button className="login" onClick={()=>{
              btnNameReact === "LOGIN"
              ? setBtnNameReact("LOGOUT")
              : setBtnNameReact("LOGIN");
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;