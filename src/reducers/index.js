import { combineReducers } from 'redux';
import { popupReducer } from './popupReducer';

import {
    drcQAMTableReducer,
    drcQAMTableRowEditReducer,
    drcQAMTableRowCreateReducer,
    drcQAMTableRowDeleteReducer,
    drcSingleQAMTableReducer
} from './drcQAMchannelsReducer';
import {
    settingSplitReducer,
    settingAnnexReducer,
    settingSplitDataReducer,
    settingAnnexDataReducer
} from './systemSettingsReducer';
import {
    dmcTableReducer,
    dmcNewDataBaseAddReducer,
    dmcTableRowReducer,
    dmcRenameDataBaseReducer,
    dmcRenameDeleteDBReducer,
    dmcDeleteDatabaseReducer
} from './dmcCurrentFilesReducer';
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
    dmcRenameDataBaseReducer,
    dmcRenameDeleteDBReducer,
    dcAddRangeReducer,
    dcDeleteConfigurationReducer,
    dcSingleQAMTableReducer,
    drcSingleQAMTableReducer,
    dmcDeleteDatabaseReducer
});

export default rootReducer;