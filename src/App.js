import React from "react";
import "./App.css";
import Card from "./components/Card/CardWoman";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="elegir">
        Elegí una Card
        <Link className="link-1" to="/Card/0">
          <i class="fa fa-cog" aria-hidden="true"></i>
        </Link>
        <Link className="link-1" to="/Card/1">
          <i class="fa fa-cog" aria-hidden="true"></i>
        </Link>
        <Link className="link-1" to="/Card/2">
          <i class="fa fa-cog" aria-hidden="true"></i>
        </Link>
      </div>
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/Card/:id">
          <Card></Card>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
