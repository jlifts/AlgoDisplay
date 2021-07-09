import React from 'react';
import { NavLink } from 'react-router-dom';

const Soon = () => {
  return (
    <div className='container'>
      <h3 className='cs'>Coming Soon!</h3>
      <p className='cs-p'>
        Pathfinding Algorithms like Dijkstra's algorithm, A* Search, Breadth
        First Search, and Depth First Search
      </p>
      <NavLink className='cs-p l' to='/'>
        Click to Sort!
      </NavLink>
    </div>
  );
};

export default Soon;
