import React, { useState } from "react";
import { Rating } from 'react-simple-star-rating'; 

let UserComment = ({onClick}) => { 
    const [userComment, setUserComment] = useState({})
    const { review, stars } = userComment;

    const handleChange = (envent) => {
        
        const { name, value } = envent.target; 
        console.log(name, value);
        setUserComment((prevData) => ({...prevData, [name]: value }));
    } 

    const handleRating = (rate) => { 
        setUserComment((prevData) => ({...prevData, stars: rate }));
    }

    const handleSave = (event) => { 
        event.preventDefault()
        onClick(userComment);
        
    }

    return ( 
        <div>
            <form className="form" id="comments">
                <div className="form-group">
                    <p>Review</p>
                    <textarea type="text" 
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
                        className="btn btn-primary"
                        name="save" 
                        
                        onClick={handleSave}>Save</button>
                </div>
            </form>
        </div>
    );
}

export default UserComment;