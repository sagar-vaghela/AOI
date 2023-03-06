import {
    GET_ANNEX_FAILED,
    GET_ANNEX_STARTED,
    GET_ANNEX_SUCCEEDED,
    GET_SPLIT_FAILED,
    GET_SPLIT_STARTED,
    GET_SPLIT_SUCCEEDED,
    POST_ANNEX_SUCCEEDED,
    POST_SPLIT_SUCCEEDED
}
    from "../lib/constants";
import initialState from "./initialState";


export const settingSplitReducer = (state = initialState.SystemSettingSplit, action) => {
    switch (action.type) {

        case POST_SPLIT_SUCCEEDED:
            return {
                ...state,
                settingSplitPost: action.payload,
            };
        default:
            return state;
    }
};

export const settingAnnexReducer = (state = initialState.SystemSettingAnnex, action) => {
    switch (action.type) {

        case POST_ANNEX_SUCCEEDED:
            return {
                ...state,
                settingAnnexPost: action.payload,
            };
        default:
            return state;
    }
};

export const settingSplitDataReducer = (state = initialState.SystemSettingSplitData, action) => {
    switch (action.type) {
        case GET_SPLIT_STARTED:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case GET_SPLIT_SUCCEEDED:
            return {
                ...state,
                settingSplitGet: action.payload,
                isLoading: false,
            };
        case GET_SPLIT_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export const settingAnnexDataReducer = (state = initialState.SystemSettingAnnexData, action) => {
    switch (action.type) {
        case GET_ANNEX_STARTED:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case GET_ANNEX_SUCCEEDED:
            return {
                ...state,
                settingAnnexGet: action.payload,
                isLoading: false,
            };
        case GET_ANNEX_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

