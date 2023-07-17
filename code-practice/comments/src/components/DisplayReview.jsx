import React, { useState } from "react";
import { Rating } from 'react-simple-star-rating'; 

const reviewStyle = {
    border: '1px solid darkblue', 
    borderRadius: '7px',
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center top",
    contentAlign: 'center',
    width: '200px',
    padding: '2px', 
    margin: '5px',
    fontSize: '14px'
}
// get comment and star rating for display 

let DisplayReiview = ({comment}) => {
    console.log(comment);
    let {id, value} = comment;
    let { review, stars } = value
    
    return (
        <div>
            <div className="card" style={reviewStyle}>
                <div className="card-header">
                    {review}
                </div>
                <div className="card-body"> 
                    <Rating
                        size={20}
                        initialValue={stars}
                        fillColor='orange'
                        emptyColor='gray'
                        readonly='true' />
                </div>
            </div>
        </div>
    );

}

export default DisplayReiview;