import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Comeponent
import Home from "./containers/home";
import DetailFilm from "./containers/profileFilm";
import CheckOutTicket from "./containers/bootAChair";

function App() {
  return (
    <div className="App">
      {/* <DetailFilm/> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detailfilm" component={DetailFilm} />
          <Route exact path="/checkout" component={CheckOutTicket} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
