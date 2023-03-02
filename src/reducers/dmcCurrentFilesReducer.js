import {
    GET_MANAGE_CONFIG_QAM_TABLE_FAILED,
    GET_MANAGE_CONFIG_QAM_TABLE_STARTED,
    GET_MANAGE_CONFIG_QAM_TABLE_SYSTEM_SUCCEEDED,
    GET_MANAGE_CONFIG_QAM_TABLE_USER_SUCCEEDED,
    GET_MANAGE_NEW_DATABASE_ADD_SUCCEEDED
} from "../lib/constants";
import initialState from "./initialState";

export const dmcTableReducer = (state = initialState.manageConfigTable, action) => {
    switch (action.type) {
        case GET_MANAGE_CONFIG_QAM_TABLE_STARTED:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case GET_MANAGE_CONFIG_QAM_TABLE_USER_SUCCEEDED:
            return {
                ...state,
                mcTableUser: action.payload,
                isLoading: false,
            };
        case GET_MANAGE_CONFIG_QAM_TABLE_SYSTEM_SUCCEEDED:
            return {
                ...state,
                mcTableSystem: action.payload,
                isLoading: false,
            };
        case GET_MANAGE_CONFIG_QAM_TABLE_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export const dmcNewDataBaseAddReducer = (state = initialState.dmcNewDataBaseAdd, action) => {
    switch (action.type) {

        case GET_MANAGE_NEW_DATABASE_ADD_SUCCEEDED:
            return {
                ...state,
                dmcNewDataBase: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
};