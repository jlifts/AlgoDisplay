import React from 'react';
import Nav from '../components/NavSort';
import AlgoInfo from '../components/AlgoInfo';
import SortingVisual from './SortingVisual';

function Sort() {
  return (
    <>
      <Nav />
      <div>
        <SortingVisual />
        <AlgoInfo />
      </div>
    </>
  );
}

export default Sort;
