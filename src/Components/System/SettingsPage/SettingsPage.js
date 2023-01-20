import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function SettingsPage() {
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
          <h5 className='border-bottom border-dark d-inline-block fw-bold'>Settings</h5>
          <div>Configure US-DS Splits</div>
          <div style={{ width: '20%' }}>
            <Form.Select aria-label="Default select example">
              <option>Low Split (42Mhz-54Mhz)</option>
            </Form.Select>
          </div>
        </div>


        <div className="action mb-4 border border-dark p-2">
          <h5 className='border-bottom border-dark d-inline-block fw-bold'>Product Info</h5>

          <Container>
            <Row>
              <Col>Product Name</Col>
              <Col>Build Date (H.D.M.Y)</Col>
            </Row>
            <Row className='bg-white' >
              <Col>AOI CPSG (HwVer D1)</Col>
              <Col>00:00 1.1.2022</Col>
            </Row>
          </Container>

        </div>

        <div className="action mb-4 border border-dark p-2">
          <h5 className='border-bottom border-dark d-inline-block fw-bold'>General</h5>

          <Container>
            <Row>
              <Col>Docsis 3.1 Channels</Col>
              <Col>Docsis 3.0 Channels</Col>
              <Col>ATDMA Channels</Col>
            </Row>
            <Row className='bg-white'>
              <Col>0</Col>
              <Col>0</Col>
              <Col>0</Col>
            </Row>
          </Container>

        </div>
      </div>

    </div>
  )
}
