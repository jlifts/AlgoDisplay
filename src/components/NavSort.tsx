import React, { useState } from 'react';
import { connect } from 'react-redux';
import { selectAlgo, clickMaze } from '../action';

const handleAlgoClick = (index: any) => {
  selectAlgo(index);
};

const handleMaze = (index: any) => {
  clickMaze(index);
};

function Nav(props: { algo: any; selectAlgo: any; maze: any }) {
  const { algo, selectAlgo, maze } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return <div></div>;
}

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps, {
  selectAlgo,
  clickMaze,
})(Nav);
