import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Aboutus from './components/Aboutus';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>
    </div>
  );
};

export default App;