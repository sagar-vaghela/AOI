import { getRCQAMAddTableRow } from "../services/api";

const getRCQAMCreateTableRowStarted = () => ({
  type: 'GET_RC_QAM_CREATE_TABLE_ROW_STARTED'
});

const getRCQAMCreateTableRowSucceeded = data => ({
  type: 'GET_RC_QAM_CREATE_TABLE_ROW_SUCCEEDED',
  payload: data
});

const getRCQAMCreateTableRowFailed = error => ({
  type: 'GET_RC_QAM_CREATE_TABLE_ROW_FAILED',
  payload: error,
  error: true
});

export const getRCQAMCreateTableRow = (payload) => {
  return async dispatch => {
    dispatch(getRCQAMCreateTableRowStarted());

    await getRCQAMAddTableRow(payload).then(function (response) {
      dispatch(getRCQAMCreateTableRowSucceeded(response));
    })
      .catch(function (error) {
        dispatch(getRCQAMCreateTableRowFailed(error));
      });
  };
}
