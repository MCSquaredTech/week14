
const style = { 
    border: '1px solid darkblue',
    borderRadius: "15px",
    backgroundColor: "white",
    height: '150px',
    cursor: 'pointer',
    padding: '2px',
    margin: "2px"
}

const handleClick = (movies) => { 
    console.log(movies.target.id);
}

const MovieThumbnail = (movies) => { 
    return (
        <div>
            <img 
                src={movies.movie.image} 
                alt={movies.movie.title} 
                id={movies.movie.title}
                onClick={handleClick}
                style={style} />
        </div>
    );
}

export default MovieThumbnail