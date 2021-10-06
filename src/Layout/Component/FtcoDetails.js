import React from "react";

import "./Style/FtcoDetails.scss";

export default function FtcoDetails() {

    const items = [
        {id: 1, className: "item item-1", icon: "far fa-handshake", h2: "Amazing Deals", p: "Far far away, behind the word mountains, far from the countries Vokalia."},
        {id: 2, className: "item item-2", icon: "fas fa-sink", h2: "Quality Furniture", p: "Far far away, behind the word mountains, far from the countries Vokalia."},
        {id: 3, className: "item item-3", icon: "fas fa-chair", h2: "Modern Design", p: "Far far away, behind the word mountains, far from the countries Vokalia."},
        {id: 4, className: "item item-4", icon: "fas fa-headset", h2: "Best Support", p: "Far far away, behind the word mountains, far from the countries Vokalia."},
    ]

    return(
        <div className="main-ftco-details-container">
            <div className="container-fluid">
                <div className="row">
                    {items.map((item) =>  <div className="col-lg-3 col-md-6 col-12 items" key={item.id}>
                        <div className={item.className}>
                            <div className="icon"><i className={item.icon}> </i></div>
                            <div className="item-details">
                                <h2>{item.h2}</h2>
                                <p>{item.p}</p>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}