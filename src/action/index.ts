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
export const changeHeuristic = (heuristic: any) => {
  return {
    type: 'CHANGE_HEURISTIC',
    payload: heuristic,
  };
};
export const animateMaze = (animMaze: any) => {
  return {
    type: 'ANIMATE_MAZE',
    payload: animMaze,
  };
};
export const setAnimating = (isAnim: any) => {
  return {
    type: 'SET_ANIMATING',
    payload: isAnim,
  };
};
