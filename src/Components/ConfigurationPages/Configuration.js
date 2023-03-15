import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import QAMTab from './Channels/QAMTab/QAMTab'
import OFDMTab from './Channels/OFDMTab/OFDMTab'

const Configuration = ({dataBaseName, chID, configuratonData}) => {
    return (
        <>
        <h5 className="mb-3">{dataBaseName.includes('.db')? dataBaseName : `${dataBaseName}.db`}</h5>
        <Tabs
            defaultActiveKey="QAMChannels"
            id="uncontrolled-tab-example"
            className="config_tabs border border-dark"
        >
            <Tab eventKey="QAMChannels" tabClassName='fw-bold col-4' title="QAM Channels">
                <QAMTab dataBaseName={dataBaseName} chID={chID} configuratonData={configuratonData} />
            </Tab>
            <Tab eventKey="OFDMChannels" tabClassName='fw-bold col-4 disabled-link' title="OFDM Channels">
                <OFDMTab />
            </Tab>
        </Tabs>
        </>
    )
}

export default Configuration;
