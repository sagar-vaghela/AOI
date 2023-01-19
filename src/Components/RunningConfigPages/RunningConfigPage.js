import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import OFDMTab from '../ConfigurationPages/OFDMTab/OFDMTab';
import QAMTab from '../ConfigurationPages/QAMTab/QAMTab';


const RunningConfigPage = () => {
    return (
        <Tabs
            defaultActiveKey="OFDMChannels"
            id="uncontrolled-tab-example"
            className="config_tabs border border-dark"
        >
            <Tab eventKey="QAMChannels" tabClassName='fw-bold' title="QAM Channels">
                <QAMTab />
            </Tab>
            <Tab eventKey="OFDMChannels" tabClassName='fw-bold' title="OFDM Channels">
                <OFDMTab />
            </Tab>
        </Tabs>
    )
}

export default RunningConfigPage
