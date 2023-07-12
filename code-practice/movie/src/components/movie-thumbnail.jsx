
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import ReviewComponent from "./review-component";

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

    const [reviews, setReviews] = useState([{id: 0, comment: '', stars: 0}])
    const review = { 
        id: movies.movie.id, 
        comment: reviews.comment, 
        stars: reviews.stars
    }

    

    const handleRating = (rate) => { 
        setReviews(prevState => {
            return { ...prevState, stars: rate }
        }); 
    }

    const handleReview = () => {  
        const getId =movies.movie.id;
        setReviews(prevState => { 
            return { ...prevState, id: getId }
        })
        
        console.log(reviews);

    }

    // if (reviews) {
    //     console.log(review);
    //     review = reviews.map(function (review, index) {
    //         return <ReviewComponent key={index} review={review} />
    //     })
    // }

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
                <form>
                    <div className="form-group">
                        <textarea 
                            name="review" 
                            type="text"
                            style={reviewStyle} 
                            id="review" 
                            value = {review}
                            onChange={e => setReviews(prevState => {
                                return { ...prevState, review: e.target.value }
                            })
                            } />
                    </div>
                </form>
            </div>
            <div> 
                <Rating
                    onClick={handleRating}
                    // onPointerEnter={onPointerEnter}
                    // onPointerLeave={onPointerLeave}
                    // onPointerMove={onPointerMove}
                    /* Available Props */
                />
            </div>
            <div>
                <button type="text"
                    id="1"
                    className='btn btn-primary'
                    onClick={handleReview}>Review</button>
            </div>
            {/* {review} */}
        </div>
        
    );
}

export default MovieThumbnail