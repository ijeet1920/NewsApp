import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4033e6655a734946b493d7f9ce5c19a9&page=1&pageSize=12";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData)
    this.setState({ article: parsedData.articles,
      totalResults:parsedData.totalResults });
  }

  handlePrev = async() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4033e6655a734946b493d7f9ce5c19a9&page=${this.state.page - 1}&pageSize=12`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      article: parsedData.articles,
    });
  };

  handleNext = async() => {
    if(this.state.page + 1>Math.ceil(this.state.totalResults/12)){

    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4033e6655a734946b493d7f9ce5c19a9&page=${this.state.page + 1}&pageSize=12`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      article: parsedData.articles,
    });}
  };



  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.article.map((ele) => {
            return (
              <div className="col-md-4" key={ele.url}>
                <NewsItem
                  title={ele.title ? ele.title : ""}
                  description={ele.description ? ele.description : ""}
                  imageUrl={
                    ele.urlToImage
                      ? ele.urlToImage
                      : "https://c8.alamy.com/comp/PR1RFW/news-logo-illustration-PR1RFW.jpg"
                  }
                  newsUrl={ele.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrev}
          >
            &larr; Previous
          </button>
          <div>
            <p>{this.state.page}</p>
          </div>
          <button className="btn btn-dark"
           onClick={this.handleNext}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
