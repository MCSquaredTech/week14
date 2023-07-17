
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
    const [userReviews, setUserReviews] = useState([]);
    const { id, values } = userReviews;

    const handleClick = () => {

    }

    let review;
    if (userReviews) {
        review = userReviews.map((review, index) => {
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
                    {review}
                </form>
            </div>
            <div> 
                {/* {review} */}
            </div>
           
        </div>
        
    );
}

export default MovieThumbnail