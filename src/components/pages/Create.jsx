import React from 'react';
import { useState } from 'react';
import UseForm from '../../hooks/useForm'

export const Create = () => {

  const {form, sent, changed} = UseForm({});

  const saveArticle = (e) => {
    e.preventDefault();
    let newArticle = JSON.stringify(form);
    console.log(newArticle);
  }


  return (
    <div className='jumbo'>
      <h1>Create Article</h1>
      <p>Form</p>
      <pre>{JSON.stringify(form)}</pre>

      <form action="" className='form' onSubmit={saveArticle}>
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

