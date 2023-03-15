import {
    POST_CONFIG_QAM_TABLE_ADD_RANGE,
    DELETE_CONFIGURATION_SUCCESSED,
    GET_CONFIGURATION_QAM_TABLE_STARTED,
    GET_CONFIGURATION_QAM_TABLE_SUCCEEDED,
    GET_CONFIGURATION_QAM_TABLE_FAILED,
    UPDATE_CONFIGURATION_SUCCESSED,
    POST_CONFIG_QAM_TABLE_ADD_TILT,
    ALL_DELETE_CONFIGURATION_SUCCESSED,
} from "../lib/constants";
import { addRangeConfiguration, addTiltConfiguration, allDeleteConfiguration, configSingleQAMTableData, deleteConfiguration, updateConfiguration } from "../services/api";
import { showPopup } from "./popupAction";

const addRangeConfigurationSucceded = (data) => ({
    type: POST_CONFIG_QAM_TABLE_ADD_RANGE,
    payload: data
});

const deleteConfigurationSuccessed = (data) => ({
    type: DELETE_CONFIGURATION_SUCCESSED,
    payload: data
});

const getConfigurationQAMtableStarted = () => ({
    type: GET_CONFIGURATION_QAM_TABLE_STARTED
});

const getConfigurationQAMtableSucceeded = data => ({
    type: GET_CONFIGURATION_QAM_TABLE_SUCCEEDED,
    payload: data
});

const getConfigurationQAMtableFailed = error => ({
    type: GET_CONFIGURATION_QAM_TABLE_FAILED,
    payload: error,
    error: true
});

const updateConfigurationSuccessed = (data) => ({
    type: UPDATE_CONFIGURATION_SUCCESSED,
    payload: data
});

const addTiltConfigurationSucceded = (data) => ({
    type: POST_CONFIG_QAM_TABLE_ADD_TILT,
    payload: data
});

const allDeleteConfigurationSuccessed = (data) => ({
    type: ALL_DELETE_CONFIGURATION_SUCCESSED,
    payload: data
});


export const addRangeQAMConfiguration = (dbname, payload) => {
    return async dispatch => {

        await addRangeConfiguration(dbname, payload).then(function (response) {
            dispatch(addRangeConfigurationSucceded(response));
            dispatch(showPopup({ message: "Add as successfully", type: "success" }))
        })
            .catch(function (error) {
                console.log("addRangeConfigurationSucceded error");
                dispatch(showPopup({ message: error.message, type: "danger" }))
            });
    };
}

export const configurationQAMRowDelete = (dbname, ch_id) => {
    return async dispatch => {

        await deleteConfiguration(dbname, ch_id).then(function (response) {
            dispatch(deleteConfigurationSuccessed(response));
        })
            .catch(function (error) {
                console.log("configurationQAMRowDelete error");
            });
    };
}

export const getConfigurationQAMTable = (dbname, ch_id) => {
    return async dispatch => {
        dispatch(getConfigurationQAMtableStarted());

        await configSingleQAMTableData(dbname, ch_id).then(function (response) {
            dispatch(getConfigurationQAMtableSucceeded(response));
        })
            .catch(function (error) {
                dispatch(getConfigurationQAMtableFailed(error));
            });
    };
}

export const configurationQAMRowUpdate = (dbname, ch_id, payload) => {
    return async dispatch => {

        await updateConfiguration(dbname, ch_id, payload).then(function (response) {
            dispatch(updateConfigurationSuccessed(response));
        })
            .catch(function (error) {
                console.log("configurationQAMRowUpdate error");
            });
    };
}

export const addTiltQAMConfiguration = (start_freq, end_freq, start_power, end_power, dbname) => {
    return async dispatch => {

        await addTiltConfiguration(start_freq, end_freq, start_power, end_power, dbname).then(function (response) {
            dispatch(addTiltConfigurationSucceded(response));
            dispatch(showPopup({ message: "Add Tilt as successfully", type: "success" }))
        })
            .catch(function (error) {
                dispatch(showPopup({ message: error.message, type: "danger" }))
            });
    };
}


export const configurationQAMRowAllDelete = (dbname) => {
    return async dispatch => {

        await allDeleteConfiguration(dbname).then(function (response) {
            dispatch(allDeleteConfigurationSuccessed(response));
        })
            .catch(function (error) {
                console.log("configurationQAMRowAllDelete error");
            });
    };
}