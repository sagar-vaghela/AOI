import { getRCQAMDeleteTableRow } from "../services/api";

const getRCQAMDeleteTableRowStarted = () => ({
  type: 'GET_RC_QAM_DELETE_TABLE_ROW_STARTED'
});

const getRCQAMDeleteTableRowSucceeded = data => ({
  type: 'GET_RC_QAM_DELETE_TABLE_ROW_SUCCEEDED',
  payload: data
});

const getRCQAMDeleteTableRowFailed = error => ({
  type: 'GET_RC_QAM_DELETE_TABLE_ROW_FAILED',
  payload: error,
  error: true
});

export const getRCQAMDeleteTableRowCell = (ch_id) => {
  return async dispatch => {
    dispatch(getRCQAMDeleteTableRowStarted());

    await getRCQAMDeleteTableRow(ch_id).then(function (response) {
      dispatch(getRCQAMDeleteTableRowSucceeded(response));
    })
      .catch(function (error) {
        dispatch(getRCQAMDeleteTableRowFailed(error));
      });
  };
}
