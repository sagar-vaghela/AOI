import {
    CHANGE_DELETE_DATABASE_SUCCEEDED,
    DELETE_DATABASE_SUCCEEDED,
    GET_CHANGE_NAME,
    GET_MANAGE_CONFIG_QAM_TABLE_FAILED,
    GET_MANAGE_CONFIG_QAM_TABLE_STARTED,
    GET_MANAGE_CONFIG_QAM_TABLE_SYSTEM_SUCCEEDED,
    GET_MANAGE_CONFIG_QAM_TABLE_USER_SUCCEEDED,
    GET_MANAGE_CONFIG_ROW_SELECT_FAILED,
    GET_MANAGE_CONFIG_ROW_SELECT_STARTED,
    GET_MANAGE_CONFIG_ROW_SELECT_SUCCEEDED,
    GET_MANAGE_NEW_DATABASE_ADD_SUCCEEDED,
    ARCHIVE_DATABASE_SUCCEEDED,
    RUN_DATABASE_SUCCEEDED,
    DOWNLOAD_ALL_DATABASE_STARTED,
    DOWNLOAD_ALL_DATABASE_SUCCEEDED,
} from "../lib/constants";
import {
    getMangeConfigRowAPI,
    getTableManageConfigQAM,
    postNewDataBaseAPI,
    renameDbName,
    deleteRenameConfig,
    deleteDataBase,
    archiveDataBase,
    runDataBase,
    downloadAllDataBase
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


const renameDatabaseSuccess = (data) => ({
    type: GET_CHANGE_NAME,
    payload: data
});

const changeDeleteDatabaseSuccess = (data) => ({
    type: CHANGE_DELETE_DATABASE_SUCCEEDED,
    payload: data
});


const deleteDatabaseSuccess = (data) => ({
    type: DELETE_DATABASE_SUCCEEDED,
    payload: data
});

const archiveDatabaseSuccess = (data) => ({
    type: ARCHIVE_DATABASE_SUCCEEDED,
    payload: data
});

const runDatabaseSuccess = (data) => ({
    type: RUN_DATABASE_SUCCEEDED,
    payload: data
});

const downloadAllDatabasStarted = () => ({
    type: DOWNLOAD_ALL_DATABASE_STARTED,
});


const downloadAllDatabaseSuccess = (data) => ({
    type: DOWNLOAD_ALL_DATABASE_SUCCEEDED,
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

export const mcChangeDataBaseName = (dbname, copyname) => {
    return async dispatch => {

        await renameDbName(dbname, copyname).then(function (response) {
            dispatch(renameDatabaseSuccess(response))
            dispatch(showPopup({ message: "databse as successfully", type: "success" }))
        })
            .catch(function (error) {
                dispatch(showPopup({ message: error.message, type: "danger" }))
            });
    };

}

export const mcChangeRemoveDataBase = (dbname) => {

    return async dispatch => {

        await deleteRenameConfig(dbname).then(function (response) {
            dispatch(changeDeleteDatabaseSuccess(response))
        })
            .catch(function (error) {
                console.log("mcChangeRemoveDataBase error");
            });
    };
}

export const mcDeleteDataBase = (dbname) => {

    return async dispatch => {

        await deleteDataBase(dbname).then(function (response) {
            dispatch(deleteDatabaseSuccess(response))
        })
            .catch(function (error) {
                console.log("mcDeleteDataBase error");
            });
    };
}

export const mcArchiveDataBase = (dbname) => {

    return async dispatch => {

        await archiveDataBase(dbname).then(function (response) {
            dispatch(archiveDatabaseSuccess(response));
            dispatch(showPopup({ message: " Archive as Successfully", type: "success" }))
        })
            .catch(function (error) {
                dispatch(showPopup({ message: error.message, type: "success" }))
            });
    };
}


export const mcRunDataBase = (dbname) => {

    return async dispatch => {

        await runDataBase(dbname).then(function (response) {
            dispatch(runDatabaseSuccess(response));
            dispatch(showPopup({ message: " Run as Successfully", type: "success" }))
        })
            .catch(function (error) {
                console.log("mcRunDataBase error");
            });
    };
}

export const mcDownloadAllDataBase = () => {

    return async dispatch => {

        dispatch(downloadAllDatabasStarted());
        dispatch(showPopup({ message: " Download is Running Please Wait!!", type: "success" }))

        await downloadAllDataBase().then(function (response) {
            dispatch(downloadAllDatabaseSuccess(response));
            dispatch(showPopup({ message: " Download as Successfully", type: "success" }))
        })
            .catch(function (error) {
                console.log("mcDownloadAllDataBase error");
            });
    };
}