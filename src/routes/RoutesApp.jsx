import React from 'react';
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Articles } from "../components/pages/Articles";

const RoutesApp = () => {
  return (
    <BrowserRouter>

       {/* LAYOUT */}
       <section className='content'>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/articles' element={<Articles />}/>
        </Routes>
       </section>
    </BrowserRouter>
  );
}


export default RoutesApp;
