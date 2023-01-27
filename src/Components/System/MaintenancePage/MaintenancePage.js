import React from 'react'
import Button from '../../Button';

export default function MaintenancePage() {
  return (
    <div className='tabs_wrapper'>

      <div className='channel_tab '>
        <div className='p-3'>
          <div className="action mb-4 border border-dark p-2">
            <h5 className='d-inline-block fw-bold'>System Maintenance</h5>
            <div>Reboot Control</div>
            <div className="action_btns justify-content-between">

              <div className="left_btns">
                <Button label={'Reboot'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
