import SortingVisual from './pages/SortingVisual';
import { Switch, Route, useLocation } from 'react-router-dom';
import PathFinder from './pages/PathFinder';

function App() {
  const location = useLocation();
  return (
    <Switch location={location} key={location.key}>
      <Route path='/' exact component={SortingVisual} />
      <Route path='/pathfinder' exact component={PathFinder} />
    </Switch>
  );
}
// Add React Router

export default App;
