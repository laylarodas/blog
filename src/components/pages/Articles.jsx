import React from 'react';
import { useState, useEffect } from 'react';
import { Global } from '../../helpers/Global';
import { Petition } from '../../helpers/Petition';
import { List } from './List';

export const Articles = () => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {

    const url = Global.url + 'articles';
    const {data, loading}= await Petition(url, "GET");

    if (data.status === "success") {
      setArticles(data.articles);
    }

    setLoading(false);
  }

  return (
    <>
      {loading ? <p>Loading...</p> : 

        articles.length >= 1 ? 
            <List articles={articles} setArticles={setArticles}/> 
            : <p>There are no articles to show</p>

      }
    </>
  );
};