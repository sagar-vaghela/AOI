import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import OFDMTab from "./Channels/OFDMTab/OFDMTab";
import QAMTab from "./Channels/QAMTab/QAMTab";

const RunningConfigPage = (props) => {
  return (
    <Tabs
      defaultActiveKey="QAMChannels"
      id="uncontrolled-tab-example"
      className="config_tabs border border-dark"
      unmountOnExit={true}
    >
      <Tab eventKey="QAMChannels" tabClassName="fw-bold" title="QAM Channels">
        <QAMTab />
      </Tab>
      <Tab eventKey="OFDMChannels" tabClassName="fw-bold" title="OFDM Channels">
        <OFDMTab />
      </Tab>
    </Tabs>
  );
};

export default RunningConfigPage;
