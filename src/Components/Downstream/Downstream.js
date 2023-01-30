import React, { useState } from 'react'
import RunningConfigPage from '../RunningConfigPages/RunningConfigPage'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ManageConfigurationPage from '../ManageConfigurationPage/ManageConfigurationPage';
import Configuration from '../ConfigurationPages/Configuration';


const Downstream = (props) => {

  const [activeTab, setActiveTab] = useState('RunningConfigPage');

  const handleTabChange = (eventKey) => {
    setActiveTab(eventKey);
  }

  return (
    <div className='tabs_wrapper'>
      <Tabs
        // defaultActiveKey="RunningConfigPage"
        activeKey={activeTab}
        id="uncontrolled-tab-example"
        className="nav_tabs"
        onSelect={(eventKey) => handleTabChange(eventKey)}
        unmountOnExit={true}
      >
        <Tab eventKey="RunningConfigPage" title="Running Configuration">
          <RunningConfigPage showAlertBox={props.showAlertBox}/>
        </Tab>
        <Tab eventKey="ManageConfigurationPage" title="Manage Configurations">
          <ManageConfigurationPage setActiveTab={setActiveTab} />
        </Tab>
        <Tab eventKey="configuration" title="Configuration">
          <Configuration />
        </Tab>
      </Tabs>
    </div>
  )
}

export default Downstream
