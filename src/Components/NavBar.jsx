import React from "react";
import logo from "../assets/images/logo.jpg";

function NavBar() {
  return (
    <div
      className="Navbar"
      style={{
        background: "#000",
        textAlign: "center",
        position: "fixed",
        width: "100%",
        zIndex: "9999",
        top: "0px",
        padding: "15px",
      }}
    >
      <a href="/">
        <img style={{ width: "20%", padding: "1%" }} src={logo} alt="logo" />
        <span
          style={{
            fontFamily: "Caveat",
            textDecoration: "None",
            fontSize: "30px",
          }}
        >
          Galleria
        </span>
      </a>
    </div>
  );
}

export default NavBar;
