import React from 'react';
import styled from 'styled-components';

const TrustedContainer = styled.section`
  padding: 80px 0;
  background-color: #fff;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
  
  @media (max-width: 480px) {
    padding: 50px 0;
  }
`;

const TrustedContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 15px;
  }
  
  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

const TrustedTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 40px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 30px;
  }
  
  @media (max-width: 360px) {
    font-size: 1.4rem;
    margin-bottom: 25px;
  }
`;

const TrustedLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 25px;
  }
  
  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const TrustedLogo = styled.div`
  max-width: 150px;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: auto;
    filter: grayscale(70%);
    transition: filter 0.3s ease;
  }
  
  &:hover img {
    filter: grayscale(0%);
  }
  
  @media (max-width: 768px) {
    max-width: 120px;
    padding: 8px;
  }
  
  @media (max-width: 480px) {
    max-width: 100px;
    padding: 6px;
  }
  
  @media (max-width: 360px) {
    max-width: 80px;
    padding: 4px;
  }
`;

const TrustedCompanies = () => {
  return (
    <TrustedContainer>
      <TrustedContent>
        <TrustedTitle>Trusted by over 200+ companies worldwide</TrustedTitle>
        <TrustedLogos>
          <TrustedLogo>
            <img src="/assets/images/trusted-companies.png" alt="SABIC" />
          </TrustedLogo>
          <TrustedLogo>
            <img src="/assets/images/trusted-companies.png" alt="SDA" />
          </TrustedLogo>
          <TrustedLogo>
            <img src="/assets/images/trusted-companies.png" alt="Schneider Electric" />
          </TrustedLogo>
          <TrustedLogo>
            <img src="/assets/images/trusted-companies.png" alt="Saudi Authority" />
          </TrustedLogo>
          <TrustedLogo>
            <img src="/assets/images/trusted-companies.png" alt="Ministry of Tourism" />
          </TrustedLogo>
          <TrustedLogo>
            <img src="/assets/images/trusted-companies.png" alt="Ministry of Culture" />
          </TrustedLogo>
          <TrustedLogo>
            <img src="/assets/images/trusted-companies.png" alt="Alinma Bank" />
          </TrustedLogo>
        </TrustedLogos>
      </TrustedContent>
    </TrustedContainer>
  );
};

export default TrustedCompanies; 