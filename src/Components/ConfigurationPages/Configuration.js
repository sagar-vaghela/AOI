import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import QAMTab from './Channels/QAMTab/QAMTab'
import OFDMTab from './Channels/OFDMTab/OFDMTab'

const Configuration = () => {
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

export default Configuration
