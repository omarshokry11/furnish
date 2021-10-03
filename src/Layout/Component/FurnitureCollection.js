import React from "react";
import Counter from "./Block/Counter";

import "./Style/FurnitureCollection.scss";

export default function FurnitureCollection({itemImages}) {
    return(
        <div className="main-furniture-collection-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 title text-center">
                        <span>OUR FINISH PROJECTS</span>
                        <h2>Furniture Collection</h2>
                    </div>
                    {itemImages.map((item) => <div className={item.className} key={item.id}>
                        <div className={item.class}>
                            <div className="background-color"> </div>
                            <div className="details">
                                <i className="fas fa-search"> </i>
                                <h2>Business Finance Consulting</h2>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
            <Counter />
        </div>
    )
}