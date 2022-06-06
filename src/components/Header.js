import React from "react";
import { NavLink } from "react-router-dom";

function Header(){
    return (
        <div className="header">
          <strong className="title">DogPod Treats</strong>
          <NavLink to="itemPage">Order Treats</NavLink>
          <NavLink to="about">About This App</NavLink>
        </div>
    )
}
export default Header;