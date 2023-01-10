import React from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import SeeAllCitiesPage from './pages/SeeAllCitiesPage';
import CityDetailsPage from './pages/CityDetailsPage';
import Footer from './components/Footer';
import 'typeface-epilogue';
import HomeDetailPage from './pages/HomeDetailPage';
import Booking from './components/Booking';





function App() {



  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="seeallcities" element={<SeeAllCitiesPage />} />
        <Route path="citydetails/:cityId" element={<CityDetailsPage />} />
        <Route path="homedetails/:propertyId" element={<HomeDetailPage />} />
        <Route path="booking" element={<Booking />} />
      </Routes >
      <Footer />
    </BrowserRouter >
  );

}
export default App;

