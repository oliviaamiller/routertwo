import { Route, Switch, Redirect } from 'react-router-dom';
import ArtList from './views/Art/List';
import ArtDetails from './views/Art/Details';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/art" />
        </Route>
        <Route exact path="/art">
          <ArtList />
        </Route>
        <Route path="/art/:id">
          <ArtDetails />
        </Route>
      </Switch>
    </>
  );
}
