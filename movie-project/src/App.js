import { movies } from './data-service/movie-list.js';
import RenderMovieList from './components/rendar-movies-list';
import './App.css';

function App() {
  return (
    <div className="App">
      <RenderMovieList {...{movies: movies}} />
    </div>
  );
}

export default App;
