import React from "react";
import CoverPages from "../Component/CoverPages";
import FurnitureCollection from "../Component/FurnitureCollection";
import NumberBlock from "../Component/Block/NumberBlock";

export default function CollectionPage() {

    const itemImages= [
        {id: 1, className: "col-lg-3 col-md-6 col-12", class: "item-details-1 item-details"},
        {id: 2, className: "col-lg-3 col-md-6 col-12", class: "item-details-2 item-details"},
        {id: 3, className: "col-lg-6 col-md-6 col-12", class: "item-details-3 item-details"},
        {id: 4, className: "col-lg-5 col-md-6 col-12", class: "item-details-4 item-details"},
        {id: 5, className: "col-lg-3 col-md-6 col-12", class: "item-details-5 item-details"},
        {id: 6, className: "col-lg-4 col-md-6 col-12", class: "item-details-6 item-details"},
        {id: 7, className: "col-lg-4 col-md-6 col-12", class: "item-details-7 item-details"},
        {id: 8, className: "col-lg-4 col-md-6 col-12", class: "item-details-8 item-details"},
        {id: 9, className: "col-lg-4 col-md-6 col-12", class: "item-details-9 item-details"},
    ]

    return(
        <div className="main-collection-page-container">
            <CoverPages title="Our Collection" text="WORK" />
            <FurnitureCollection itemImages={itemImages} />
            <NumberBlock />
        </div>
    )
}