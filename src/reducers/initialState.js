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

    manageConfigTable: {
        mcTableUser: [],
        mcTableSystem: [],
        error: null
    },

    configurationQAMTable: {
        addRange: [],
        error: null
    },

    dmcNewDataBaseAdd: {
        dmcNewDataBase: [],
        error: null
    },

};

export default initialState;