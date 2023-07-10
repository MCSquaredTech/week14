
import React, { useState } from "react";

const style = { 
    border: '1px solid darkblue',
    borderRadius: "15px",
    backgroundColor: "white",
    height: '250px',
    cursor: 'pointer',
    padding: '2px',
    margin: "12px"
}

const reviewStyle = {
    border: '1px solid darkblue', 
    borderRadius: '7px',
    padding: '2px', 
    margin: '5px',
    fontSize: '14px'
}

const handleClick = (movies) => { 
    console.log(movies.target.id);
}

const submitReview = (id) => { 
    console.log(id)
}



const MovieThumbnail = (movies) => { 
    console.log(movies);
    let review;
    const [reviews, setReviews] = useState([]);
    if (reviews) {

    }
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
                <form className="form">
                    <div className="form-group">
                        <textarea type="text" id="review" style={reviewStyle} placeholder="reveiw comments" />
                    </div>
                </form>
                <button className='btn btn-primary' 
                    onClick={submitReview} 
                    id={movies.movie.title}>Review</button>
            </div>
        </div>
    );
}

export default MovieThumbnail