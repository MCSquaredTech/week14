
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import ReviewComponent from "./review-component";


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


const MovieThumbnail = (key, movie) => {
    const reviewCollection = [{ 
        id: 0, 
        review: ' ',
        stars: 0,
      }];
    
    const [userReviews, setUserReviews] = useState(reviewCollection); 
    const { id, review, stars } = userReviews;

    console.log(reviewCollection);

    const handleRating = (rate) => { 
        stars = rate
        setUserReviews(prevState => {
            return { ...prevState, stars: stars }
        }); 
    }

    const handleReview = () => {  
        id = key + 1;
        setUserReviews(prevState => { 
            return { ...prevState, id: id }
        })
        
        console.log(userReviews);

    }

    const handleClick = () => {

    }

    if (userReviews) {
        review = userReviews.map(function (review, index) {
            return <ReviewComponent key={index} review={review} />
        })
    }

    return (
        <div>
            <div>
            <img 
                src={movie.image} 
                alt={movie.title} 
                id={movie.title}
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
                            value = {userReviews.review}
                            onChange={e => setUserReviews(prevState => {
                                return { ...prevState, comment: e.target.value }
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
            {review}
        </div>
        
    );
}

export default MovieThumbnail