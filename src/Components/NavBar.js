import React from 'react'
import { NavLink } from "react-router-dom";

const linkStyles = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "thistle",
    textDecoration: "none",
    color: "white",
  };
  

function NavBar() {
return (
    <div className="nav">
        <NavLink 
            exact to="/"
            style={linkStyles} 
            activeStyle ={{background: "purple"}}>
            List of Dirtbags</NavLink>

            <NavLink
            to="/bored" exact
            style={linkStyles} 
            activeStyle ={{background: "purple"}}>
            Getting Bored?
            </NavLink>

            <NavLink
            to="/addNew" exact
            style={linkStyles} 
            activeStyle ={{background: "purple"}}>
            Add New DirtBag
            </NavLink>
            
    
        </div>
)
}

export default NavBar