import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { configurationQAMRowUpdate } from '../../actions/dConfiguration';

const MutedFormatter = ({ row, cell, dataBaseName }) => {

  const dispatch = useDispatch();

  const checkSwitch = row.mute === "YES" ? true : false;
  const [checkSwitchMute, setCheckSwitchMute] = useState(checkSwitch);
  const [checkChange, setCheckChange] = useState(false);


  useEffect(() => {

    if (checkChange) {

      const checkSwitch = (checkSwitchMute === true ? 'YES' : 'NO');

      const payload = {
        power: row.power,
        annex: row.annex,
        operMode: row.operMode,
        mute: checkSwitch,
        frequency: row.frequency,
      }
      dispatch(configurationQAMRowUpdate(dataBaseName, row.ch_index, payload));
      setCheckChange(false);
    }
  }, [checkSwitchMute, !checkSwitchMute])


  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        checked={checkSwitchMute}
        onChange={(e) => { setCheckSwitchMute(e.target.checked); setCheckChange(true); }}
      />
    </div>
  );
}

export default MutedFormatter;