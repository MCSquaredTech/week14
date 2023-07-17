import React, { useState } from 'react';
import MovieThumbnail from './movie-thumbnail';
import { moviedata } from '../data-services/movie-data.js';

const thumbnail = {
    border: "2px solid white", 
    padding: "10px",
    margin: "10px",
    width: "1200px",
    backgroundColor: "#282c34",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center top",
    boxSizing: "border-box",
    color: "white"
  }

  const MovieContainer = () => { 
    
    const [movies, setMovies] = useState(moviedata);
    let movie = movies.map(function (movie, index) {
        return <MovieThumbnail key={index} movie={movie} />;
    });

    return (
        <div style={thumbnail} >
            <h3>Bruce Willis Movies</h3>
            <div id="moviemaster" style={thumbnail}>
                {movie}
            </div>                
        </div>
        );
  }

  export default MovieContainer; 