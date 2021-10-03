import React from "react";
import {NavLink} from "react-router-dom";

import "./Style/DropdownList.scss";

export default function DropdownList( {navLink} ) {
    return(
        <div className="dropdown-list-block">
            <ul className="link">
                {navLink.map((link) => <li key={link.id}><NavLink  to={link.pathLink} exact activeClassName={link.classActive}>{link.nameLink}</NavLink ></li>)}
            </ul>
        </div>
    )
}