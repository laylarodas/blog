import React from 'react';
import { useState, useEffect } from 'react';


export const Articles = () => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const url = 'http://localhost:3900/api/articles';
    let petition = await fetch(url, {
      method: 'GET'
    }
    );

    let result = await petition.json();


    console.log(result);

    if (result.status === "success") {
      setArticles(result.articles);
    }
  }

  return (
    <>
      {articles.length >= 1 ?
        articles.map((article) => {
          return (
            <article key={article.id} className='articleItem'>
              <div className='mask'>
                <img src="/images.jpg" alt="" />
              </div>
              <div className='info'>
                <h3 className='title'>{article.title}</h3>
                <p className='description'>{article.content}</p>

                <button className='edit'>Edit</button>
                <button className='delete' >Delete</button>
              </div>
            </article>
          )
        })
        : <p>There are no articles to show</p>
      }

    </>
  );
};