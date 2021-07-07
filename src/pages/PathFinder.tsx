import React from 'react';
import { NavLink } from 'react-router-dom';
import Gridbox from '../components/gridbox';
import Nav from '../components/Nav';
import { dijkstra, getNodesInShortestPath } from '../Algos/Dijkstra';

export default class SortingVisual extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      boxs: [],
    };
  }
  componentDidMount() {
    const boxs = [];
    for (let row = 0; row < 20; row++) {
      const current = [];
      for (let col = 0; col < 50; col++) {
        current.push([]);
      }
      boxs.push(current);
    }
    this.setState({ boxs });
  }
  render() {
    const { boxs } = this.state;
    return (
      <section>
        <div className='nav-container'>
          <NavLink to='/' exact>
            <h1>Sorting Algorithms</h1>
          </NavLink>
          <div>
            <button>Go!</button>
            <select>
              <option>A* Search</option>
              <option>Dijkstra's</option>
              <option>Greedy Best-first Search</option>
              <option>Breadth-first Search</option>
            </select>
            <button>Recursive Maze</button>
            <button>Clear Board</button>
          </div>
          <NavLink to='/pathfinder' exact>
            <h2>PathFinding Algorithms</h2>
          </NavLink>
        </div>
        {boxs.map((row: any[], rowIndex: React.Key | null | undefined) => {
          return (
            <div key={rowIndex} className='grid'>
              {row.map((box, boxIndex) => (
                <Gridbox></Gridbox>
              ))}
            </div>
          );
        })}
      </section>
    );
  }
}
