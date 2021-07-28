import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "./Components/Auth";
import Welcome from "./Components/Welcome";
import Game from "./Components/Game";
import Mesagge from "./Components/Message";
import Goodbay from "./Components/Goodbye";
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/goodbye" component={Goodbay} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/message" component={Mesagge} />
        <Route path="/game" component={Game} />
        <Route path="/" component={Auth} />
      </Switch>
    </BrowserRouter>
  );
}
