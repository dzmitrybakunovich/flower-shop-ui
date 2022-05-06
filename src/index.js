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
import EditProfile from "./pages/EditProfile";
import FindFlower from "./pages/FindFlower";
import EditProduct from "./pages/EditProduct";

import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import App from "./App";

const store = configureStore({});

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <BrowserRouter>
      <NavigationBar/>
      <App />
      <Footer/>
    </BrowserRouter>
  </Provider>,
  rootElement
);