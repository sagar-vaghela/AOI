import { combineReducers } from 'redux';
import {
    drcQAMTableReducer,
    drcQAMTableRowEditReducer,
    drcQAMTableRowCreateReducer,
    drcQAMTableRowDeleteReducer
} from './drcQAMchannelsReducer';
import popupReducer from './popupReducer';

const rootReducer = combineReducers({
    drcQAMTableReducer,
    drcQAMTableRowEditReducer,
    drcQAMTableRowCreateReducer,
    drcQAMTableRowDeleteReducer,
    popupReducer,

});

export default rootReducer;