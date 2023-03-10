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
    ARCHIVE_DATABASE_SUCCEEDED
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
            };
        default:
            return state;
    }
};


export const dmcTableRowReducer = (state = initialState.dmcRowSelectData, action) => {
    switch (action.type) {
        case GET_MANAGE_CONFIG_ROW_SELECT_STARTED:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case GET_MANAGE_CONFIG_ROW_SELECT_SUCCEEDED:
            return {
                ...state,
                dmcRowData: action.payload,
                isLoading: false,
            };
        case GET_MANAGE_CONFIG_ROW_SELECT_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export const dmcRenameDataBaseReducer = (state = initialState.dmcRenameDataBase, action) => {
    switch (action.type) {

        case GET_CHANGE_NAME:
            return {
                ...state,
                dmcRenameDataBaseData: action.payload,
            };
        default:
            return state;
    }
};


export const dmcRenameDeleteDBReducer = (state = initialState.dmcRenameDeleteDB, action) => {
    switch (action.type) {

        case CHANGE_DELETE_DATABASE_SUCCEEDED:
            return {
                ...state,
                dmcRenameDeleteDBData: action.payload,
            };
        default:
            return state;
    }
};

export const dmcDeleteDatabaseReducer = (state = initialState.dmcDeleteDataBase, action) => {
    switch (action.type) {

        case DELETE_DATABASE_SUCCEEDED:
            return {
                ...state,
                dmcDeleteDataBaseData: action.payload,
            };
        default:
            return state;
    }
};

export const dmcArchiveDatabaseReducer = (state = initialState.dmcArchiveDataBase, action) => {
    switch (action.type) {

        case ARCHIVE_DATABASE_SUCCEEDED:
            return {
                ...state,
                dmcArchiveDataBaseData: action.payload,
            };
        default:
            return state;
    }
};