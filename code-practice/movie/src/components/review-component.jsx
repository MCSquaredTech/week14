import React, { useState } from "react";
import { Rating } from 'react-simple-star-rating'; 

let styleReview = { 
    
}

let ReviewComponent = ({onClick}) => { 
    const [userComment, setUserComment] = useState({})
    const { review, stars } = userComment;

    const handleChange = (envent) => {
        
        const { name, value } = envent.target; 
        setUserComment((prevData) => ({...prevData, [name]: value }));
    } 

    const handleRating = (rate) => { 
        setUserComment((prevData) => ({...prevData, stars: rate }));
    }

    const handleSave = (event) => { 
        
        event.preventDefault(); 
        event.target.reset();
        onClick(userComment); 
          
    }

    const handleReset = (event) => {
        console.log("Reset!")
        
    }

    return ( 
        <div>
            <form className="form" id="comments" onSubmit={handleSave}>
                <div className="form-group">
                    <p>Review</p>
                    <textarea type="text"
                        id="review" 
                        name="review"
                        rows="3"
                        cols="20"
                        placeholder="Write a Review!"
                        onChange={handleChange} />
                </div>
                <div className="form-group">
                    <Rating 
                        onClick={handleRating}
                        ratingValue="starValue"
                        size={20}
                        fillColor='orange'
                        emptyColor='gray' />
                </div>
                <div className="form-group"> 
                    <button 
                        type="submit"
                        className="btn btn-primary"
                        name="save" 
                        >Save</button>
                </div>
            </form>
        </div>
    );
}

export default ReviewComponent;