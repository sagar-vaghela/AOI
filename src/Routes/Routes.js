import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../Components/HomePage/HomePage";

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
    </Router>
  );
}
