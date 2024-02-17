import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {

  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    let mySearch = e.target.search.value;
    navigate(`/search/${mySearch}`, { replace: true })
  }

  return (
    <aside className='lateral'>
      <div className='search'>
        <h3 className='title'>Search</h3>
        <form action="" onSubmit={handleSearch}>
          <input type="text" id="searchField" name='search'/>
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
