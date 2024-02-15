import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description,imageUrl,newsUrl,author,date,source } = this.props;
    return (
      <div className="my-4">
        <div className="card">
          <div style={{
            display:"flex",
            justifyContent:"flex-end",
            position:"absolute",
            right:0,
          }}>
        <span className="badge rounded-pill bg-info">{source}</span>
        </div>
          <img className="card-img-top" src={imageUrl} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">
             Read More
            </a>
            <p className="card-text mt-2"><small className="text-muted">By: {author?author:"Unknown"} at {new Date(date).toGMTString()}</small></p>
          </div>
        </div>
      </div>
    );
  }
}
