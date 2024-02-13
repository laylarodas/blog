import React from 'react';
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Articles } from "../components/pages/Articles";
import { Create } from "../components/pages/Create";
import { Header } from '../components/layout/Header';
import {Nav} from '../components/layout/Nav';
import {Sidebar} from '../components/layout/Sidebar';
import {Footer} from '../components/layout/Footer';

const RoutesApp = () => {
  return (
    <BrowserRouter>

       {/* LAYOUT */}
       <Header/>
       <Nav />
       {/* CONTENIDO */}
       <section className='content'>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/articles' element={<Articles />}/>
            <Route path='/create' element={<Create />}/>
        </Routes>
       </section>

       <Sidebar />
       <Footer/>
    </BrowserRouter>
  );
}


export default RoutesApp;
