import initialState from "./initialState";

const drcQAMTableRowEditReducer = (state = initialState.rcQAMEditRowTable, action) => {
  switch (action.type) {
    case 'GET_RC_QAM_EDIT_TABLE_ROW_STARTED':
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case 'GET_RC_QAM_EDIT_TABLE_ROW_SUCCEEDED':
      return {
        ...state,
        rcQAMEditRow: action.payload,
        isLoading: false
      };
    case 'GET_RC_QAM_EDIT_TABLE_ROW_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default drcQAMTableRowEditReducer;