import { combineReducers } from 'redux';
import {
    drcQAMTableReducer,
    drcQAMTableRowEditReducer,
    drcQAMTableRowCreateReducer,
    drcQAMTableRowDeleteReducer
} from './drcQAMchannelsReducer';
import {popupReducer}  from './popupReducer';
import { settingSplitReducer, settingAnnexReducer, settingSplitDataReducer, settingAnnexDataReducer } from './systemSettingsReducer';


const rootReducer = combineReducers({
    drcQAMTableReducer,
    drcQAMTableRowEditReducer,
    drcQAMTableRowCreateReducer,
    drcQAMTableRowDeleteReducer,
    popupReducer,
    settingSplitReducer,
    settingAnnexReducer,
    settingSplitDataReducer,
    settingAnnexDataReducer
});

export default rootReducer;