import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='jumbo'>
        <h2>Welcom to Blog React</h2>
        <p>Blog developed with MERN Stack(Mongo, Express, React and NodeJS)</p>
        <Link to="/articles" className='button'>See the articles</Link>
    </div>
  )
}
