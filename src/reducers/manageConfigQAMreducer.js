import initialState from "./initialState";

const manageConfigQAMReducer = (
  state = initialState.manageCongifQAMTable,
  action
) => {
  switch (action.type) {
    case "GET_MANAGE_CONFIG_QAM_TABLE_STARTED":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "GET_MANAGE_CONFIG_QAM_TABLE_USER_SUCCEEDED":
      return {
        ...state,
        mcQAMTableUser: action.payload,
        isLoading: false,
      };
    case "GET_MANAGE_CONFIG_QAM_TABLE_SYSTEM_SUCCEEDED":
      return {
        ...state,
        mcQAMTableSystem: action.payload,
        isLoading: false,
      };
    case "GET_MANAGE_CONFIG_QAM_TABLE_FAILED":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default manageConfigQAMReducer;
