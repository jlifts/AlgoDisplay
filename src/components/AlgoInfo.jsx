import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { useTransition, animated } from 'react-spring';

const getTitle = (algo) => {
  switch (algo) {
    case 0:
      return "Dijkstra's Algorithm";
    case 1:
      return 'A* Search';
    case 2:
      return 'Breadth First Search';
    case 3:
      return 'Depth First Search';
    case 4:
      return 'Merge Sort';
    case 5:
      return 'Quicksort';
    case 6:
      return 'Heapsort';
    case 7:
      return 'Select Sort';
    default:
      return;
  }
};

const getContent = (algo) => {
  switch (algo) {
    case 0:
      return `Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. It was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later.
      The algorithm exists in many variants. Dijkstra's original algorithm found the shortest path between two given nodes, but a more common variant fixes a single node as the "source" node and finds shortest paths from the source to all other nodes in the graph, producing a shortest-path tree.`;
    case 1:
      return `A* (pronounced "A-star") is a graph traversal and path search algorithm, which is often used in computer science due to its completeness, optimality, and optimal efficiency.
      One major practical drawback is its O(b^d) space complexity, as it stores all generated nodes in memory. Thus, in practical travel-routing systems, it is generally outperformed by algorithms which can pre-process the graph to attain better performance,
      as well as memory-bounded approaches; however, A* is still the best solution in many cases.`;
    case 2:
      return `Breadth-first search (BFS) is an algorithm for searching a tree data structure for a node that satisfies a given property. It starts at the tree root and explores all nodes at the present depth prior to moving on to the nodes at the next depth level.
       Breadth-first search can be generalized to graphs, when the start node (sometimes referred to as a 'search key') is explicitly given, and precautions are taken agains following a vertice twice.`;
    case 3:
      return `Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking.
       DFS uses Stack data structures, instead of the similar Breadth-First Search that uses a Queue data-structure.`;
    case 4:
      return `Merge sort (also commonly spelled as mergesort) is an efficient, general-purpose, and comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output.
       Merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945.`;
    case 5:
      return `Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. For this reason, it is sometimes called partition-exchange sort. The sub-arrays are then sorted recursively.
       This can be done in-place, requiring small additional amounts of memory to perform the sorting.`;
    case 6:
      return `Heapsort can be thought of as an improved selection sort: like selection sort, heapsort divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element from it and inserting it into the sorted region.
       Unlike selection sort, heapsort does not waste time with a linear-time scan of the unsorted region; rather, heap sort maintains the unsorted region in a heap data structure to more quickly find the largest element in each step.`;
    case 7:
      return `Selection sort is an in-place comparison sorting algorithm. It has an O(n2) time complexity, which makes it inefficient on large lists, and generally performs worse than the similar insertion sort. Selection sort is noted for its simplicity and has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.`;
    default:
      return;
  }
};
const AlgoInfoCard = withStyles({
  root: {
    width: '100%',
    padding: '3%',
    marginBottom: '2vh',
    marginRight: '2%',
  },
})(Card);

const AlgoInfo = (props) => {
  const transition = useTransition(props.algo, null, {
    from: {
      position: 'absolute',
      overflowX: 'hidden',
      transform: 'translateY(-5vh) scale(0.7)',
      opacity: 0,
    },
    enter: { opacity: 1, transform: 'translateY(0vh) scale(1)' },
    leave: { opacity: 0, transform: 'translateY(5vh) scale(0.7)' },
  });
  return transition.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
      <AlgoInfoCard>
        <Typography variant='h4'>{getTitle(item)}</Typography>
        <br />
        <Typography variant='body1'>{getContent(item)}</Typography>
      </AlgoInfoCard>
    </animated.div>
  ));
};

const mapStateToProps = (state) => {
  return {
    algo: state.algo,
  };
};

export default connect(mapStateToProps)(AlgoInfo);
