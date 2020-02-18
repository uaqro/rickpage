import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Home from "./components/Home";
import Episodes from "./components/Episodes";
import Characters from "./components/Characters";
import EpisodeDetail from "./components/EpisodeDetail";
import CharacterDetail from "./components/CharDetail";
import Signup from "./components/Signup";

const Router = () => (
  <BrowserRouter>
    <Main />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/characters" component={Characters} />
      <Route exact path="/episodes" component={Episodes} />
      <Route exact path="/episode-detail" component={EpisodeDetail} />
      <Route exact path="/character-detail" component={CharacterDetail} />
      <Route exact path="/register" component={Signup} />
    </Switch>
  </BrowserRouter>
);

export default Router;
