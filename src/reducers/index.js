import { combineReducers } from 'redux';
import {
    drcQAMTableReducer,
    drcQAMTableRowEditReducer,
    drcQAMTableRowCreateReducer,
    drcQAMTableRowDeleteReducer
} from './drcQAMchannelsReducer';
import { popupReducer } from './popupReducer';
import { settingSplitReducer, settingAnnexReducer, settingSplitDataReducer, settingAnnexDataReducer } from './systemSettingsReducer';
import { dmcTableReducer, dmcNewDataBaseAddReducer, dmcTableRowReducer } from './dmcCurrentFilesReducer';
import {
    dcAddRangeReducer,
    dcDeleteConfigurationReducer,
    dcSingleQAMTableReducer
} from './dConfigurationReducer';

const rootReducer = combineReducers({
    drcQAMTableReducer,
    drcQAMTableRowEditReducer,
    drcQAMTableRowCreateReducer,
    drcQAMTableRowDeleteReducer,
    popupReducer,
    settingSplitReducer,
    settingAnnexReducer,
    settingSplitDataReducer,
    settingAnnexDataReducer,
    dmcTableReducer,
    dmcNewDataBaseAddReducer,
    dmcTableRowReducer,
    dcAddRangeReducer,
    dcDeleteConfigurationReducer,
    dcSingleQAMTableReducer,
});

export default rootReducer;