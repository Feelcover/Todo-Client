import { IAlertAction, IAlertState, TodoActionTypes } from "../types/types";

const initialState = {
  alertText: "",
  alertStatus: "",
};

export const alertReducer = (state: IAlertState = initialState, action: IAlertAction) => {
  switch (action.type) {
    case TodoActionTypes.SHOW_ALERT:
      return { alertText: action.payload, alertStatus: action.status };

    case TodoActionTypes.HIDE_ALERT:
      return { alertText: "", alertStatus: "" };

    default:
      return state;
  }
};
