import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SocialSidebar from './SocialSidebar';

const ContactUsContainer = styled.div`
  background-color: #121212;
  color: white;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
`;

const HeaderSection = styled.div`
  padding: 180px 0 80px;
  text-align: center;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 120px 0 60px;
  }
  
  @media (max-width: 480px) {
    padding: 100px 0 40px;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 20px;
  line-height: 1.2;
  
  .orange-text {
    color: #ff6b35;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 12px;
  }
  
  @media (max-width: 360px) {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }
`;

const HeaderSubtitle = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 60px;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
  
  @media (max-width: 360px) {
    font-size: 1.8rem;
    margin-bottom: 25px;
  }
`;

const Divider = styled.hr`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto 80px;
  border: none;
  border-top: 1px solid #ff6b35;
  
  @media (max-width: 768px) {
    width: 85%;
    margin: 0 auto 60px;
  }
  
  @media (max-width: 480px) {
    width: 80%;
    margin: 0 auto 40px;
  }
`;

const LocationsSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  margin-bottom: 80px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 60px;
  }
  
  @media (max-width: 768px) {
    padding: 0 15px;
    gap: 30px;
    margin-bottom: 50px;
  }
  
  @media (max-width: 480px) {
    padding: 0 10px;
    gap: 25px;
    margin-bottom: 40px;
  }
`;

const LocationCard = styled.div`
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 20px;
    border: 1px solid rgba(255, 107, 53, 0.2);
    border-radius: 12px;
    background: rgba(255, 107, 53, 0.05);
    transition: all 0.3s ease;
    
    &:hover {
      border-color: rgba(255, 107, 53, 0.4);
      background: rgba(255, 107, 53, 0.1);
      transform: translateY(-5px);
    }
  }
  
  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const LocationTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 20px;
  color: #ff6b35;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 12px;
  }
`;

const LocationAddress = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  line-height: 1.6;
  color: #ff6b35;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 15px;
    line-height: 1.5;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 12px;
  }
`;

const LocationPhone = styled.div`
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const PhoneNumber = styled.a`
  color: #ff6b35;
  text-decoration: none;
  font-size: 1rem;
  margin: 0 10px;
  transition: all 0.3s ease;
  
  &:hover {
    text-decoration: underline;
    color: white;
  }
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin: 0 5px;
    display: block;
    margin-bottom: 8px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 6px;
  }
`;

const MapContainer = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #ff6b35;
  margin: 0 auto;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    border-color: white;
  }
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
    filter: grayscale(100%) invert(92%) contrast(83%);
  }
  
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    border-width: 2px;
  }
  
  @media (max-width: 480px) {
    width: 180px;
    height: 180px;
  }
  
  @media (max-width: 360px) {
    width: 150px;
    height: 150px;
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
  font-family: 'Inter', sans-serif;

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

const ContactButton = styled.button`
  background: transparent;
  color: #ff6b35;
  border: 2px solid #ff6b35;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
  
  &:hover {
    background: rgba(255, 107, 53, 0.1);
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.8rem;
  }
`;

const ContactUs = () => {
  return (
    <ContactUsContainer>
      <HeaderSection>
        <HeaderTitle>
          <span className="orange-text">Let's Bring</span>
        </HeaderTitle>
        <HeaderSubtitle>
          Your Ideas to Life
        </HeaderSubtitle>
        <Divider />
      </HeaderSection>
      
      <LocationsSection>
        <LocationCard>
          <LocationTitle>Riyadh</LocationTitle>
          <LocationAddress>
            846 Al Faisaliyyah, Riyadh Saudi Arabia
          </LocationAddress>
          <LocationPhone>
            <PhoneNumber href="tel:+966599612805">+966 59 961 2805</PhoneNumber>
            <PhoneNumber href="tel:+966598391060">+966 59 839 1060</PhoneNumber>
          </LocationPhone>
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.497150560089!2d46.7954925!3d24.6410104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f07d09721fa93%3A0x840100d1719f0b15!2zUkVGQTQxNDTYjCA0MTQ0INmI2KfYr9mKINin2YTZhdi52YTZgtiMIDc2NjUsIEFsIEZhaXNhbGl5eWFoLCBSaXlhZGggMTI4OTQsIFNhdWRpIEFyYWJpYQ!5e0!3m2!1sen!2s!4v1753983951666!5m2!1sen!2s"
              width="600"
              height="450"
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Riyadh Location"
            ></iframe>
          </MapContainer>
        </LocationCard>
        
        <LocationCard>
          <LocationTitle>Egypt</LocationTitle>
          <LocationAddress>
            68 foad street, Alexandria, egypt
          </LocationAddress>
          <LocationPhone>
          <PhoneNumber href="tel:+966599612805">+966 59 961 2805</PhoneNumber>
          </LocationPhone>
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.8987144292973!2d29.895976185590953!3d31.195821597019894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c3ec7712c72b%3A0xc959e0fad0ebea7b!2s68%20Fouad%2C%20Al%20Attarin%20Sharq%2C%20Al%20Attarin%2C%20Alexandria%20Governorate%205372013%2C%20Egypt!5e0!3m2!1sen!2s!4v1753984406847!5m2!1sen!2s"
              width="600"
              height="450"
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Egypt Location"
            ></iframe>
          </MapContainer>
        </LocationCard>
        
        <LocationCard>
          <LocationTitle>Jeddah</LocationTitle>
          <LocationAddress>
            JABA7431, 7431 Ibrahim an Nafis, 4859، حي البغدادية الشرقية
          </LocationAddress>
          <LocationPhone>
          <PhoneNumber href="tel:+966598391060">+966 59 839 1060</PhoneNumber>
          </LocationPhone>
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.210900990274!2d39.186341299999995!3d21.499457600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cfa812f75a2f%3A0x9611adc39a199b5c!2zSkFCQTc0MzEsIDc0MzEgSWJyYWhpbSBhbiBOYWZpcywgNDg1OdiMINit2Yog2KfZhNio2LrYr9in2K_ZitipINin2YTYtNix2YLZitip2IwgSmVkZGFoIDIyMjM1LCBTYXVkaSBBcmFiaWE!5e0!3m2!1sen!2s!4v1753984183919!5m2!1sen!2s"
              width="600"
              height="450"
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jeddah Location"
            ></iframe>
          </MapContainer>
        </LocationCard>
      </LocationsSection>
      
      <LetsTalkButton>
        <LetsTalkLink to="/get-quote">
          Let's Talk
        </LetsTalkLink>
      </LetsTalkButton>

      <SocialSidebar />
    </ContactUsContainer>
  );
};

export default ContactUs; 