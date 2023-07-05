import React from "react";
import LikeButton from "./like-button";
import ReplyButton from "./reply-button";
import Comment from "./comment";

let e = React.createElement; 

export default class Post extends React.Component { 
    constructor(props) { 
        super(props); 
        this.state = {
            comments: props.comments, 
            content: props.content
        }
    }
    render() { 
        let comments; 
        if(this.state.comments) {
            comments = this.state.comments.map((comments, index) => <Comment key={index} {...comments} />);
        }
        return ( 
            <div className="container">
                <div className="col-md">
                <div className="card w-75">
                        <div className="card-header bg-primary text-white text-justified-left"> 
                            Username and Time: 
                        </div>
                        <div className="card-body text-justified-left">
                            {this.state.content}
                        </div>
                        <div className="card-footer buttons-justified-right"> 
                            <div className="buttons-justified-right">
                                <LikeButton />
                                <ReplyButton />
                            </div>
                            {comments}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}