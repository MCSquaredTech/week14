
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import ReviewComponent from "./review-component";
import DisplayReview from "./display-review";

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


const MovieThumbnail = ({movie}) => { 
    const [userReviews, setUserReviews] = useState([]);
    const { id, values } = userReviews;

    let handleSave = (userComments) => { 
        setUserReviews([...userReviews, { 
            id: userComments.length, 
            movieId: movie.id,
            value: userComments 
        }]);
    }

    let review;
    if (userReviews) {
        review = userReviews.map((review, index) => {
            return <DisplayReview key={index} comment={review} />
        })
    }

    return (
        <div>
            <div>
                <img 
                    src={movie.image} 
                    alt={movie.title} 
                    id={movie.title}
                    style={style} />
            </div>
            <div>
                <ReviewComponent onClick={handleSave} />
            </div>
            <div>
                { review }
            </div>
        </div>
        
    );
}

export default MovieThumbnail