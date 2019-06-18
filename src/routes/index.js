import React, { Fragment } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import Login from "../pages/Auth/login";
import Admin from "../pages/Admin";

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
