import React from "react";
import CoverPages from "../Component/CoverPages";
import OurBlog from "../Component/OurBlog";
import NumberBlock from "../Component/Block/NumberBlock";

import "./Style/BlogPage.scss";

export default function BlogPage() {

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
        {id: 5, className: "blog-img", classOrder: "blog-details", img: "/img/blog-1.webp", h3: "Shop the Look Cottage Country Living Room", p: "A small river named Duden flows by their place.",
            spanItem: [
                {id: 1, icon: "fas fa-user", name: "ADMIN"},
                {id: 2, icon: "fas fa-calendar", name: "JAN. 27, 2021"},
                {id: 3, icon: "fas fa-comment", name: "3 COMMENTS", class: "comment"},
            ]},
        {id: 6, className: "blog-img ", classOrder: "blog-details", img: "/img/blog-2.webp", h3: "Shop the Look Cottage Country Living Room", p: "A small river named Duden flows by their place.",
            spanItem: [
                {id: 1, icon: "fas fa-user", name: "ADMIN"},
                {id: 2, icon: "fas fa-calendar", name: "JAN. 27, 2021"},
                {id: 3, icon: "fas fa-comment", name: "3 COMMENTS", class: "comment"},
            ]},
    ]

    return(
        <div className="main-blog-page-container">
            <CoverPages title="Our Blog" text="BLOG " />
            <div className="blog-page-content">
                <OurBlog orderItem={orderItem} />
                <NumberBlock />
            </div>
        </div>
    )
}