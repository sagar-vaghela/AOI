import { getRCQAMUpdateTableRow } from "../services/api";

const getRCQAMEditTableRowStarted = () => ({
  type: 'GET_RC_QAM_EDIT_TABLE_ROW_STARTED'
});

const getRCQAMEditTableRowSucceeded = data => ({
  type: 'GET_RC_QAM_EDIT_TABLE_ROW_SUCCEEDED',
  payload: data
});

const getRCQAMEditTableRowFailed = error => ({
  type: 'GET_RC_QAM_EDIT_TABLE_ROW_FAILED',
  payload: error,
  error: true
});

export const getRCQAMEditTableRow = (ch_id, payload) => {
  return async dispatch => {
    dispatch(getRCQAMEditTableRowStarted());

    await getRCQAMUpdateTableRow(ch_id, payload).then(function (response) {
      dispatch(getRCQAMEditTableRowSucceeded(response));
    })
      .catch(function (error) {
        dispatch(getRCQAMEditTableRowFailed(error));
      });
  };
}
