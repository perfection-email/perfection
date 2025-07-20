import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import SocialSidebar from './SocialSidebar';

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromLeftDelay = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  30% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(-80px);
    opacity: 1;
  }
`;

const mobileSlideIn = keyframes`
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const AboutUsContainer = styled.div`
  color: white;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  width: 100vw;
  background: url('/assets/images/bg-page.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  @media (max-width: 768px) {
    background-position: center top;
  }
`;

const OrangeGlow = styled.div`
  position: absolute;
  width: 100%;
  height: 60%;
  background: radial-gradient(ellipse at top center, 
    rgba(255, 140, 60, 0.3) 0%, 
    rgba(255, 107, 53, 0.2) 30%,
    rgba(255, 107, 53, 0.1) 50%,
    rgba(255, 107, 53, 0) 70%);
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
  
  @media (max-width: 768px) {
    height: 40%;
    background: radial-gradient(ellipse at top center, 
      rgba(255, 140, 60, 0.2) 0%, 
      rgba(255, 107, 53, 0.15) 30%,
      rgba(255, 107, 53, 0.05) 50%,
      rgba(255, 107, 53, 0) 70%);
  }
`;

const HeaderSection = styled.div`
  padding: 30vh 0 30px;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 120px;
  padding-right: 120px;
  
  @media (max-width: 992px) {
    flex-direction: column;
    padding: 25vh 60px 30px;
  }
  
  @media (max-width: 768px) {
    padding: 20vh 20px 30px;
    align-items: center;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    padding: 15vh 15px 25px;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 9rem;
  font-weight: 300;
  margin-bottom: 0;
  line-height: 0.9;
  width: 45%;
  margin-right: 5%;
  position: relative;
  animation: ${slideInFromLeft} 1s ease-out forwards;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 20px;
    width: 180px;
    height: 3px;
    background-color: #ff6b35;
  }
  
  @media (max-width: 992px) {
    font-size: 5rem;
    width: 100%;
    margin-bottom: 40px;
    margin-right: 0;
    
    &::after {
      right: auto;
      left: 0;
      bottom: -20px;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 4rem;
    margin-bottom: 30px;
    animation: ${mobileSlideIn} 1s ease-out forwards;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
      bottom: -15px;
      width: 120px;
      height: 2px;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 3.5rem;
    margin-bottom: 25px;
    
    &::after {
      width: 100px;
    }
  }
  
  @media (max-width: 360px) {
    font-size: 2.8rem;
    margin-bottom: 20px;
    
    &::after {
      width: 80px;
    }
  }
`;

const AboutContent = styled.div`
  padding-top: 220px;
  max-width: none;
  width: 50%;
  transform: translateX(-80px);
  animation: ${slideInFromLeftDelay} 1.5s ease-out forwards;
  
  @media (max-width: 992px) {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
    padding-top: 0;
    transform: translateX(0);
    animation: ${slideInFromLeft} 1s ease-out 0.5s forwards;
    opacity: 0;
  }
  
  @media (max-width: 768px) {
    animation: ${mobileSlideIn} 1s ease-out 0.3s forwards;
    text-align: center;
    max-width: 90%;
    margin: 0 auto;
  }
  
  @media (max-width: 480px) {
    max-width: 95%;
  }
`;

const AboutParagraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 30px;
  font-weight: 300;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 18px;
  }
  
  @media (max-width: 360px) {
    font-size: 0.9rem;
    margin-bottom: 15px;
  }
`;

const LetsTalkButton = styled.div`
  position: fixed;
  left: 30px;
  bottom: 30px;
  z-index: 1000;

  @media (max-width: 768px) {
    left: 20px;
    bottom: 20px;
  }
  
  @media (max-width: 480px) {
    left: 15px;
    bottom: 15px;
  }
`;

const LetsTalkLink = styled(Link)`
  background: transparent;
  color: #ff6b35;
  border: 2px solid white;
  padding: 20px 15px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  display: block;
  text-align: center;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  border-radius: 0;
  font-family: 'Poppins', sans-serif;

  &:hover {
    background: rgba(255, 107, 53, 0.1);
    border-color: #ff6b35;
    transform: rotate(180deg) scale(1.05);
  }

  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    text-orientation: initial;
    transform: none;
    padding: 12px 20px;
    border-radius: 5px;
    font-size: 0.8rem;
    letter-spacing: 1px;
    
    &:hover {
      transform: scale(1.05);
    }
  }
  
  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 0.75rem;
  }
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <OrangeGlow />
      
      <HeaderSection>
        <HeaderTitle>
          About<br />Us
        </HeaderTitle>
        <AboutContent>
          <AboutParagraph>
            We launched with innovative marketing solutions, successfully transforming every brand into an unforgettable experience.
          </AboutParagraph>
          <AboutParagraph>
            We design unique booths and events, delivering tailored solutions that help each client shine among the industry's elite.
          </AboutParagraph>
        </AboutContent>
      </HeaderSection>
      
      <LetsTalkButton>
        <LetsTalkLink to="/get-quote">
          Let's Talk
        </LetsTalkLink>
      </LetsTalkButton>

      <SocialSidebar />
    </AboutUsContainer>
  );
};

export default AboutUs; 