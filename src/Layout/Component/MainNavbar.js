import React, {useState} from "react";
import {NavLink} from "react-router-dom";

import "./Style/MainNavbar.scss";
import DropdownList from "./Block/DropdownList";

export default function MainNavbar() {

    const navLink = [
        {id: 1, pathLink: "/", nameLink: "Home", classActive: "active"},
        {id: 2, pathLink: "/about", nameLink: "About", classActive: "active"},
        {id: 3, pathLink: "/collection", nameLink: "Collection", classActive: "active"},
        {id: 4, pathLink: "/blog", nameLink: "Blog", classActive: "active"},
        {id: 5, pathLink: "/contact", nameLink: "Contact", classActive: "active"},
    ]

    const [click, setClick] = useState();

    return(
       <div className="main-navbar-container">
           <div className="container">
               <div className="row">
                   <div className="col-6">
                       <NavLink  to="/" className="logo">Furnish</NavLink >
                   </div>
                   <div className="col-6 d-lg-block d-none">
                       <ul className="link">
                           {navLink.map((link) => <li key={link.id}><NavLink  to={link.pathLink} exact activeClassName={link.classActive}>{link.nameLink}</NavLink ></li>)}
                       </ul>
                   </div>
                   <div className="col-6 d-lg-none d-block dropdown-list" onClick={()=>setClick(!click)}>
                       <div className="dropdown-list-item">
                           <div> </div>
                           <div> </div>
                           <div> </div>
                       </div>
                       <p>Menu</p>
                   </div>
                   {click ? <DropdownList navLink={navLink}/> : null}
               </div>
           </div>
       </div>
    )
}