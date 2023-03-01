import { getTableRunConfigQAM, makeDefaultAPI, postSaveAsAPI } from "../services/api";

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

const showPopUpAction = data => ({
  type: 'SHOW_POP_UP',
  payload: data,
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

export const showPopUp = (data) => {
  return async dispatch => {
    dispatch(showPopUpAction(data));
    setTimeout(() => {
      dispatch(showPopUp(null));
    }, 2000)
  }
}

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

export const postSaveAs = (filename) => async(dispatch) => {
  await postSaveAsAPI(filename).then(({data}) => {
    dispatch(showPopUp({message: "save as successfully", type: Object.keys(data)[0], }))
  }).catch((error) => {
    dispatch(showPopUp({message: error.message, type: "danger" }))
  })
}

export const makeDefault = () => async(dispatch) => {
  await makeDefaultAPI().then(({data}) => {
    dispatch(showPopUp({message: "save as successfully", type: Object.keys(data)[0], }))
  }).catch((error) => {
    dispatch(showPopUp({message: error.message, type: "danger" }))
  })
}
