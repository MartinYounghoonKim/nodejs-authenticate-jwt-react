import {FETCH_BOARD_ITEMS} from "../actions";
import {combineReducers} from "redux";

const boardItemState: any = {
    items: 1
};

const board = (state: any = boardItemState, action: any) => {
  switch (action.type) {
      case FETCH_BOARD_ITEMS:
          return {
              items: state.items + 1
          };
      default:
          return state;
  }
};

const boardApp = combineReducers({
    board
});

export default boardApp;