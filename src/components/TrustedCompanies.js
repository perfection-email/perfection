import React from 'react';
import styled from 'styled-components';

const TrustedContainer = styled.section`
  padding: 80px 0;
  background-color: #fff;
  text-align: center;
`;

const TrustedContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const TrustedTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const TrustedLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  align-items: center;
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