export const selectAlgo = (algoId?: any) => {
  return {
    type: 'SELECT_ALGO',
    payload: algoId,
  };
};

export const setVisited = (visited?: any) => {
  return {
    type: 'SET_VISITED',
    payload: visited,
  };
};

export const setShortest = (shortest?: any) => {
  return {
    type: 'SET_SHORTEST',
    payload: shortest,
  };
};

export const clickMaze = (maze?: any) => {
  return {
    type: 'SET_MAZE',
    payload: maze,
  };
};
