import React, { useState, useEffect } from 'react'

const MutedFormatter = (row) => {
    console.log("row", row.row);
    const checkSwitch = row.row === "YES" ? true : false;
    const [checkSwitchMute, setCheckSwitchMute] = useState(checkSwitch);


    useEffect(() => {
    //   API call
    }, [checkSwitchMute])
    
  
    return (
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked={checkSwitchMute}
          onChange={(e) => setCheckSwitchMute(e.target.checked)}
        />
      </div>
    );
  }

  export default MutedFormatter;