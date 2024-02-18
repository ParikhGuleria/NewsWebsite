import React, { useState, useEffect } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';


export default function News(props) {
  const [Articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&pageSize=${props.pageSize}&apiKey=5ebfd82818de4a76b178eadd086d7135`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    console.log("original")
    setLoading(false);
    setTotalResults(parsedData.totalResults);
  }

  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  useEffect(() => {
    updatePage();
  }, [])

  const updatePage = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&pageSize=${props.pageSize}&page=${page}&apiKey=5ebfd82818de4a76b178eadd086d7135`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setLoading(false);
  }
  const nextPage = () => {
    setPage(page + 1);
    updatePage();
    
  }
  const prevPage = () => {
    setPage(page - 1);
    updatePage()
  }
  return (
    <>
      <div className="container my-3" style={{color: props.mode=== "dark"?"white":"#042743"}}>
        <h2 className="text-center" style={{margin:'35px 0',marginTop:'90px'}}>News : Top {capitalize(props.category)} Headlines</h2>
        {loading && <Spinner />}
        <div className="row">
          {Articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <Newsitems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage :"https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw"} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
            </div>
          })
          }
        </div>
      </div>
      <div className='container d-flex justify-content-between '>
        <button disabled={page <= 1} type="button" onClick={prevPage} className="btn btn-dark">&larr;Previous</button>
        <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" onClick={nextPage} className="btn btn-dark">Next &rarr;</button>
      </div>
    </>
  )
}
