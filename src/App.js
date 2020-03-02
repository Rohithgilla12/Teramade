import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from "./components/News";
import Publications from "./components/Publications";
import Home from "./components/Home";
import People from "./components/People";
import Collaborators from "./components/Collaborators";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/publications">
              <Publications />
            </Route>
            <Route path="/people">
              <People />
            </Route>
            <Route path="/collaborators">
              <Collaborators />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
