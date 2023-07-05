import React from "react";
import LikeButton from "./like-button";
import ReplyButton from "./reply-button";

export default class Comment extends React.Component { 
    render() {
        return (
            <div className="card w-75"> 
                <div className="card-header bg-success text-white text-justified-left"> 
                    {this.props.username} {this.props.date}
                </div>
                <div className="card-body"> 
                    <div className="text-justified-left">
                        {this.props.content}
                    </div>   
                </div>
                <div className="card-footer"> 
                    <div className="buttons-justified-right">
                        <LikeButton />
                        <ReplyButton /> 
                    </div>
                    
                </div>
            </div>
        );
    }
}