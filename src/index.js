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
import Profile from "./pages/Profile";
import AddProduct from "./pages/AddProduct";
import Edit from "./pages/Edit";
import FindFlower from "./pages/FindFlower";

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
            <Route exact path="profile" element={<Profile/>}/>
            <Route exact path="add_product" element={<AddProduct/>}/>
            <Route exact path="edit" element={<Edit/>}/>
            <Route exact path="find_flower" element={<FindFlower/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>,
    rootElement
);