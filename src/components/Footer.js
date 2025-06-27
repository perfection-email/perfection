import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import TrustedCompanies from './TrustedCompanies';

const FooterContainer = styled.footer`
  background: #1a1a1a;
  color: white;
  padding: 0 0 30px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 50px;
  margin-bottom: 50px;
  padding-top: 50px;
`;

const FooterSection = styled.div``;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 25px;
  color: #ffa500;
`;

const Logo = styled.div`
  margin-bottom: 20px;
`;

const LogoImage = styled.img`
  height: 50px;
  width: auto;
`;

const Description = styled.p`
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
  color: #cccccc;
`;

const ContactIcon = styled.div`
  color: #ffa500;
  font-size: 1.1rem;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 12px;
  
  a {
    color: #cccccc;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #ffa500;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  color: #cccccc;
  font-size: 1.3rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ffa500;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #333;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.div`
  color: #999;
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 30px;
  
  a {
    color: #999;
    text-decoration: none;
    font-size: 0.9rem;
    
    &:hover {
      color: #ffa500;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <TrustedCompanies />
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <Logo>
              <LogoImage src="/assets/images/perfection-logo.png" alt="Perfection Logo" />
            </Logo>
            <Description>
              Beyond execution, we turn ideas into impact. We handle exhibition design, 
              events, campaigns, and branding with precision and creativity.
            </Description>
            <SocialLinks>
              <SocialLink href="#"><FaFacebook /></SocialLink>
              <SocialLink href="#"><FaTwitter /></SocialLink>
              <SocialLink href="#"><FaLinkedin /></SocialLink>
              <SocialLink href="#"><FaInstagram /></SocialLink>
            </SocialLinks>
          </FooterSection>
          
          <FooterSection>
            <SectionTitle>Quick Links</SectionTitle>
            <FooterLinks>
              <FooterLink><a href="#home">Home</a></FooterLink>
              <FooterLink><a href="#services">Our Services</a></FooterLink>
              <FooterLink><a href="#portfolio">Our Works</a></FooterLink>
              <FooterLink><a href="#about">About Us</a></FooterLink>
              <FooterLink><a href="#contact">Contact Us</a></FooterLink>
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <SectionTitle>Services</SectionTitle>
            <FooterLinks>
              <FooterLink><a href="#services">Exhibitions</a></FooterLink>
              <FooterLink><a href="#services">Events</a></FooterLink>
              <FooterLink><a href="#services">Branding Spaces</a></FooterLink>
              <FooterLink><a href="#services">Technology</a></FooterLink>
              <FooterLink><a href="#services">Immersive Experiences</a></FooterLink>
              <FooterLink><a href="#services">Display Solutions</a></FooterLink>
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <SectionTitle>Get In Touch</SectionTitle>
            <ContactItem>
              <ContactIcon><FaMapMarkerAlt /></ContactIcon>
              <span>123 Business District, New York, NY 10001</span>
            </ContactItem>
            <ContactItem>
              <ContactIcon><FaEnvelope /></ContactIcon>
              <span>info@perfection.com</span>
            </ContactItem>
            <ContactItem>
              <ContactIcon><FaPhone /></ContactIcon>
              <span>+1 (555) 123-4567</span>
            </ContactItem>
          </FooterSection>
        </FooterGrid>
        
        <FooterBottom>
          <Copyright>
            Perfection All rights reserved 2025 ©
          </Copyright>
          <BottomLinks>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">FAQ</a>
          </BottomLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 