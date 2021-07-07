import { combineReducers } from 'redux';

const algoReducer = (algo = 1, action: { type: string; payload: any }) => {
  if (action.type === 'SELECT_ALGO') return action.payload;
  return algo;
};

const visitedReducer = (
  visited = 0,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'SET_VISITED':
      return action.payload;
    default:
      return visited;
  }
};

const shortestReducer = (
  shortest = 0,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'SET_SHORTEST':
      return action.payload;
    default:
      return shortest;
  }
};

export default combineReducers({
  algo: algoReducer,
  visited: visitedReducer,
  shortest: shortestReducer,
});
