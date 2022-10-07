import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'


function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=0d9fdb9691cd414bac1f73f4691b09cf&page=1`).then((response) => response.json()).then((result) => {
      setArticles(result.articles);
      setPage(result.setTotalResult);
    }, [])
  })

  return (
    <div className='container my-3'>
      <h3 className='text-center'><b>News Website</b> - top headlines</h3>
      <div className='row my-3'>
        {
          articles.map((element) => {

            return <div className='col-md-3  mx-4 my-2' key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : "In a strong message on terrorism, External Affairs Minister S Jaishankar said on Saturday that no rhetoric, however sanctimonious, can ever cover-up blood stains."} imageUrl={element.urlToImage ? element.urlToImage : "https://c.ndtvimg.com/2022-09/1u1homto_jaishankar_625x300_25_September_22.jpg"} newsUrl={element.url} />
            </div>

          })
        }
        {/* <div className='container d-flex justify-content-between my-3'>
          <button disabled={page <= 1} onClick={handlePrev} className='btn btn-sm btn-warning '>&larr; Previous</button>
          <button disabled={page + 1 > Math.ceil(totalresult / props.pageSize)} onClick={handleNext} className='btn btn-sm btn-warning'>Next&rarr;</button>
        </div> */}
      </div>
    </div>
  )
}
export default News;

