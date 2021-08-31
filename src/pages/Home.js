import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

function Home() {
  const [newsArticles, setNewsArticles] = useState([]);

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
        setNewsArticles(data.news);
        console.log(newsArticles);
      });
  };

  return (
    <div>
        <div style={{marginBottom: '20px'}}>
             <h1>Covid-19 Information</h1>
      <button onClick={handleClick}>Latest News</button>
        </div>
        <div>
            
        </div>
     
      <div className="row justify-content-center">
        {newsArticles.map((article, index) => {
          return (
            <Card key={index} className='col-7' >
              <Card.Header>{article.provider.name}</Card.Header>
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>
                  {article.excerpt}
                </Card.Text>
                <Button href={article.webUrl} variant="primary">See Full Story</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
