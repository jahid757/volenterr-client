import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddEvent from "./components/AddEvent/AddEvent";
import Event from "./components/Event/Event";
import Home from "./components/Home/Home";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addEvent">Add Event</Link>
          </li>
          <li>
            <Link to="/event">Event</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addEvent">
            <AddEvent />
          </Route>
          <Route path="/event">
            <Event />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
