import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTiktok, FaInstagram, FaLinkedin } from 'react-icons/fa';
import SocialSidebar from './SocialSidebar';

const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    min-height: 100vh;
    padding: 0 15px;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background: linear-gradient(45deg, 
  //   rgba(139, 69, 19, 0.7) 0%, 
  //   rgba(160, 82, 45, 0.6) 25%, 
  //   rgba(205, 133, 63, 0.5) 50%, 
  //   rgba(222, 184, 135, 0.4) 75%, 
  //   rgba(245, 222, 179, 0.3) 100%
  // );
  z-index: -1;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/assets/images/bg-page.png');
    background-size: cover;
    background-position: center;
    opacity: 0.9;
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  z-index: 1;
  max-width: 1200px;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
    max-width: 100%;
    margin-top: -50px;
  }
  
  @media (max-width: 480px) {
    padding: 0 15px;
    margin-top: -30px;
  }
`;

const MainHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 300;
  margin-bottom: 40px;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    white-space: normal;
    margin-bottom: 30px;
    line-height: 1.2;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 25px;
    line-height: 1.3;
  }
  
  @media (max-width: 360px) {
    font-size: 1.6rem;
    margin-bottom: 20px;
  }
`;

const Highlight = styled.span`
  font-weight: 700;
`;

const OrangeDivider = styled.div`
  width: 4px;
  height: 80px;
  background: #ff6b35;
  margin: 0 auto 40px;
  border-radius: 2px;
  
  @media (max-width: 768px) {
    height: 60px;
    width: 3px;
    margin: 0 auto 25px;
  }
  
  @media (max-width: 480px) {
    height: 50px;
    margin: 0 auto 20px;
  }
`;

const SubHeading = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 0;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.4;
    max-width: 90%;
    margin: 0 auto;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
    max-width: 95%;
  }
`;

const CreativeText = styled.span`
  color: #ff6b35;
  font-weight: 400;
`;

const SharpText = styled.span`
  font-weight: 700;
`;

const FollowText = styled.div`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  color: white;
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  font-family: 'Poppins', sans-serif;
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

const Hero = () => {
  return (
    <HeroContainer id="home">
      <VideoBackground autoPlay muted loop playsInline>
        <source src="/assets/videos/bg.mp4" type="video/quicktime" />
        <source src="/assets/videos/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <VideoOverlay />
      
      <HeroContent>
        <MainHeading>
          Beyond execution we turn <Highlight>ideas into impact</Highlight>
        </MainHeading>
        <OrangeDivider />
        <SubHeading>
          <CreativeText>Creative minds.</CreativeText> <SharpText>Sharp execution.</SharpText> We've got it handled.
        </SubHeading>
      </HeroContent>

      <LetsTalkButton>
        <LetsTalkLink to="/get-quote">
          Let's Talk
        </LetsTalkLink>
      </LetsTalkButton>

      <SocialSidebar />
    </HeroContainer>
  );
};

export default Hero; 