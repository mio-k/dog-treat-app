import React from "react";
import { NavLink } from "react-router-dom";

function Header(){
    return (
        <div className="header">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/addtreat">Add a New Treat</NavLink>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/filter">Filter</NavLink>
        </div>
    )
}
export default Header;