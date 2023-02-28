import initialState from "./initialState";

const drcQAMTableRowDeleteReducer = (state = initialState.rcQAMDeleteRowTable, action) => {
  switch (action.type) {
    case 'GET_RC_QAM_DELETE_TABLE_ROW_STARTED':
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case 'GET_RC_QAM_DELETE_TABLE_ROW_SUCCEEDED':
      return {
        ...state,
        rcQAMDeleteRow: action.payload,
        isLoading: false
      };
    case 'GET_RC_QAM_DELETE_TABLE_ROW_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default drcQAMTableRowDeleteReducer;