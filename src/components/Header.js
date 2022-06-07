import React from "react";
import { NavLink } from "react-router-dom";

function Header(){
    return (
        <div className="header">
          <p>test test</p>
          <strong className="title">DogPod Treats</strong>
          <NavLink to="ItemPage">Order Treats</NavLink>
          <NavLink to="about">About This App</NavLink>
        </div>
    )
}
export default Header;