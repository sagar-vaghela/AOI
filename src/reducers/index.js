import { combineReducers } from 'redux';
import {
    drcQAMTableReducer,
    drcQAMTableRowEditReducer,
    drcQAMTableRowCreateReducer,
    drcQAMTableRowDeleteReducer
} from './drcQAMchannelsReducer';
import {dmcTableReducer, dmcNewDataBaseAddReducer} from './dmcCurrentFilesReducer';
import { popupReducer } from './popupReducer';
import {ConfigurationQAMReducer} from "./dConfigurationReducer";

const rootReducer = combineReducers({
    drcQAMTableReducer,
    drcQAMTableRowEditReducer,
    drcQAMTableRowCreateReducer,
    drcQAMTableRowDeleteReducer,
    dmcTableReducer,
    popupReducer,
    ConfigurationQAMReducer,
    dmcNewDataBaseAddReducer,
});

export default rootReducer;