import {
  DELETE_CONFIGURATION_SUCCESSED,
  GET_CONFIGURATION_QAM_TABLE_FAILED,
  GET_CONFIGURATION_QAM_TABLE_STARTED,
  GET_CONFIGURATION_QAM_TABLE_SUCCEEDED,
  POST_CONFIG_QAM_TABLE_ADD_RANGE
} from "../lib/constants";
import initialState from "./initialState";

export const dcAddRangeReducer = (state = initialState.dcAddRange, action) => {
  switch (action.type) {
    case POST_CONFIG_QAM_TABLE_ADD_RANGE:
      return {
        ...state,
        dcAddRangeData: action.payload,
      };

    default:
      return state;
  }
};

export const dcDeleteConfigurationReducer = (state = initialState.dcDeleteConfiguration, action) => {
  switch (action.type) {
    case DELETE_CONFIGURATION_SUCCESSED:
      return {
        ...state,
        dcDeleteConfigurationData: action.payload,
      };

    default:
      return state;
  }
};

export const dcSingleQAMTableReducer = (state = initialState.dcSingleQAMTable, action) => {
  switch (action.type) {
    case GET_CONFIGURATION_QAM_TABLE_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case GET_CONFIGURATION_QAM_TABLE_SUCCEEDED:
      return {
        ...state,
        dcSingleQAMTableData: action.payload,
        isLoading: false
      };
    case GET_CONFIGURATION_QAM_TABLE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};