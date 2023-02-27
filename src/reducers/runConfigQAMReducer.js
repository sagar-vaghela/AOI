import initialState from "./initialState";

const runConfigQAMReducer = (state = initialState.runCongifQAMTable, action) => {
  switch (action.type) {
    case 'GET_RUN_CONFIG_QAM_TABLE_STARTED':
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case 'GET_RUN_CONFIG_QAM_TABLE_SUCCEEDED':
      return {
        ...state,
        rcQAMTable: action.payload,
        isLoading: false
      };
    case 'GET_RUN_CONFIG_QAM_TABLE_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default runConfigQAMReducer;