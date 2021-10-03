import React from "react";
import MainNavbar from "./Layout/Component/MainNavbar";
import HomePage from "./Layout/Pages/HomePage";
import AboutPage from "./Layout/Pages/AboutPage";
import CollectionPage from "./Layout/Pages/CollectionPage";
import BlogPage from "./Layout/Pages/BlogPage";
import ContactPage from "./Layout/Pages/ContactPage";
import MainFooter from "./Layout/Component/MainFooter";
import {BrowserRouter, Route, Switch} from "react-router-dom";

export default function App() {
  return (
    <div className="main-app-container">
        <BrowserRouter>
            <MainNavbar />
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/collection" component={CollectionPage}/>
                <Route path="/blog" component={BlogPage}/>
                <Route path="/contact" component={ContactPage}/>
            </Switch>
            <MainFooter />
        </BrowserRouter>
    </div>
  );
}
