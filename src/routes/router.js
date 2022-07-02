import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";

const RouterPage = () => {
  return (
    <Route>
      <Switch>
        <Router exact from="/" component={Home} />
        <React exact from="/product" component={Product}/>
      </Switch>
    </Route>
  );
};

export default RouterPage;
