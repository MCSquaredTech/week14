import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieThumbnail from './components/movie-thumbnail';
import { moviedata } from './data-services/movie-data.js';

const thumbnail = {
  backgroundColor: "#282c34",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  boxSizing: "border-box",
  color: "white"
}

function App() {
  const [movies, setMovies] = useState(moviedata);
  let movie = movies.map(function (movie, index) {
    return <MovieThumbnail key={index} movie={movie} />;
  });

  return (
    <div className='App'>
      <header className="App-header">
        <div style={thumbnail}>
          {movie}
          {/* {
            movies.map((movie, index) => { 
              return <MovieThumbnail key={index} value={movie} />
            })
          } */}
        </div>
      </header>
    </div>
  );
}

export default App;
