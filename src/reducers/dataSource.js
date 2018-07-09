
import * as actionTypes from '../constants/ActionTypes';

const initialState = {
  dataTree: [],
  schema: []
};

export default function dataSource(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_DATA_TREE:
      return Object.assign({}, state, {
        status: action.status,
        dataTree: action.response
      });
    default:
      return state;
  }
}
