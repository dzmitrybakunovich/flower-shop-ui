import {render} from "react-dom";
import {
  BrowserRouter,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import React from "react";

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