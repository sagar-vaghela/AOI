import { combineReducers } from 'redux';
import {
    drcQAMTableReducer,
    drcQAMTableRowEditReducer,
    drcQAMTableRowCreateReducer,
    drcQAMTableRowDeleteReducer
} from './drcQAMchannelsReducer';
import manageConfigReducer from './dmcCurrentFilesReducer';
import popupReducer from './popupReducer';
import ConfigurationQAMReducer from "./dConfigurationReducer";

const rootReducer = combineReducers({
    drcQAMTableReducer,
    drcQAMTableRowEditReducer,
    drcQAMTableRowCreateReducer,
    drcQAMTableRowDeleteReducer,
    manageConfigReducer,
    popupReducer,
    ConfigurationQAMReducer,

});

export default rootReducer;