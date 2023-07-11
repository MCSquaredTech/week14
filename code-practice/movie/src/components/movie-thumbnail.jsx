
import React, { useState } from "react";
class Reviews { 
    constructor(movieId, review, starRating) {
        this.movieId = movieId; 
        this.review = review;
        this.starRating = starRating;
    }
}
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





const MovieThumbnail = (movies) => { 

    const [reviews, setReviews] = useState([]);


    const submitReview = (e) => { 
        e.preventDefault(); 
        
        const getReview = new Reviews(movies.movie.id, reviews, 4); 
        console.log(getReview);
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
                <form method="post" onSubmit={submitReview} >
                    <div className="form-group">
                        <textarea 
                            name="review" 
                            type="text"
                            style={reviewStyle} 
                            id="review" 
                            value = {reviews}
                            onChange={e => setReviews(e.target.value)}
                            placeholder="reveiw comments" />
                    </div>
                </form>
                <button type="text"
                    id={movies.movie}
                    className='btn btn-primary'
                    onClick={submitReview}>Review</button>
            </div>
            <div> 

            </div>
        </div>
    );
}

export default MovieThumbnail