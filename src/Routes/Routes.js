import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../Components/HomePage/HomePage";
import MainTenanacePage from "../Components/System/MaintenancePage/MaintenancePage";
import SoftwareUpgradePage from "../Components/System/SoftwareUpgradePage/SoftwareUpgradePage";
import SettingsPage from "../Components/System/SettingsPage/SettingsPage";
import Downstream from "../Components/Downstream/Downstream";
import Upstream from "../Components/Upstream/Upstream";
import Help from "../Components/Help/Help";


export default function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" component={() => (<HomePage />)} />
      {/* <Route exact path="/downstream" component={() => <Downstream {...props.showAlertBox}/>} ></Route> */}
      <Route exact path="/downstream" render={() => <Downstream {...props} />} ></Route>

      <Route exact path="/upstream" component={() => (<Upstream />)}></Route>
      <Route exact path="/maintenanace" component={() => (<MainTenanacePage />)} />
      <Route exact path="/softwareUpgrade" component={() => (<SoftwareUpgradePage />)} />
      {/* <Route exact path="/settings" component={() => (<SettingsPage />)} /> */}
      <Route exact path="/settings" render={() => <SettingsPage />} ></Route>

      <Route exact path="/help" component={() => (<Help />)} />
    </Switch>
  );
}
