const initialState = {
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

    popup: null,

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

};

export default initialState;