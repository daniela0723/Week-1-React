import React from "react";
import Stars from "./Stars";
import ReviewList from "./ReviewList";

export default class Movie extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header movie">
          <span className="title">{this.props.title}</span> {this.props.year}
        </div>
        <div className="card-body">
          <img src={this.props.uri} alt="Movie Poster" className="container" />{" "}
          <br />
          <p>
            <b>{this.props.rating}</b>
            <br />
            <b>{this.props.genres}</b>
            <br />
            <em>{this.props.description}</em>
          </p>
        </div>
        <div className="card-footer">
          <Stars />
          <br />
          <ReviewList />
        </div>
      </div>
    );
  }
}
