import { HIDE_POP_UP, SHOW_POP_UP } from "../lib/constants";

const showPopUpAction = data => ({
  type: SHOW_POP_UP,
  payload: data,
});

const hidePopUpAction = () => ({
  type: HIDE_POP_UP,
  payload: {},
});

export const showPopup = (data) => {
  return async dispatch => {
    dispatch(showPopUpAction(data));
  }
}

export const hidePopup = () => {
  return async dispatch => {
    dispatch(hidePopUpAction());
  }
}