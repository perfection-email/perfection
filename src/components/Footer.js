import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: url('/assets/images/bg-projects-page.png');
  background-size: fit;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  padding: 60px 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    pointer-events: none;
    z-index: 1;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LocationSection = styled.div`
  margin-bottom: 25px;
`;

const LocationTitle = styled.h3`
  color: #ff6b35;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 15px;
  letter-spacing: 1px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PhoneNumber = styled.a`
  color: #cccccc;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ff6b35;
  }
`;

const EmailAddress = styled.a`
  color: #cccccc;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  margin-top: 10px;
  
  &:hover {
    color: #ff6b35;
  }
`;

const CenterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const LogoContainer = styled.div`
  background: white;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    padding: 12px;
  }
`;

const Logo = styled.img`
  width: 70px;
  height: auto;
  border-radius: 100%;
  background-color: #1a1a1a;
`;

const CompanyName = styled.div`
  text-align: center;
  margin-top: 0;
`;

const CompanyTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 5px;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CompanySubtitle = styled.p`
  font-size: 0.9rem;
  color: #cccccc;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const TaglineSection = styled.div`
  text-align: right;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TaglinePrimary = styled.h3`
  color: #ff6b35;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 5px;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const TaglineSecondary = styled.p`
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 5px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TaglineTertiary = styled.p`
  color: #cccccc;
  font-size: 1rem;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ff6b35;
    transform: scale(1.2);
  }
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LeftSection>
          <LocationSection>
            <LocationTitle>Riyadh | Jeddah | Egypt</LocationTitle>
            <ContactInfo>
              <PhoneNumber href="tel:+966599612805">+966 59 961 2805</PhoneNumber>
              <PhoneNumber href="tel:+966598391060">+966 59 839 1060</PhoneNumber>
              <EmailAddress href="mailto:contact@perfection.marketing">contact@perfection.marketing</EmailAddress>
            </ContactInfo>
          </LocationSection>
        </LeftSection>

        <CenterSection>
            <Logo src="/assets/images/perfection-logo.png" alt="Perfection Logo" />
          <CompanyName>
            <CompanyTitle>PERFECTION</CompanyTitle>
            <CompanySubtitle>FOR ADVERTISING</CompanySubtitle>
          </CompanyName>
        </CenterSection>

        <RightSection>
          <TaglineSection>
            <TaglinePrimary>Creative minds.</TaglinePrimary>
            <TaglineSecondary>Sharp execution.</TaglineSecondary>
            <TaglineTertiary>We've got it handled.</TaglineTertiary>
          </TaglineSection>
          <SocialIcons>
            <SocialIcon href="#" aria-label="Instagram">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="#" aria-label="TikTok">
              <FaTiktok />
            </SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIcon>
          </SocialIcons>
        </RightSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 