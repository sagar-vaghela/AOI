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

// export const getRunConfigQAMTable = () => async (dispatch, getState) => {

//   dispatch(getRunConfigQAMTableStarted());

//   await getTableRunConfigQAM({dispatch})
//     .then((res) => {
//       const { rcQAMTable } = getState().runCongifQAMTable;
//       dispatch(getRunConfigQAMTableSucceeded(res));
//     })

//     .catch(() => {
//       dispatch(getRunConfigQAMTableFailed('error.response'));
//     });
// };


export const getRunConfigQAMTable = () => {
  return dispatch => {
    dispatch(getRunConfigQAMTableStarted());

    getTableRunConfigQAM().then(function (response) {
      dispatch(getRunConfigQAMTableSucceeded(response));
    })
      .catch(function (error) {
        dispatch(getRunConfigQAMTableFailed(error));
      });
  };
}
