import { combineReducers } from 'redux';
import runConfigQAMReducer from './runConfigQAMReducer';
import manageConfigQAMReducer from './manageConfigQAMreducer';
import popUpreducer from './popupReducer';

const rootReducer = combineReducers({
    runConfigQAMReducer,
    manageConfigQAMReducer,
    popUpreducer,
});

export default rootReducer;