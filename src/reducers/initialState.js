const initialState = {

    popup: null,

    runCongifQAMTable: {
        rcQAMTable: [],
        isLoading: false,
        error: null
    },

    rcQAMEditRowTable: {
        rcQAMEditRow: [],
        error: null
    },

    rcQAMCreateRowTable: {
        rcQAMCreateRow: [],
        error: null
    },

    rcQAMDeleteRowTable: {
        rcQAMDeleteRow: [],
        error: null
    },

    SystemSettingSplit: {
        settingSplitPost: [],
        error: null
    },

    SystemSettingAnnex: {
        settingAnnexPost: [],
        error: null
    },

    SystemSettingSplitData: {
        settingSplitGet: [],
        isLoading: false,
        error: null
    },

    SystemSettingAnnexData: {
        settingAnnexGet: [],
        isLoading: false,
        error: null
    },

    manageConfigTable: {
        mcTableUser: [],
        mcTableSystem: [],
        error: null
    },

    dmcNewDataBaseAdd: {
        dmcNewDataBase: [],
        error: null
    },

    dmcRowSelectData: {
        dmcRowData: [],
        isLoading: false,
        error: null
    },
    dcAddRange: {
        dcAddRangeData: [],
        error: null
    },

    dcDeleteConfiguration: {
        dcDeleteConfigurationData: [],
        error: null
    },

    dcSingleQAMTable: {
        dcSingleQAMTableData: [],
        isLoading: false,
        error: null
    },

};

export default initialState;