import React from "react";

export default class MovieCard extends React.Component { 

    render() { 
        return (
            <div className="card"> 
                <div className="card-header"> 
                    <img src={this.props.image} alt={this.props.title} />
                </div>
                <div className="card-body">
                    <strong>{this.props.title}</strong>
                </div>
                <div className="card-footer"> 

                </div>
            </div>
        );
    }
}