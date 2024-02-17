import React from 'react';
import {Global} from '../../helpers/Global';

export const List = ({articles,setArticles}) => {
  return (
    articles.map((article) => {
        return (
          <article key={article.id} className='articleItem'>
            <div className='mask'>
              {article.image != "default.png" && <img src={Global.url+ "image/"+ article.image} alt="" />}

              {article.image == "default.png" && <img src={Global.url+ "image/default.png"} alt="" />}
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
  );
}
