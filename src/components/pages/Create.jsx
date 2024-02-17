import React from 'react';
import { useState } from 'react';
import {useForm} from '../../hooks/useForm'
import {Petition} from '../../helpers/Petition';
import {Global} from '../../helpers/Global';


export const Create = () => {

  const {form, sent, changed} = useForm({});
  const [result, setResult] = useState("notsend");

  const saveArticle =  async (e) => {
    e.preventDefault();

    let newArticle = form;

    let {data, loading} = await Petition(`${Global.url}create`, "POST", newArticle);

    if(data.status == "success"){
      setResult("saved");
    }else{
      setResult("error");
    }

    const fileInput = document.querySelector('#image');
   
    if(data.status == "success" && fileInput.files[0] != undefined){
      setResult("saved");
        
        const formData = new FormData();
        formData.append('image', fileInput.files[0]);

        console.log(formData);
        let upload = await Petition(`${Global.url}upload/${data.article._id}`, "POST", formData, true);

        console.log(upload.data);

        if(upload.data.status == "success"){
          setResult("saved");
        }else{
          setResult("error");
        }

    }

    
  }


  return (
    <div className='jumbo'>
      <h1>Create Article</h1>
      <p>Form</p>
      <pre>{JSON.stringify(form)}</pre>
      <strong>{
        result && result == "saved" ? "article saved successfully." : ""
      }</strong>

      <strong>
        {
          result && result == "error" ? "Error saving article." : ""
        }
      </strong>


      <form action="post" className='form' onSubmit={saveArticle}>
        <div className='formGroup'>
          <label htmlFor="title">Title</label>
          <input type="text" name='title' onChange={changed}/>
        </div>
        <div className='formGroup'>
          <label htmlFor="content">Content</label>
          <textarea type="text" name='content' onChange={changed}/>
        </div>
        <div className='formGroup'>
          <label htmlFor="image">Image</label>
          <input type="file" name="image" id="image" />
        </div>

        <input type="submit" value="send" />
        
      </form>
    </div>
  );
};

