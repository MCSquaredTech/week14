import React from "react";
import MovieCard from "./movie-card";

export default class RenderMovieList extends React.Component { 
    constructor(props) { 
        super(props); 
        this.state = {
            movies: props.movies
        };
    }

    render() { 
        let movies; 
        if (this.state.movies) { 
            movies = this.state.movies.map((movie, index) => <MovieCard key={index} {...movie} />);
        }
        return (
            <div className="flex-line">
              {movies}
            </div>
        );
    }
}