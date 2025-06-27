import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroContainer = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/assets/images/Header-bg.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  padding: 200px 0 100px;
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const MainHeading = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 30px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Highlight = styled.span`
  color: #ffa500;
`;

const SubHeading = styled.p`
  font-size: 1.4rem;
  margin-bottom: 50px;
  color: #ffffff;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 40px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
  background: #ffa500;
  color: white;
  border: none;
  padding: 18px 35px;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background: #e69500;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 165, 0, 0.3);
  }

  @media (max-width: 480px) {
    padding: 15px 30px;
    font-size: 1rem;
  }
`;

const SecondaryButton = styled(Link)`
  background: transparent;
  color: white;
  border: 2px solid #ffa500;
  padding: 18px 35px;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background: #ffa500;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 165, 0, 0.3);
  }

  @media (max-width: 480px) {
    padding: 15px 30px;
    font-size: 1rem;
  }
`;

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <MainHeading>
          Beyond Execution We Turn Ideas Into <Highlight>Impact</Highlight>
        </MainHeading>
        <SubHeading>
          Exhibition design, events, campaigns, branding — we handle it all, with precision and creativity
        </SubHeading>
        <ButtonGroup>
          <PrimaryButton to="/get-quote">Contact Us</PrimaryButton>
          <SecondaryButton to="/get-quote">Request Quote</SecondaryButton>
        </ButtonGroup>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero; 