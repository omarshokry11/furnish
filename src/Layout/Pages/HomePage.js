import React from "react";
import CoverHomePage from "../Component/CoverHomePage";
import FtcoDetails from "../Component/FtcoDetails";
import QualityMakes from "../Component/QualityMakes";
import FurnitureCollection from "../Component/FurnitureCollection";
import CarouselAliceItem from "../Component/CarouselAlice";
import Work from "../Component/Work";
import OurBlog from "../Component/OurBlog";

import "./Style/HomePage.scss";

export default function HomePage() {

    const itemImages= [
        {id: 1, className: "col-lg-3 col-md-6 col-12", class: "item-details-1 item-details"},
        {id: 2, className: "col-lg-3 col-md-6 col-12", class: "item-details-2 item-details"},
        {id: 3, className: "col-lg-6 col-md-6 col-12", class: "item-details-3 item-details"},
        {id: 4, className: "col-lg-5 col-md-6 col-12", class: "item-details-4 item-details"},
        {id: 5, className: "col-lg-3 col-md-6 col-12", class: "item-details-5 item-details"},
        {id: 6, className: "col-lg-4 col-md-6 col-12", class: "item-details-6 item-details"}
    ]

    const orderItem = [
        {id: 1,  className: "blog-img", classOrder: "blog-details", img: "/img/blog-1.webp", h3: "Shop the Look Cottage Country Living Room", p: "A small river named Duden flows by their place.",
            spanItem: [
                {id: 1, icon: "fas fa-user", name: "ADMIN"},
                {id: 2, icon: "fas fa-calendar", name: "JAN. 27, 2021"},
                {id: 3, icon: "fas fa-comment", name: "3 COMMENTS", class: "comment"},
            ]},
        {id: 2,  className: "blog-img", classOrder: "blog-details", img: "/img/blog-2.webp", h3: "Shop the Look Cottage Country Living Room", p: "A small river named Duden flows by their place.",
            spanItem: [
                {id: 1, icon: "fas fa-user", name: "ADMIN"},
                {id: 2, icon: "fas fa-calendar", name: "JAN. 27, 2021"},
                {id: 3, icon: "fas fa-comment", name: "3 COMMENTS", class: "comment"},
            ]},
        {id: 3, className: "blog-img order-1", classOrder: "blog-details order-item", img: "/img/blog-3.webp", h3: "Shop the Look Cottage Country Living Room", p: "A small river named Duden flows by their place.",
            spanItem: [
                {id: 1, icon: "fas fa-user", name: "ADMIN"},
                {id: 2, icon: "fas fa-calendar", name: "JAN. 27, 2021"},
                {id: 3, icon: "fas fa-comment", name: "3 COMMENTS", class: "comment"},
            ]},
        {id: 4, className: "blog-img order-1", classOrder: "blog-details order-item", img: "/img/blog-4.webp", h3: "Shop the Look Cottage Country Living Room", p: "A small river named Duden flows by their place.",
            spanItem: [
                {id: 1, icon: "fas fa-user", name: "ADMIN"},
                {id: 2, icon: "fas fa-calendar", name: "JAN. 27, 2021"},
                {id: 3, icon: "fas fa-comment", name: "3 COMMENTS", class: "comment"},
            ]},
    ]

    return(
        <div className="main-home-page-container">
            <CoverHomePage />
            <div className="main-home-page-content">
                <FtcoDetails />
                <QualityMakes />
                <FurnitureCollection itemImages={itemImages} />
                <div className="carousel-alice">
                    <CarouselAliceItem />
                    <Work />
                </div>
                <OurBlog orderItem={orderItem} />
            </div>
        </div>
    )
}