
const style = { 
    border: '1px solid darkblue',
    borderRadius: "15px",
    backgroundColor: "white",
    height: '250px',
    cursor: 'pointer',
    padding: '2px',
    margin: "12px"
}

const handleClick = (movies) => { 
    console.log(movies.target.id);
}

const comment = (id) => { 
    console.log(id)
}

const MovieThumbnail = (movies) => { 
    return (
        <div>
            <div>
            <img 
                src={movies.movie.image} 
                alt={movies.movie.title} 
                id={movies.movie.title}
                onClick={handleClick}
                style={style} />
            </div>
            <div> 
                <button className='btn btn-primary' onClick={comment} id={movies.movie}>comment</button>
            </div>
        </div>
    );
}

export default MovieThumbnail