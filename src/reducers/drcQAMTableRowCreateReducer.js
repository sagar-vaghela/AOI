import initialState from "./initialState";

const drcQAMTableRowCreateReducer = (state = initialState.rcQAMCreateRowTable, action) => {
  switch (action.type) {
    case 'GET_RC_QAM_CREATE_TABLE_ROW_STARTED':
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case 'GET_RC_QAM_CREATE_TABLE_ROW_SUCCEEDED':
      return {
        ...state,
        rcQAMCreateRow: action.payload,
        isLoading: false
      };
    case 'GET_RC_QAM_CREATE_TABLE_ROW_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default drcQAMTableRowCreateReducer;