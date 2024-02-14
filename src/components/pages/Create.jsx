import React from 'react';

export const Create = () => {
  return (
    <div className='jumbo'>
      <h1>Create Article</h1>
      <p>Form</p>

      <form action="" className='form'>
        <div className='formGroup'>
          <label htmlFor="title">Title</label>
          <input type="text" name='title'/>
        </div>
        <div className='formGroup'>
          <label htmlFor="content">Content</label>
          <textarea type="text" name='content'/>
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

