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

    manageConfigTable: {
        mcTableUser: [],
        mcTableSystem: [],
        error: null
    },

    ConfigurationQAMTable: {
        addRange: {},
        error: null

    },

    popup: null,
};

export default initialState;