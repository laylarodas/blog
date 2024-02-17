import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Global } from '../../helpers/Global';
import { Petition } from '../../helpers/Petition';
import { List } from './List';

export const Search = () => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    getArticles();
  }, []);

  useEffect(() => {
    getArticles();
  }, [params]);

  const getArticles = async () => {

    const url = `${Global.url}search/${params.search}`;

    const {data, loading}= await Petition(url, "GET");

    console.log(data);
    if (data.status === "success") {
      setArticles(data.findedArticles);
    }else{
      setArticles([]);
    }

    setLoading(false);
  }

  return (
    <>
      {loading ? "Loading..." : 
        articles && articles.length >= 1 ? 
            <List articles={articles} setArticles={setArticles}/> 
            : <p>There are no articles to show</p>

      }
    </>
  );
};