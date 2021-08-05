import "./styles/App.css";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import SingleCard from "./components/singleCard";
import Sets from "./components/sets";
import MagicLogo from "./components/magicLogo";
import SearchBar from "./components/search";
import NavBar from "./components/navBar";

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <MagicLogo />
        <SearchBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sets" component={Sets} />
          <Route path="/singles" component={SingleCard} />
        </Switch>
      </div>
    );
  }
}

export default App;
