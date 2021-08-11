import "./styles/App.css";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import MagicLogo from "./components/magicLogo";
import SearchBar from "./components/search";
import Home from "./components/home";
import Sets from "./components/sets";
import SingleCard from "./components/singleCard";

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <MagicLogo />
        <SearchBar />
        <Switch>
          <Route path="/singles" component={SingleCard} />
          <Route path="/sets" component={Sets} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
