import initialState from "./initialState";

const popUpreducer = (state = initialState.popup, action) => {
  switch (action.type) {
    case "SHOW_POP_UP":
      return {
        ...state,
        popup: action.payload,
      };
    default:
      return state;
  }
};
export default popUpreducer;