import React from 'react';

export const Sidebar = () => {
  return (
    <aside className='lateral'>
      <div className='search'>
        <h3 className='title'>Search</h3>
        <form action="">
          <input type="text" id="searchField" name='search' autoComplete='off' />
          <button>Submit</button>
        </form>
      </div>
      {/**<div className='add'>

        <h3>Title</h3>

        <form action="" >
          <input type="text"
            id='title'
            name='title'
            placeholder='Title' />

          <textarea name="description" id="description" cols="30" rows="10" placeholder='description'></textarea>

          <input type="submit" value="save" />
        </form>
      </div> */}
    </aside>
  );
};
