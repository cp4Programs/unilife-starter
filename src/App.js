import React from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Homepage from './pages/Homepage';
import SeeAllCitiesPage from './pages/SeeAllCitiesPage';
import CityDetails from './pages/CityDetails';
import Footer from './components/Footer'
import 'typeface-epilogue'


function App() {



  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="seeallcities" element={<SeeAllCitiesPage />} />
        <Route path="citydetails" element={<CityDetails />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
