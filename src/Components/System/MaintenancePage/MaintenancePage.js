import React from 'react'
import Button from '../../Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function MaintenancePage() {
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
          <h5 className='border-bottom border-dark d-inline-block fw-bold'>System Maintenance</h5>
          <div>Reboot Control</div>
          <div className="action_btns justify-content-between">

            <div className="left_btns">
              <Button label={'Reboot'} />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
