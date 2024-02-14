import React from 'react';

export const List = ({articles,setArticles}) => {
  return (
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
  );
}
