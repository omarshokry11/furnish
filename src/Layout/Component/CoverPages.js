import React from "react";
import {NavLink} from "react-router-dom";

import "./Style/CoverPages.scss";

export default function CoverPages(props) {
    return(
        <div className="main-cover-pages-container">
            <div className="title-cover-page">
                <NavLink to="/">Home <i className="fas fa-angle-right"> </i></NavLink>
                <span>{props.text} <i className="fas fa-angle-right"> </i></span>
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}