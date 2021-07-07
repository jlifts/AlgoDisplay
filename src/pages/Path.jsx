import React from 'react';
import Nav from '../components/Nav';
import AlgoInfo from '../components/AlgoInfo';
import PathFinder from './SortingVisual';

function Sort() {
  return (
    <>
      <Nav />
      <div>
        <PathFinder />
        <AlgoInfo />
      </div>
    </>
  );
}

export default Sort;
