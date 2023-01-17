import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import RunningOFDMTab from "../components/RunningConfigurationPage/OFDMTab/OFDMTab";
import RunningOFDMTabQAMTab from "../components/RunningConfigurationPage/QAMTab/QAMTab";
import ManageConfigurationPage from "../components/ManageConfigurationPage/ManageConfigurationPage";
import ConfigurationQAMTab from "../components/ConfigurationPage/QAMTab";
import ConfigurationOFDMTab from "../components/ConfigurationPage/OFDMTab";
import MainTenanacePage from "../components/System/MaintenancePage/MaintenancePage";
import SoftwareUpgradePage from "../components/System/SoftwareUpgradePage/SoftwareUpgradePage";
import SettingsPage from "../components/System/SettingsPage/SettingsPage";


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
