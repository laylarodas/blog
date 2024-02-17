import React from 'react';
import {Global} from '../../helpers/Global';
import { Petition } from '../../helpers/Petition';
import {Link} from 'react-router-dom';


export const List = ({articles,setArticles}) => {

  const deleteArticle = async (id, setArticles) => {
    
    let {data} = await Petition(`${Global.url}article/${id}`, "DELETE");

    if(data.status == "success"){
      const updatedArticles = articles.filter(article => article._id !== id);
      setArticles(updatedArticles);
    }
  }


  return (
    articles.map((article) => {
        return (
          <article key={article.id} className='articleItem'>
            <div className='mask'>
              {article.image != "default.png" && <img src={Global.url+ "image/"+ article.image} alt="" />}

              {article.image == "default.png" && <img src={Global.url+ "image/default.png"} alt="" />}
            </div>
            <div className='info'>
              <h3 className='title'><Link to={`/detail/${article._id}`}>{article.title}</Link></h3>
              <p className='description'>{article.content}</p>

              <button className='edit'>Edit</button>
              <button className='delete' onClick={() => {
                deleteArticle(article._id, setArticles)
              }}>Delete</button>
            </div>
          </article>
        )
      })
  );
}
