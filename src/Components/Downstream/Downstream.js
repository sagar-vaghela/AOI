import React, { useEffect, useState } from 'react'
import RunningConfigPage from '../RunningConfigPages/RunningConfigPage'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ManageConfigurationPage from '../ManageConfigurationPage/ManageConfigurationPage';
import Configuration from '../ConfigurationPages/Configuration';


const Downstream = (props) => {
  const [activeTab, setActiveTab] = useState('RunningConfigPage');
  const [dataBaseName, setDataBaseName] = useState('');
  const [chID, setChID] = useState('');
  const [tabDisable, setTabDisable] = useState('disabled-link');
  const [configuratonData, setConfiguratonData] = useState([]);


  const handleTabChange = (eventKey) => {
    setActiveTab(eventKey);
  };

  return (
    <div className='tabs_wrapper'>
      <Tabs
        // defaultActiveKey="RunningConfigPage"
        activeKey={activeTab}
        id="uncontrolled-tab-example"
        className="nav_tabs links-nav"
        onSelect={(eventKey) => handleTabChange(eventKey)}
        unmountOnExit={true}
      >
        <Tab eventKey="RunningConfigPage" title="Running Configuration">
          <RunningConfigPage />
        </Tab>
        <Tab eventKey="ManageConfigurationPage" title="Manage Configurations">
          <ManageConfigurationPage setActiveTab={setActiveTab} setDataBaseName={setDataBaseName} setChID={setChID} setTabDisable={setTabDisable} setConfiguratonData={setConfiguratonData} />
        </Tab>
        <Tab eventKey="configuration" title="Configuration" tabClassName={tabDisable}>
          <Configuration dataBaseName={dataBaseName} chID={chID} configuratonData={configuratonData} />
        </Tab>
      </Tabs>
    </div>
  )
}

export default Downstream
