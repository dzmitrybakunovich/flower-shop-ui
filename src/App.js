import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import SignIn from "./pages/SignIn";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import AddProduct from "./pages/AddProduct";
import EditProfile from "./pages/EditProfile";
import EditProduct from "./pages/EditProduct";
import FindFlower from "./pages/FindFlower";
import React from "react";

import {useSelector} from "react-redux";

export default function App() {
  const user = useSelector((state) => state.authReducer.user)

  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      {!user && <Route exact path="sign_in" element={<SignIn/>}/>}
      {!user && <Route exact path="register" element={<Register/>}/>}
      <Route exact path="flowers" element={<ProductList/>}/>
      <Route exact path="product" element={<ProductDetails/>}/>
      <Route exact path="profile/:uuid" element={<Profile/>}/>
      <Route exact path="add_product" element={<AddProduct/>}/>
      <Route exact path="edit_profile/:uuid" element={<EditProfile/>}/>
      <Route exact path="edit_product" element={<EditProduct/>}/>
      <Route exact path="find_flower" element={<FindFlower/>}/>
    </Routes>
  )
}