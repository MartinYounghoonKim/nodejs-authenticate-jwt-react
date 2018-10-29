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

const userItemState: any = {
    items: 1
};

const user = (state: any = userItemState, action: any) => {
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
    board,
    user
});

export default boardApp;