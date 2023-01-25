import React from 'react';
import Button from '../../Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function SoftwareUpgradePage() {
  return (
    <div className='tabs_wrapper'>

      <div className='channel_tab '>
        <Tabs
          defaultActiveKey=""
          id="uncontrolled-tab-example"
          className="nav_tabs"
        >
          <Tab eventKey="RunningConfigPage" title="Running Configuration">
          </Tab>
          <Tab eventKey="ManageConfigurationPage" title="Manage Configurations">
          </Tab>
          <Tab eventKey="configuration" title="Configuration">
          </Tab>
        </Tabs>

        <div className='p-3'>
          <div className="action mb-4 border border-dark p-2">
            <h4 className='d-inline-block fw-bold'>Software Upgrade</h4>
            <h6 className='fw-bold'>Main Software Version</h6>
            <div className="selected_channle mb-3 ">
              <label htmlFor="" className='me-2 fw-bold'>Version: </label>
              <input type="text" placeholder='(1.0.0.12+cpsg_annex_a_3007)' style={{ width: 'calc(100% - 70px)' }} />
            </div>
          </div>

          <div className="action mb-4 border border-dark p-2">
            <h6 className='fw-bold'>Backup Software Version</h6>
            <div className="selected_channle mb-3">
              <label htmlFor="" className='me-2 fw-bold'>Version: </label>
              <input type="text" placeholder='(1.0.0.5+cpsg4.0_2858.unofficial)' style={{ width: 'calc(100% - 70px)' }} />
            </div>
          </div>

          <div className="action mb-4 border border-dark p-2">
            <h6 className='fw-bold'>Download Package</h6>
            <Button label={'Download and Extract to Backup'} />
            <h6 className='fw-bold'>Upgrade status: N/A</h6>
            <ProgressBar now={100} label={`${0}%`} />
          </div>

          <div className="action mb-4 border border-dark p-2">
            <h6>Action</h6>
            <Button label={'Swap to backup'} />
          </div>

        </div>
      </div>
    </div>
  )
}
