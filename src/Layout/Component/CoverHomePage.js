import React from "react";

import "./Style/coverHomePage.scss";

export default function coverHomePage() {
    return(
        <div className="main-cover-home-page-container">
            <div className="cover-item">
                <div className="title-cover">
                    <h2>Best Design of</h2>
                    <h1>Furniture Collections</h1>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <button>DISCOVER</button>
                </div>
            </div>
            <div className="cover-img"> </div>
        </div>
    )
}