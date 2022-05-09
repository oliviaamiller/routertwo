import { Route, Switch, Redirect, Link } from 'react-router-dom';
import ArtList from './views/Art/List';
import ArtDetails from './views/Art/Details';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/art" />
        </Route>
        <Route path="/art">
          <ArtList />
        </Route>
        <Route path="/art/:id">
          <Link to="/">{'Back to All Art'}</Link>
          <ArtDetails />
        </Route>
      </Switch>
    </>
  );
}
