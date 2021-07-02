// Inspired by Clement Mihailescu
export function dijkstra(
  grid: any,
  startNode: { distance: number },
  endNode: any
) {
  const visitedOrder = [];
  startNode.distance = 0;
  const unvisitedNode = getAllNodes(grid);
  while (!!unvisitedNode.length) {
    sortNodesByDist(unvisitedNode);
    const closestNode = unvisitedNode.shift();
    //If it is a building skip
    if (closestNode.isWall) continue;
    // If trapped stop
    if (closestNode.distance === Infinity) return visitedOrder;
    closestNode.isVisited = true;
    visitedOrder.push(closestNode);
    if (closestNode === endNode) return visitedOrder;
    updateUnvisited(closestNode, grid);
  }
}

function sortNodesByDist(unvisitedNode: any[]) {
  unvisitedNode.sort(
    (nodeA: { distance: number }, nodeB: { distance: number }) =>
      nodeA.distance - nodeB.distance
  );
}

function updateUnvisited(node: { distance: number }, grid: any) {
  const unvisitedSides = getUnvisitedSides(node, grid);
  for (const side of unvisitedSides) {
    side.distance = node.distance + 1;
    side.previousNode = node;
  }
}

function getUnvisitedSides(
  node: { col?: any; row?: any; distance: number },
  grid: string | any[]
) {
  const sides = [];
  const { col, row } = node;
  if (row > 0) sides.push(grid[row - 1][col]);
  if (row < grid.length - 1) sides.push(grid[row + 1][col]);
  if (col > 0) sides.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) sides.push(grid[row][col + 1]);
  return sides.filter((sides) => !sides.isVisited);
}

function getAllNodes(grid: any) {
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
}

//This only works after the algo is called, it backtracks to find the shortest path
export function getNodesInShortestPath(endNode: any) {
  const nodesInShortestPath = [];
  let currentNode = endNode;
  while (currentNode !== null) {
    nodesInShortestPath.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPath;
}
