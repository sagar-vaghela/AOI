import { combineReducers } from 'redux';
import { popupReducer } from './popupReducer';

import {
    drcQAMTableReducer,
    drcQAMTableRowEditReducer,
    drcQAMTableRowCreateReducer,
    drcQAMTableRowDeleteReducer,
    drcSingleQAMTableReducer,
    drcQAMTableAllDeleteReducer
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
    dmcDeleteDatabaseReducer,
    dmcArchiveDatabaseReducer,
    dmcRunDatabaseReducer,
    dmcDownloadAllDBReducer,
    dmConfigAnnexReducer
} from './dmcCurrentFilesReducer';
import {
    dcAddRangeReducer,
    dcDeleteConfigurationReducer,
    dcSingleQAMTableReducer,
    dcUpdateConfigurationReducer,
    dcAddTiltReducer,
    dcAllDeleteConfigurationReducer
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
    dmcDeleteDatabaseReducer,
    dmcArchiveDatabaseReducer,
    dmcRunDatabaseReducer,
    dmcDownloadAllDBReducer,
    dcUpdateConfigurationReducer,
    drcQAMTableAllDeleteReducer,
    dmConfigAnnexReducer,
    dcAddTiltReducer,
    dcAllDeleteConfigurationReducer
});

export default rootReducer;