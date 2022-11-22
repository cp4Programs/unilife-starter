import React, { useState } from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
