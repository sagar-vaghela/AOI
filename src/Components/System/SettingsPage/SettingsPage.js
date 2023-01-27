import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SettingsPage() {
  return (
    <div className='tabs_wrapper'>

      <div className='channel_tab '>

        <div className='p-3'>
          <div className="action mb-4 border border-dark p-2">
            <h4 className='d-inline-block fw-bold'>Settings</h4>
            <h6 className='fw-bold'>Configure US-DS Splits</h6>
            <div style={{ width: '20%' }}>
              <Form.Select aria-label="Default select example" style={{ padding: '2px 36px 2px 12px', borderRadius: '2px', border: '1px solid' }} >
                <option selected value='Low Split (42Mhz-54Mhz)'>Low Split (42Mhz-54Mhz)</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
          </div>

          <div className="action mb-4 border border-dark p-2">
            <h6 className='d-inline-block fw-bold'>Product Info</h6>

            <Container fluid>
              <Row className='text-center'>
                <Col xs={6} className='fw-bold'>Product Name</Col>
                <Col xs={6} className='fw-bold'>Build Date (H.D.M.Y)</Col>
              </Row>
              <Row className='bg-white text-center  border' >
                <Col xs={6} className='py-2 border-end'>AOI CPSG (HwVer D1)</Col>
                <Col xs={6} className='py-2'>00:00 1.1.2022</Col>
              </Row>
            </Container>

          </div>

          <div className="action mb-4 border border-dark p-2">
            <h6 className='d-inline-block fw-bold'>General</h6>

            <Container fluid>
              <Row className='text-center'>
                <Col xs={4} className='fw-bold'>Docsis 3.1 Channels</Col>
                <Col xs={4} className='fw-bold'>Docsis 3.0 Channels</Col>
                <Col xs={4} className='fw-bold'>ATDMA Channels</Col>
              </Row>
              <Row className='bg-white border' >
                <Col xs={4} className='py-2 border-end'>0</Col>
                <Col xs={4} className='py-2 border-end'>0</Col>
                <Col xs={4} className='py-2'>0</Col>
              </Row>
            </Container>

          </div>
        </div>
      </div>
    </div>
  )
}
