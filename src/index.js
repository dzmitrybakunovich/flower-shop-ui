import {render} from "react-dom";
import {
    BrowserRouter,
    Route, Routes,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import React from "react";
import ProductDetails from "./pages/ProductDetails";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <NavigationBar/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="sign_in" element={<SignIn/>}/>
            <Route exact path="flowers" element={<ProductList/>}/>
            <Route exact path="register" element={<Register/>}/>
            <Route exact path="product" element={<ProductDetails/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>,
    rootElement
);