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

        <div className="action mb-4 border border-dark p-2">
          <h5 className='border-bottom border-dark d-inline-block'>Software Upgrade</h5>
          <div>Main Software Version</div>
          <div className="selected_channle mb-3 d-inline-block">
            <label htmlFor="" className='me-2'>Version: </label>
            <input type="text" placeholder='(1.0.0.12+cpsg_annex_a_3007)' style={{ width: '100%' }} />
          </div>
        </div>

        <div className="action mb-4 border border-dark p-2">
          <div>Main Software Version</div>
          <div className="selected_channle mb-3 d-inline-block">
            <label htmlFor="" className='me-2'>Version: </label>
            <input type="text" placeholder='(1.0.0.5+cpsg4.0_2858.unofficial)' style={{ width: '100%' }} />
          </div>
        </div>


        <div className="action mb-4 border border-dark p-2">
          <div>Download Package</div>
          <Button label={'Download and Extract to Backup'} />
          <div>Upgrade status: N/A</div>
          <ProgressBar now={100} label={`${0}%`} />
        </div>


        <div className="action mb-4 border border-dark p-2">
          <div className='text-decoration-underline'>Action</div>
          <Button label={'Swap to backup'} />
        </div>

      </div>
    </div>
  )
}
