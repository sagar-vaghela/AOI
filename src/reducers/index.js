import { combineReducers } from 'redux';
import runConfigQAMReducer from "./runConfigQAMReducer";
import drcQAMTableRowEditReducer from "./drcQAMTableRowEditReducer";
import drcQAMTableRowCreateReducer from "./drcQAMTableRowCreateReducer";
import drcQAMTableRowDeleteReducer from "./drcQAMTableRowDeleteReducer";


const rootReducer = combineReducers({
    runConfigQAMReducer,
    drcQAMTableRowEditReducer,
    drcQAMTableRowCreateReducer,
    drcQAMTableRowDeleteReducer
});

export default rootReducer;