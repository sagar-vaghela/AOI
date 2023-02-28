import { getTableRunConfigQAM } from "../services/api";

const getRunConfigQAMTableStarted = () => ({
  type: 'GET_RUN_CONFIG_QAM_TABLE_STARTED'
});

const getRunConfigQAMTableSucceeded = data => ({
  type: 'GET_RUN_CONFIG_QAM_TABLE_SUCCEEDED',
  payload: data
});

const getRunConfigQAMTableFailed = error => ({
  type: 'GET_RUN_CONFIG_QAM_TABLE_FAILED',
  payload: error,
  error: true
});

export const getRunConfigQAMTable = () => {
  return async dispatch => {
    dispatch(getRunConfigQAMTableStarted());

    await getTableRunConfigQAM().then(function (response) {
      dispatch(getRunConfigQAMTableSucceeded(response));
    })
      .catch(function (error) {
        dispatch(getRunConfigQAMTableFailed(error));
      });
  };
}
