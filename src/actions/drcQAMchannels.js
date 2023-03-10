import {
    GET_RC_QAM_CREATE_TABLE_ROW_SUCCEEDED,
    GET_RC_QAM_DELETE_TABLE_ROW_SUCCEEDED,
    GET_RC_QAM_EDIT_TABLE_ROW_SUCCEEDED,
    GET_RUN_CONFIG_QAM_TABLE_FAILED,
    GET_RUN_CONFIG_QAM_TABLE_STARTED,
    GET_RUN_CONFIG_QAM_TABLE_SUCCEEDED,
    GET_RUN_CONFIG_SINGLE_QAM_TABLE_FAILED,
    GET_RUN_CONFIG_SINGLE_QAM_TABLE_STARTED,
    GET_RUN_CONFIG_SINGLE_QAM_TABLE_SUCCEEDED
} from "../lib/constants";
import {
    getRCQAMAddTableRow,
    getRCQAMDeleteTableRow,
    getRCQAMUpdateTableRow,
    getTableRunConfigQAM,
    getTableRunConfigQAMSingle,
    makeDefaultAPI,
    postSaveAsAPI
} from "../services/api";
import { showPopup } from "./popupAction";

const getRunConfigQAMTableStarted = () => ({
    type: GET_RUN_CONFIG_QAM_TABLE_STARTED
});

const getRunConfigQAMTableSucceeded = data => ({
    type: GET_RUN_CONFIG_QAM_TABLE_SUCCEEDED,
    payload: data
});

const getRunConfigQAMTableFailed = error => ({
    type: GET_RUN_CONFIG_QAM_TABLE_FAILED,
    payload: error,
    error: true
});

const getRCQAMCreateTableRowSucceeded = data => ({
    type: GET_RC_QAM_CREATE_TABLE_ROW_SUCCEEDED,
    payload: data
});

const getRCQAMDeleteTableRowSucceeded = data => ({
    type: GET_RC_QAM_DELETE_TABLE_ROW_SUCCEEDED,
    payload: data
});

const getRCQAMEditTableRowSucceeded = data => ({
    type: GET_RC_QAM_EDIT_TABLE_ROW_SUCCEEDED,
    payload: data
});

const getRunConfigSingleQAMTableStarted = () => ({
    type: GET_RUN_CONFIG_SINGLE_QAM_TABLE_STARTED
});

const getRunConfigSingleQAMTableSucceeded = data => ({
    type: GET_RUN_CONFIG_SINGLE_QAM_TABLE_SUCCEEDED,
    payload: data
});

const getRunConfigSingleQAMTableFailed = error => ({
    type: GET_RUN_CONFIG_SINGLE_QAM_TABLE_FAILED,
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

export const getRCQAMCreateTableRow = (payload) => {
    return async dispatch => {

        await getRCQAMAddTableRow(payload).then(function (response) {
            dispatch(getRCQAMCreateTableRowSucceeded(response));
        })
            .catch(function (error) {
                console.log("getRCQAMAddTableRow error");
            });
    };
}

export const getRCQAMDeleteTableRowCell = (ch_id) => {
    return async dispatch => {

        await getRCQAMDeleteTableRow(ch_id).then(function (response) {
            dispatch(getRCQAMDeleteTableRowSucceeded(response));
        })
            .catch(function (error) {
                console.log("getRCQAMDeleteTableRow error");

            });
    };
}

export const getRCQAMEditTableRow = (ch_id, payload) => {
    return async dispatch => {

        await getRCQAMUpdateTableRow(ch_id, payload).then(function (response) {
            dispatch(getRCQAMEditTableRowSucceeded(response));
        })
            .catch(function (error) {
                console.log("getRCQAMUpdateTableRow error");
            });
    };
}

export const postSaveAs = (filename) => {
    return async dispatch => {

        await postSaveAsAPI(filename).then(function (response) {
            dispatch(showPopup({ message: "save as successfully", type: "success" }))
        })
            .catch(function (error) {
                dispatch(showPopup({ message: error.message, type: "danger" }))
            });
    };
}

export const makeDefault = () => {
    return async dispatch => {

        await makeDefaultAPI().then(function (response) {
            dispatch(showPopup({ message: "Action was complete successfully", type: "success" }))
        })
            .catch(function (error) {
                dispatch(showPopup({ message: error.message, type: "danger" }))
            });
    };
}

export const drcSingleQAMTable = (ch_id) => {
    return async dispatch => {
        dispatch(getRunConfigSingleQAMTableStarted());

        await getTableRunConfigQAMSingle(ch_id).then(function (response) {
            dispatch(getRunConfigSingleQAMTableSucceeded(response));
            dispatch(showPopup({ message: "save as successfully", type: "success" }))
        })
            .catch(function (error) {
                dispatch(getRunConfigSingleQAMTableFailed(error));
            });
    };
}