import {
    GET_ANNEX_FAILED,
    GET_ANNEX_STARTED,
    GET_ANNEX_SUCCEEDED,
    GET_SPLIT_FAILED, GET_SPLIT_STARTED,
    GET_SPLIT_SUCCEEDED,
    POST_ANNEX_SUCCEEDED,
    POST_SPLIT_SUCCEEDED
}
    from "../lib/constants";
import {
    getSystemSettingsAnnexData,
    getSystemSettingsSplitData,
    systemSettingsAnnex,
    systemSettingsSplit
}
    from "../services/api";
import { showPopup } from "./popupAction";


const postSystemSettingsSplit = (data) => ({
    type: POST_SPLIT_SUCCEEDED,
    payload: data,
});

const postSystemSettingsAnnex = (data) => ({
    type: POST_ANNEX_SUCCEEDED,
    payload: data,
});


const getSystemSettingsSplitStarted = () => ({
    type: GET_SPLIT_STARTED
});

const getSystemSettingsSplitSucceeded = data => ({
    type: GET_SPLIT_SUCCEEDED,
    payload: data
});

const getSystemSettingsSplitFailed = error => ({
    type: GET_SPLIT_FAILED,
    payload: error,
    error: true
});

const getSystemSettingsAnnexStarted = () => ({
    type: GET_ANNEX_STARTED
});

const getSystemSettingsAnnexSucceeded = data => ({
    type: GET_ANNEX_SUCCEEDED,
    payload: data
});

const getSystemSettingsAnnexFailed = error => ({
    type: GET_ANNEX_FAILED,
    payload: error,
    error: true
});




export const postSettingsSplit = (payload) => {
    return async dispatch => {

        await systemSettingsSplit(payload).then(function (response) {
            dispatch(postSystemSettingsSplit(response));
            dispatch(showPopup({ message: " Setting Splits as Successfully", type: "success" }))

        })
            .catch(function (error) {
                console.log("postSettingsSplit error");
            });
    };
}


export const postSettingsAnnex = (payload) => {
    return async dispatch => {

        await systemSettingsAnnex(payload).then(function (response) {
            dispatch(postSystemSettingsAnnex(response));
            dispatch(showPopup({ message: " Setting Annex as Successfully", type: "success" }))

        })
            .catch(function (error) {
                console.log("postSettingsAnnex error");
            });
    };
}

export const getSystemSettingsSplit = () => {
    return async dispatch => {
        dispatch(getSystemSettingsSplitStarted());

        await getSystemSettingsSplitData().then(function (response) {
            dispatch(getSystemSettingsSplitSucceeded(response));
        })
            .catch(function (error) {
                dispatch(getSystemSettingsSplitFailed(error));
            });
    };
}

export const getSystemSettingsAnnex = () => {
    return async dispatch => {
        dispatch(getSystemSettingsAnnexStarted());

        await getSystemSettingsAnnexData().then(function (response) {
            dispatch(getSystemSettingsAnnexSucceeded(response));
        })
            .catch(function (error) {
                dispatch(getSystemSettingsAnnexFailed(error));
            });
    };
}