import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../Components/HomePage/HomePage";
import RunningOFDMTab from "../Components/RunningConfigurationPage/OFDMTab/OFDMTab";
import RunningOFDMTabQAMTab from "../Components/RunningConfigurationPage/QAMTab/QAMTab";
import ManageConfigurationPage from "../Components/ManageConfigurationPage/ManageConfigurationPage";
import ConfigurationQAMTab from "../Components/ConfigurationPage/QAMTab";
import ConfigurationOFDMTab from "../Components/ConfigurationPage/OFDMTab";
import MainTenanacePage from "../Components/System/MaintenancePage/MaintenancePage";
import SoftwareUpgradePage from "../Components/System/SoftwareUpgradePage/SoftwareUpgradePage";
import SettingsPage from "../Components/System/SettingsPage/SettingsPage";


export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/runningConfiguration/OFDMTab" component={RunningOFDMTab} />
      <Route exact path="/runningConfiguration/QAMTab" component={RunningOFDMTabQAMTab} />
      <Route exact path="/manageConfiguration" component={ManageConfigurationPage} />
      <Route exact path="/configuration/QAMTab" component={ConfigurationQAMTab} />
      <Route exact path="/configuration/OFDMTab" component={ConfigurationOFDMTab} />
      <Route exact path="/system/maintenanace" component={MainTenanacePage} />
      <Route exact path="/system/softwareUpgrade" component={SoftwareUpgradePage} />
      <Route exact path="/system/settings" component={SettingsPage} />

    </Router>
  );
}
