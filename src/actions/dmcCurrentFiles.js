import {
    GET_MANAGE_CONFIG_QAM_TABLE_FAILED,
    GET_MANAGE_CONFIG_QAM_TABLE_STARTED,
    GET_MANAGE_CONFIG_QAM_TABLE_SYSTEM_SUCCEEDED,
    GET_MANAGE_CONFIG_QAM_TABLE_USER_SUCCEEDED
} from "../lib/constants";
import {
    getTableManageConfigQAM,
    postNewDataBaseAPI
} from "../services/api";
import { showPopup } from ".//popupAction";

const getManageConfigQAMTableStarted = () => ({
    type: GET_MANAGE_CONFIG_QAM_TABLE_STARTED,
});

const getManageConfigQAMTableSyatemSucceeded = (data) => ({
    type: GET_MANAGE_CONFIG_QAM_TABLE_SYSTEM_SUCCEEDED,
    payload: data,
});

const getManageConfigQAMTableUserSucceeded = (data) => ({
    type: GET_MANAGE_CONFIG_QAM_TABLE_USER_SUCCEEDED,
    payload: data,
});

const getManageConfigQAMTableFailed = (error) => ({
    type: GET_MANAGE_CONFIG_QAM_TABLE_FAILED,
    payload: error,
    error: true,
});

export const getManageConfigQAMTable = (db_default_type) => {
    return async (dispatch) => {
        dispatch(getManageConfigQAMTableStarted());

        await getTableManageConfigQAM(db_default_type)
            .then(function (response) {
                if (db_default_type === 1) {
                    dispatch(getManageConfigQAMTableSyatemSucceeded(response));
                }
                if (db_default_type === 0) {
                    dispatch(getManageConfigQAMTableUserSucceeded(response));
                }
            })
            .catch(function (error) {
                dispatch(getManageConfigQAMTableFailed(error));
            });
    };
};

export const newDataBase = (name) => {
    return async dispatch => {

        await postNewDataBaseAPI(name).then(function (response) {
            dispatch(showPopup({ message: "save as successfully", type: "success" }))
        })
            .catch(function (error) {
                dispatch(showPopup({ message: error.message, type: "danger" }))
            });
    };
}