import {
    GET_ADD_RANGE_SUCCEEDED,
    GET_CHANGE_NAME,
    GET_MANAGE_CONFIG_QAM_TABLE_FAILED,
    GET_MANAGE_CONFIG_QAM_TABLE_STARTED,
    GET_MANAGE_CONFIG_QAM_TABLE_SYSTEM_SUCCEEDED,
    GET_MANAGE_CONFIG_QAM_TABLE_USER_SUCCEEDED,
    GET_MANAGE_CONFIG_ROW_SELECT_FAILED,
    GET_MANAGE_CONFIG_ROW_SELECT_STARTED,
    GET_MANAGE_CONFIG_ROW_SELECT_SUCCEEDED,
    GET_MANAGE_NEW_DATABASE_ADD_SUCCEEDED
} from "../lib/constants";
import {
    getMangeConfigRowAPI,
    getTableManageConfigQAM,
    postNewDataBaseAPI,
    addRangeConfiguration,
    deletesingledatabse,
    renamedbname,
    deleteDatabase
} from "../services/api";
import { showPopup } from ".//popupAction";

const getManageConfigQAMTableStarted = () => ({
    type: GET_MANAGE_CONFIG_QAM_TABLE_STARTED,
});

const getManageConfigQAMTableSystemSucceeded = (data) => ({
    type: GET_MANAGE_CONFIG_QAM_TABLE_SYSTEM_SUCCEEDED,
    payload: data,
});

const getManageConfigQAMTableUserSucceeded = (data) => ({
    type: GET_MANAGE_CONFIG_QAM_TABLE_USER_SUCCEEDED,
    payload: data,
});

const getNewDataBaseAddSuccess = (data) => ({
    type: GET_MANAGE_NEW_DATABASE_ADD_SUCCEEDED,
    payload: data,
});

const getManageConfigQAMTableFailed = (error) => ({
    type: GET_MANAGE_CONFIG_QAM_TABLE_FAILED,
    payload: error,
    error: true,
});

const getManageConfigRowSelectStarted = () => ({
    type: GET_MANAGE_CONFIG_ROW_SELECT_STARTED
});

const getManageConfigRowSelectSucceeded = data => ({
    type: GET_MANAGE_CONFIG_ROW_SELECT_SUCCEEDED,
    payload: data
});

const getManageConfigRowSelectFailed = error => ({
    type: GET_MANAGE_CONFIG_ROW_SELECT_FAILED,
    payload: error,
    error: true
});

const getAddNewRangedataSuccess = (data) => ({
    type: GET_ADD_RANGE_SUCCEEDED,
    payload: data,
});

const renameDatabaseName = (data) => ({
    type: GET_CHANGE_NAME,
    payload: data
});

export const getManageConfigQAMTable = (db_default_type) => {
    return async (dispatch) => {
        dispatch(getManageConfigQAMTableStarted());

        await getTableManageConfigQAM(db_default_type)
            .then(function (response) {
                if (db_default_type === 1) {
                    dispatch(getManageConfigQAMTableSystemSucceeded(response));
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
            dispatch(getNewDataBaseAddSuccess(response))
            dispatch(showPopup({ message: "save as successfully", type: "success" }))
        })
            .catch(function (error) {
                dispatch(showPopup({ message: error.message, type: "danger" }))
            });
    };
}


export const getManageConfigRowSelect = (dbname, db_default_type) => {
    return async dispatch => {
        dispatch(getManageConfigRowSelectStarted());

        await getMangeConfigRowAPI(dbname, db_default_type).then(function (response) {
            dispatch(getManageConfigRowSelectSucceeded(response));
        })
            .catch(function (error) {
                dispatch(getManageConfigRowSelectFailed(error));
                dispatch(showPopup({ message: error.message, type: "danger" }))
            });
    };
}

export const addRange = (dbname, payload) => {
    return async dispatch => {

        await addRangeConfiguration(dbname, payload).then(function (response) {
            dispatch(getAddNewRangedataSuccess(response))
            dispatch(showPopup({ message: "Add as successfully", type: "success" }))
        })
            .catch(function (error) {
                dispatch(showPopup({ message: error.message, type: "danger" }))
            });
    };
}

export const removedatabase = (dbname,ch_id) => {
    
    return async dispatch => {

        await deletesingledatabse(dbname, ch_id).then(function (response) {
            // dispatch(getAddNewRangedataSuccess(response))
            dispatch(showPopup({ message: "Add as successfully", type: "success" }))
        })
            .catch(function (error) {
                dispatch(showPopup({ message: error.message, type: "danger" }))
            });
    };
}

export const changeDataBaseName = (dbname,copyname) => {
    return async dispatch => {

        await renamedbname(dbname, copyname).then(function (response) {
            dispatch(renameDatabaseName(response))
            dispatch(showPopup({ message: " Change name successfully", type: "success" }))
        })
            .catch(function (error) {
                dispatch(showPopup({ message: error.message, type: "danger" }))
            });
    };

}

export const removeDatabase = (dbname) => {
    return async dispatch => {

        await deleteDatabase(dbname).then(function (response) {
            // dispatch(deleteDatabaseRecord(response))
            dispatch(showPopup({ message: " Deleted successfully", type: "success" }))
        })
            .catch(function (error) {
                dispatch(showPopup({ message: error.message, type: "danger" }))
            });
    };
}