import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { connect } from 'react-redux';
import { selectAlgo, changeHeuristic, animateMaze } from '../action';

const drawerWidth = 275;

const OrangeSwitch = withStyles({
  switchBase: {
    color: '#FFCC80',
    '&$checked': {
      color: '#EF6C00',
    },
    '&$checked + $track': {
      backgroundColor: '#E65100',
    },
  },
  checked: {},
  track: {},
})(Switch);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      marginRight: theme.spacing(6),
    },
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      zIndex: theme.zIndex.drawer + 1,
    },
    border: 0,
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 0.5rem 1rem 0 #1a1f33',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  toolButton: {
    marginRight: '1vw',
  },
  drawerPaper: {
    //Color for actual drawer can be set here
    width: drawerWidth,
    border: 0,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  card: {
    width: '100%',
    borderRadius: '0.5vw',
  },
  cardHeadText: {
    padding: '1vh',
    fontSize: '1rem',
  },
  header: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  titlebar: {
    display: 'flex',
    flexGrow: 1,
  },
}));

function NavBar(props: {
  visualize?: any;
  clearGrid?: any;
  visualizeMaze?: any;
  container?: any;
  algo?: any;
  selectAlgo?: any;
  changeHeuristic?: any;
  maze?: any;
  selectMaze?: any;
  animMaze?: any;
  animateMaze?: any;
  anim?: any;
}) {
  const {
    container,
    algo,
    selectAlgo,
    maze,
    selectMaze,
    animMaze,
    animateMaze,
    anim,
  } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleAlgoClick = (index: number) => {
    selectAlgo(index);
  };
  const handleMazeItemClick = (index: number) => {
    selectMaze(index);
  };

  const drawer = (
    <div>
      <List>
        <ListItem>
          <FormControlLabel
            control={
              <OrangeSwitch
                disabled={anim}
                checked={animMaze}
                onChange={() => animateMaze(!animMaze)}
                value='animateMaze'
              />
            }
            label='Animate Maze'
          />
        </ListItem>
        <Divider />
        <Typography variant='h6' className={classes.header}>
          Algorithms
        </Typography>
        <ListItem
          button
          disabled={anim}
          selected={algo === 0}
          onClick={(event) => {
            handleAlgoClick(0);
          }}
        >
          Dijkstra
        </ListItem>
        <ListItem
          button
          selected={algo === 1}
          disabled={anim}
          onClick={(event) => {
            handleAlgoClick(1);
          }}
        >
          A*
        </ListItem>
        <Divider />
        <Typography variant='h6' className={classes.header}>
          Maze
        </Typography>
        <ListItem
          button
          selected={maze === 2}
          disabled={anim}
          onClick={(event) => {
            handleMazeItemClick(2);
          }}
        >
          Recursive Division
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <div className={classes.titlebar}>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <NavLink to='/pathfinder' exact>
              <h2>PathFinding Algorithms</h2>
            </NavLink>
            <Button
              className={classes.toolButton}
              variant='text'
              disableElevation
              onClick={() => props.visualize()}
              disabled={anim}
            >
              Visualize
            </Button>
            <Button
              className={classes.toolButton}
              variant='text'
              disableElevation
              onClick={() => {
                props.clearGrid();
              }}
              disabled={anim}
            >
              Clear
            </Button>
            <Button
              variant='text'
              disableElevation
              onClick={() => {
                props.visualizeMaze(animateMaze);
              }}
              disabled={anim}
            >
              Maze
            </Button>
          </div>
          <NavLink to='/' exact>
            <h1>Sorting Algorithms</h1>
          </NavLink>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation='css'>
          <SwipeableDrawer
            container={container}
            variant='temporary'
            onOpen={() => {
              setMobileOpen(true);
            }}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </SwipeableDrawer>
        </Hidden>
        <Hidden smDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps, {
  selectAlgo,
  changeHeuristic,
  animateMaze,
})(NavBar);
