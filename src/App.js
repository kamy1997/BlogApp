
import {  Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import Blog from './pages/blog';
import Vidéo from './pages/video';
import React from 'react';


 import "./App.css";

 
const App = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/video/:id' element={<Vidéo />} />
      </Routes>
    </div>
  );
};

export default App;

