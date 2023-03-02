import { combineReducers } from 'redux';
import {
    drcQAMTableReducer,
    drcQAMTableRowEditReducer,
    drcQAMTableRowCreateReducer,
    drcQAMTableRowDeleteReducer
} from './drcQAMchannelsReducer';

const rootReducer = combineReducers({
    drcQAMTableReducer,
    drcQAMTableRowEditReducer,
    drcQAMTableRowCreateReducer,
    drcQAMTableRowDeleteReducer
});

export default rootReducer;