import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../Components/HomePage/HomePage";
import MainTenanacePage from "../Components/System/MaintenancePage/MaintenancePage";
import SoftwareUpgradePage from "../Components/System/SoftwareUpgradePage/SoftwareUpgradePage";
import SettingsPage from "../Components/System/SettingsPage/SettingsPage";
import Downstream  from "../Components/Downstream/Downstream";
import Upstream from "../Components/Upstream/Upstream";
import Help from "../Components/Help/Help";


export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/downstream" component={Downstream}></Route>
      <Route exact path="/upstream" component={Upstream}></Route>
      <Route exact path="/system/maintenanace" component={MainTenanacePage} />
      <Route exact path="/system/softwareUpgrade" component={SoftwareUpgradePage} />
      <Route exact path="/system/settings" component={SettingsPage} /> 
      <Route exact path="/help" component={Help} /> 
    </Router>
  );
}
