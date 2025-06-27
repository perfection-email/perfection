import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';
import OurWorks from './components/OurWorks';
import Factory from './components/Factory';
import AboutUs from './components/AboutUs';
import Exhibitions from './components/Exhibitions';
import Technology from './components/Technology';
import Events from './components/Events';
import DisplaySystems from './components/DisplaySystems';
import Environments from './components/Environments';
import ImmersiveExperiences from './components/ImmersiveExperiences';
import Quote from './components/Quote';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  overflow-x: hidden;
`;

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-works" element={<OurWorks />} />
          <Route path="/factory" element={<Factory />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/events" element={<Events />} />
          <Route path="/display-systems" element={<DisplaySystems />} />
          <Route path="/environments" element={<Environments />} />
          <Route path="/immersive-experiences" element={<ImmersiveExperiences />} />
          <Route path="/get-quote" element={<Quote />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
