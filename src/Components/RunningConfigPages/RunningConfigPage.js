import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import OFDMTab from '../ConfigurationPages/OFDMTab/OFDMTab';
import QAMTab from '../ConfigurationPages/QAMTab/QAMTab';


const RunningConfigPage = () => {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="config_tabs border border-dark"
        >
            <Tab eventKey="QAM Channels"  title="QAM Channels">
                <QAMTab />
            </Tab>
            <Tab eventKey="OFDM Channels" title="OFDM Channels">
                <OFDMTab />
            </Tab>
        </Tabs>
    )
}

export default RunningConfigPage
