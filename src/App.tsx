import SortingVisual from './pages/SortingVisual';
import { Switch, Route, useLocation } from 'react-router-dom';
import Path from './pages/Path';
import Soon from './pages/Soon';

function App() {
  const location = useLocation();
  return (
    <Switch location={location} key={location.key}>
      <Route path='/' exact component={SortingVisual} />
      <Route path='/pathfinder' exact component={Path} />
      <Route path='/comingsoon' exact component={Soon} />
    </Switch>
  );
}
// Add React Router

export default App;
