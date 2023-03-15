import initialState from "./initialState";
import {
    GET_QAM_DELETE_All_TABLE_ROW_SUCCEEDED,
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

export const drcQAMTableReducer = (state = initialState.runConfigQAMTable, action) => {
    switch (action.type) {
        case GET_RUN_CONFIG_QAM_TABLE_STARTED:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case GET_RUN_CONFIG_QAM_TABLE_SUCCEEDED:
            return {
                ...state,
                rcQAMTable: action.payload,
                isLoading: false
            };
        case GET_RUN_CONFIG_QAM_TABLE_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export const drcQAMTableRowCreateReducer = (state = initialState.rcQAMCreateRowTable, action) => {
    switch (action.type) {

        case GET_RC_QAM_CREATE_TABLE_ROW_SUCCEEDED:
            return {
                ...state,
                rcQAMCreateRow: action.payload,
            };
        default:
            return state;
    }
};

export const drcQAMTableRowDeleteReducer = (state = initialState.rcQAMDeleteRowTable, action) => {
    switch (action.type) {

        case GET_RC_QAM_DELETE_TABLE_ROW_SUCCEEDED:
            return {
                ...state,
                rcQAMDeleteRow: action.payload,
            };

        default:
            return state;
    }
};

export const drcQAMTableRowEditReducer = (state = initialState.rcQAMEditRowTable, action) => {
    switch (action.type) {

        case GET_RC_QAM_EDIT_TABLE_ROW_SUCCEEDED:
            return {
                ...state,
                rcQAMEditRow: action.payload,
            };

        default:
            return state;
    }
};

export const drcSingleQAMTableReducer = (state = initialState.drcSinglelQAMTable, action) => {
    switch (action.type) {
        case GET_RUN_CONFIG_SINGLE_QAM_TABLE_STARTED:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case GET_RUN_CONFIG_SINGLE_QAM_TABLE_SUCCEEDED:
            return {
                ...state,
                drcSinglelQAMTableData: action.payload,
                isLoading: false
            };
        case GET_RUN_CONFIG_SINGLE_QAM_TABLE_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export const drcQAMTableAllDeleteReducer = (state = initialState.rcQAMDeleteAllRows, action) => {
    switch (action.type) {

        case GET_QAM_DELETE_All_TABLE_ROW_SUCCEEDED:
            return {
                ...state,
                rcQAMDeleteAllRowsData: action.payload,
            };

        default:
            return state;
    }
};