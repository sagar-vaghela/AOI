import { getTableManageConfigQAM, postNewDataBaseAPI } from "../services/api";
import { showPopUp } from "./runConfigQAM";

const getManageConfigQAMTableStarted = () => ({
  type: "GET_MANAGE_CONFIG_QAM_TABLE_STARTED",
});

const getManageConfigQAMTableSyatemSucceeded = (data) => ({
  type: "GET_MANAGE_CONFIG_QAM_TABLE_SYSTEM_SUCCEEDED",
  payload: data,
});

const getManageConfigQAMTableUserSucceeded = (data) => ({
    type: "GET_MANAGE_CONFIG_QAM_TABLE_USER_SUCCEEDED",
    payload: data,
  });
  

const getManageConfigQAMTableFailed = (error) => ({
  type: "GET_MANAGE_CONFIG_QAM_TABLE_FAILED",
  payload: error,
  error: true,
});

export const getManageConfigQAMTable = (db_default_type) => {
  return async (dispatch) => {
    dispatch(getManageConfigQAMTableStarted());

    await getTableManageConfigQAM(db_default_type)
      .then(function (response) {
        if(db_default_type === 1){
            dispatch(getManageConfigQAMTableSyatemSucceeded(response));
        }
        if(db_default_type === 0){
            dispatch(getManageConfigQAMTableUserSucceeded(response));
        }
      })
      .catch(function (error) {
        dispatch(getManageConfigQAMTableFailed(error));
      });
  };
};

export const newDataBase = (name)=> async(dispatch) => {
  await postNewDataBaseAPI(name).then(({data}) => {
    dispatch(showPopUp({message: `${name} database added successfully`, type: Object.keys(data)[0], }))
  }).catch((error) => {
    dispatch(showPopUp({message: error.message, type: "danger" }))
  })
}
