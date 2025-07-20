import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';
import OurServices from './components/OurServices';
import OurWorks from './components/OurWorks';
import Projects from './components/Projects';
import Factory from './components/Factory';
import AboutUs from './components/AboutUs';
import Exhibitions from './components/Exhibitions';
import Technology from './components/Technology';
import Events from './components/Events';
import DisplaySystems from './components/DisplaySystems';
import Environments from './components/Environments';
import ImmersiveExperiences from './components/ImmersiveExperiences';
import ContactUs from './components/ContactUs';
// import Quote from './components/Quote';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  overflow-x: hidden;
`;

const LoadingScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.5s ease-out;
  opacity: ${props => props.isLoading ? 1 : 0};
  visibility: ${props => props.isLoading ? 'visible' : 'hidden'};
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
`;

// Page components with and without footer
const PageWithFooter = ({ Component }) => (
  <>
    <Component />
    <Footer />
  </>
);

const PageWithoutFooter = ({ Component }) => (
  <>
    <Component />
  </>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <LoadingScreen isLoading={loading}>
        <LogoContainer>
          <Logo src="/assets/images/perfection-logo.png" alt="Perfection Logo" />
        </LogoContainer>
      </LoadingScreen>
      <AppContainer>
        <Header />
        <Routes>
          {/* Home route without footer */}
          <Route path="/" element={<PageWithoutFooter Component={Home} />} />
          
          {/* All other routes with footer */}
          <Route path="/our-services" element={<PageWithFooter Component={OurServices} />} />
          <Route path="/our-works" element={<PageWithFooter Component={OurWorks} />} />
          <Route path="/projects" element={<PageWithFooter Component={Projects} />} />
          <Route path="/factory" element={<PageWithFooter Component={Factory} />} />
          <Route path="/about" element={<PageWithFooter Component={AboutUs} />} />
          <Route path="/exhibitions" element={<PageWithFooter Component={Exhibitions} />} />
          <Route path="/technology" element={<PageWithFooter Component={Technology} />} />
          <Route path="/events" element={<PageWithFooter Component={Events} />} />
          <Route path="/display-systems" element={<PageWithFooter Component={DisplaySystems} />} />
          <Route path="/environments" element={<PageWithFooter Component={Environments} />} />
          <Route path="/immersive-experiences" element={<PageWithFooter Component={ImmersiveExperiences} />} />
          <Route path="/contact" element={<PageWithFooter Component={ContactUs} />} />
          {/* <Route path="/get-quote" element={<PageWithFooter Component={Quote} />} /> */}
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
