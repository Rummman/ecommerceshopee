import React from "react";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Cart from './Pages/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      
      <Switch>
        <Route path="/" exact component={Home} strict={true} />

        <Route path="/list" component={ProductList} />
        
        <Route path="/cart" component={Cart} />

        <Route path="/details/:id" component={Product} />

        <Redirect to="/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
