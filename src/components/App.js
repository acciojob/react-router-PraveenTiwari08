import React from "react";
import Navbar from "./navbar";
import Home from "./home";
import { Route, Switch } from "react-router-dom";
import About from "./about";

function App() {
  return (
    <div>
       <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
