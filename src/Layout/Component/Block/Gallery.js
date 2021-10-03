import React from "react";

import "./Style/Gallery.scss";

export default function Gallery() {

    const imageItems = [
        {id: 1, className: "item item-details-1", icon: "fas fa-search", h2: "Business Finance Consulting"},
        {id: 2, className: "item item-details-2", icon: "fas fa-search", h2: "Business Finance Consulting"},
        {id: 3, className: "item item-details-3", icon: "fas fa-search", h2: "Business Finance Consulting"},
        {id: 4, className: "item item-details-4", icon: "fas fa-search", h2: "Business Finance Consulting"},
        {id: 5, className: "item item-details-5", icon: "fas fa-search", h2: "Business Finance Consulting"},
        {id: 6, className: "item item-details-6", icon: "fas fa-search", h2: "Business Finance Consulting"},
    ]

    return(
        <div className="main-gallery-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center title">
                        <span>GALLERY</span>
                        <h2>Latest Collection</h2>
                    </div>
                    {imageItems.map((item) => <div className="col-md-2 col-12" key={item.id}>
                        <div className={item.className}>
                            <div className="background-color"> </div>
                            <div className="details">
                                <i className={item.icon}> </i>
                                <h2>{item.h2}</h2>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}