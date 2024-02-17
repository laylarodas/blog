import React from 'react';
import { useState, useEffect } from 'react';
import { Global } from '../../helpers/Global';
import { Petition } from '../../helpers/Petition';
import { List } from './List';
import { useParams } from 'react-router-dom';

export const Detail = () => {

  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {

    const url = Global.url + 'article/' + params.id;

    console.log(url);
    const { data, loading } = await Petition(url, "GET");

    if (data.status === "success") {
      setArticle(data.article);
    }

    setLoading(false);
  }

  return (
    <div className='jumbo'>
      {loading ? <p>Loading...</p> :
        (
          <>
            <div className='mask'>
              {article.image != "default.png" && <img src={Global.url + "image/" + article.image} alt="" />}

              {article.image == "default.png" && <img src={Global.url + "image/default.png"} alt="" />}
            </div>
            <h1>{article.title}</h1>
            <span>{article.date}</span>
            <p>{article.content}</p>
          </>
        )

      }
    </div>
  );
};