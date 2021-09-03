import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { actionSetNewsResults} from '../redux/actions/SetNewsResults'

function Home() {
  const [newsArticles, setNewsArticles] = useState([]);
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault();
    fetch("https://coronavirus-smartable.p.rapidapi.com/news/v1/US/", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com",
        "x-rapidapi-key": "af3bb10ebamsh1f28bed543e1fe7p1eb0a6jsnb7ffe74e4d98",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setNewsArticles(data.news)
        
      });
  };

  // const newsArticles = useSelector((state) => state.searchNewsResults)


  //  use effect may be a solution
  // useEffect(() => {
  //   fetch("https://coronavirus-smartable.p.rapidapi.com/news/v1/US/", {
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com",
  //       "x-rapidapi-key": "af3bb10ebamsh1f28bed543e1fe7p1eb0a6jsnb7ffe74e4d98",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.news)
  //       dispatch(actionSetNewsResults(data.news))
        
        
  //     });
    
  // },[])



  return (
    <div>
        <div style={{marginBottom: '20px'}}>
             <h1>Covid-19 News</h1>
      <button onClick={handleClick}>Latest News</button>
        </div>
        <div>
            
        </div>
     
      <div className="row justify-content-center">
        {newsArticles.map((article, index) => {
          return (
            <Card key={index} className='col-7' border='dark' style={{backgroundColor: '#17a3b84d'}}>
              <Card.Header style={{backgroundColor: '#17a2b8'}}>{article.provider.name}</Card.Header>
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>
                  {article.excerpt}
                </Card.Text>
                <Button href={article.webUrl} variant="info">See Full Story</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
