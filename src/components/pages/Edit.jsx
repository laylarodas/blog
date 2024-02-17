import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from '../../hooks/useForm'
import { Petition } from '../../helpers/Petition';
import { Global } from '../../helpers/Global';
import { useParams } from 'react-router-dom';


export const Edit = () => {

  const { form, sent, changed } = useForm({});
  const [result, setResult] = useState("notsend");
  const [article, setArticle] = useState([]);
  const params = useParams();

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {

    const url = Global.url + 'article/' + params.id;

    console.log(url);
    const { data } = await Petition(url, "GET");

    if (data.status === "success") {
      setArticle(data.article);
    }
  }

  const editArticle = async (e) => {
    e.preventDefault();

    let newArticle = form;

    let { data, loading } = await Petition(`${Global.url}article/${params.id}`, "PUT", newArticle);

    if (data.status == "success") {
      setResult("saved");
    } else {
      setResult("error");
    }

    const fileInput = document.querySelector('#image');

    if (data.status == "success" && fileInput.files[0] != undefined) {
      setResult("saved");

      const formData = new FormData();
      formData.append('image', fileInput.files[0]);

      console.log(formData);
      let upload = await Petition(`${Global.url}upload/${data.article._id}`, "POST", formData, true);

      console.log(upload.data);

      if (upload.data.status == "success") {
        setResult("saved");
      } else {
        setResult("error");
      }

    }


  }


  return (
    <div className='jumbo'>
      <h1>Edit Article</h1>
      <p>Editing form: {article.title}</p>
      <pre>{JSON.stringify(form)}</pre>
      <strong>{
        result && result == "saved" ? "article saved successfully." : ""
      }</strong>

      <strong>
        {
          result && result == "error" ? "Error saving article." : ""
        }
      </strong>


      <form action="post" className='form' onSubmit={editArticle}>
        <div className='formGroup'>
          <label htmlFor="title">Title</label>
          <input type="text" name='title' onChange={changed} defaultValue={article.title} />
        </div>
        <div className='formGroup'>
          <label htmlFor="content">Content</label>
          <textarea type="text" name='content' onChange={changed} defaultValue={article.content} />
        </div>
        <div className='formGroup'>
          <div className='mask'>
            {article.image != "default.png" && <img src={Global.url + "image/" + article.image} alt="" />}

            {article.image == "default.png" && <img src={Global.url + "image/default.png"} alt="" />}
          </div>
          <label htmlFor="image">Image</label>
          <input type="file" name="image" id="image" />
        </div>

        <input type="submit" value="send" />

      </form>
    </div>
  );
};

