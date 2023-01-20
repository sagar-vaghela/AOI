import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import OFDMSubcarrier from './OFDMSubcarrier';
import OFDMProfiles from './OFDMProfiles';

const OFDMChannelTab = () => {
    return (
        <Tabs
            defaultActiveKey=""
            id="uncontrolled-tab-example"
            className="OFDM_channel_tab border-0 mb-3"
        >
            <Tab eventKey="OFDMSubcarrier" tabClassName='py-2 px-4 rounded-0 fw-bold border border-dark text-dark' title="OFDM Channel Subcarriers">
                <OFDMSubcarrier/>
            </Tab>
            <Tab eventKey="OFDMProfiles" tabClassName='py-2 px-4 rounded-0 fw-bold border border-dark text-dark' title="OFDM Channel Profiles">
                <OFDMProfiles/>
            </Tab>
        </Tabs>
    )
}

export default OFDMChannelTab
