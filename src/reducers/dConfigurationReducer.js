import { POST_CONFIG_QAM_TABLE_ADD_RANGE } from "../lib/constants";
import initialState from "./initialState";

const ConfigurationQAMReducer = (state = initialState.ConfigurationQAMTable, action) => {
  switch (action.type) {
    case POST_CONFIG_QAM_TABLE_ADD_RANGE:
      return {
        ...state,
        addRange: action.payload,
      };

    default:
      return state;
  }
};

export default ConfigurationQAMReducer;