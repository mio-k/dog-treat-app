import React from "react";
import { NavLink } from "react-router-dom";

function Header(){
    return (
      <>
        <div className="header">
          <strong className="title">DogPod Treats</strong>
          <NavLink className="nav" to="treats">Order Treats</NavLink>
          <NavLink className="nav" to="about">About This App</NavLink>
        </div>
      </>
    )
}
export default Header;