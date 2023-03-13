import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../../Button';
import { useDispatch } from 'react-redux';
import { postSettingsAnnex, postSettingsSplit } from '../../../actions/systemSettings';

export default function SettingsPage() {

  const dispatch = useDispatch();

  const [splitValue, setSplitValue] = useState('');
  const [annexValue, setAnnexValue] = useState('')


  const handleChangeSplit = (e, type) => {
    if (type === 'Splits') {
      setSplitValue(e.target.value);
    }
    else {
      setAnnexValue(e.target.value);
    }
  }

  const handleApply = () => {
    if (splitValue) {
      dispatch(postSettingsSplit(splitValue));
    }
    if (annexValue) {
      dispatch(postSettingsAnnex(annexValue));
    }

  }

  return (
    <div className='tabs_wrapper'>

      <div className='channel_tab '>

        <div className='p-3'>
          <div className="action mb-4 border border-dark p-2">
            <h4 className='d-inline-block fw-bold'>Settings</h4>

            <div className='d-flex'>

              <div className='me-5'>
                <h6 className='fw-bold'>Configure US-DS Splits</h6>
                <div style={{ width: '100%'}}>
                  <Form.Select aria-label="Default select example" placeholder='Select Splits' style={{  padding: '2px 36px 2px 12px', borderRadius: '2px', border: '1px solid' }} onChange={(e) => handleChangeSplit(e, 'Splits')}>
                    <option >Select Splits</option>
                    <option value='Low_split'>Low_split (42Mhz-54Mhz)</option>
                    <option value="Mid_Split">Mid_Split (85Mhz-102Mhz)</option>
                    <option value="High_split">High_split (204Mhz-258Mhz)</option>
                    <option value="UHS_300">UHS_300 (300Mhz-372Mhz)</option>
                    <option value="UHS_396">UHS_396 (396Mhz-492Mhz)</option>
                    <option value="UHS_492">UHS_492 (492Mhz-606Mhz)</option>
                    <option value="UHS_684">UHS_684 (684Mhz-834Mhz)</option>

                  </Form.Select>
                </div>
              </div>

              <div className='dropdownSpace'>
                <h6 className='fw-bold'>Annex</h6>
                <div style={{ width: '100%' }}>
                  <Form.Select aria-label="Default select example" style={{ padding: '2px 36px 2px 12px', borderRadius: '2px', border: '1px solid' }} onChange={(e) => handleChangeSplit(e, 'Annex')}>
                    <option>Select Annex</option>
                    <option value='ANNEX_A'>Annex_A</option>
                    <option value="ANNEX_B">Annex_B</option>

                  </Form.Select>
                </div>
              </div>


            </div>
            <div className='mt-3'>
              <Button label={'Apply'} handleClick={handleApply} />
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
