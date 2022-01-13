import AppBar from './components/AppBar/AppBar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import NotFound from './components/pages/NotFound';
import MovieCard from './components/MovieCard/MovieCard';

export default function App() {
  return (
    <div>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route path="/movies/:movieId">
          <MovieCard />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}
