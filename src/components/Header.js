import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loginButtonName, setLoginButtonName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li> Home </li>
          <li> About Us </li>
          <li> Contact Us </li>
          <li> Cart </li>
          <button
            className="login-button"
            onClick={() => {
              loginButtonName === "Login"
                ? setLoginButtonName("Logout")
                : setLoginButtonName("Login");
            }}
          >
            {" "}
            {loginButtonName}{" "}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
