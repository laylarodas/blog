import React from 'react';
import { useState, useEffect } from 'react';
import { Global } from '../../helpers/Global';
import { Petition } from '../../helpers/Petition';

export const Articles = () => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {

    const url = Global.url + 'articles';
    const {data, loading}= await Petition(url, "GET");

    if (data.status === "success") {
      setArticles(data.articles);
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