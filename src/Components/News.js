import React, { Component } from 'react'
import NewsItem from './NewsItem'


export default class News extends Component {

  constructor() {
    super();

    this.state = {
      articles: [],
      page: 1
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=0d9fdb9691cd414bac1f73f4691b09cf&page=1&pageSize=${this.props.pageSize}`;

    let data = await fetch(url)
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResult: parsedData.totalResults

    });
  }
  handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=0d9fdb9691cd414bac1f73f4691b09cf&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url)
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,

    });
  }
  handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=0d9fdb9691cd414bac1f73f4691b09cf&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url)
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles

    });

  }

  render() {
    return (
      <div className='container my-3'>
        <h3 className='text-center'><b>News Website</b> - top headlines</h3>
        <div className='row my-3'>
          {
            this.state.articles.map((element) => {

              return <div className='col-md-3  mx-4 my-2' key={element.url}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : "In a strong message on terrorism, External Affairs Minister S Jaishankar said on Saturday that no rhetoric, however sanctimonious, can ever cover-up blood stains."} imageUrl={element.urlToImage ? element.urlToImage : "https://c.ndtvimg.com/2022-09/1u1homto_jaishankar_625x300_25_September_22.jpg"} newsUrl={element.url} />
              </div>

            })
          }
          <div className='container d-flex justify-content-between my-3'>
            <button disabled={this.state.page <= 1} onClick={this.handlePrev} className='btn btn-sm btn-warning '>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize)} onClick={this.handleNext} className='btn btn-sm btn-warning'>Next&rarr;</button>
          </div>
        </div>
      </div>
    )
  }
}
