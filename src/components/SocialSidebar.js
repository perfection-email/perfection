import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaTiktok, FaInstagram, FaLinkedin, FaFacebook, FaShareAlt, FaTimes } from 'react-icons/fa';

const SocialSidebarContainer = styled.div`
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  @media (max-width: 992px) {
    top: auto;
    right: 20px;
    bottom: 20px;
    transform: none;
    gap: 15px;
  }
  
  @media (max-width: 480px) {
    right: 15px;
    bottom: 15px;
    gap: 12px;
  }
`;

const SocialIconsDesktop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media (max-width: 992px) {
    display: none;
  }
`;

const FollowTextDesktop = styled.div`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  color: white;
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  font-family: 'Poppins', sans-serif;
  
  @media (max-width: 992px) {
    display: none;
  }
`;

const MobileToggle = styled.button`
  display: none;
  background: #ff6b35;
  color: white;
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  font-size: 1.2rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  @media (max-width: 992px) {
    display: flex;
  }
  
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }
  
  &:hover {
    transform: scale(1.05);
    background: #e55a2b;
  }
`;

const MobilePopup = styled.div`
  position: fixed;
  bottom: ${props => props.isOpen ? '80px' : '-200px'};
  right: 15px;
  background: rgba(20, 20, 20, 0.9);
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  opacity: ${props => props.isOpen ? '1' : '0'};
  z-index: 999;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  
  @media (min-width: 993px) {
    display: none;
  }
`;

const MobilePopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;

const FollowTextMobile = styled.div`
  color: white;
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  font-family: 'Poppins', sans-serif;
`;

const CloseButton = styled.button`
  background: transparent;
  color: white;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialIconsMobile = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.3rem;
  transition: all 0.3s ease;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  &:hover {
    color: #ff6b35;
    transform: scale(1.2);
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const SocialSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Close popup on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);
  
  return (
    <>
      <SocialSidebarContainer>
        <SocialIconsDesktop>
          <SocialIcon href="#" aria-label="TikTok">
            <FaTiktok />
          </SocialIcon>
          <SocialIcon href="#" aria-label="Instagram">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="#" aria-label="LinkedIn">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href="#" aria-label="Facebook">
            <FaFacebook />
          </SocialIcon>
        </SocialIconsDesktop>
        <FollowTextDesktop>Follow Us</FollowTextDesktop>
        
        <MobileToggle onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaShareAlt />}
        </MobileToggle>
      </SocialSidebarContainer>
      
      <MobilePopup isOpen={isOpen}>
        <MobilePopupHeader>
          <FollowTextMobile>Follow Us</FollowTextMobile>
          <CloseButton onClick={() => setIsOpen(false)}>
            <FaTimes />
          </CloseButton>
        </MobilePopupHeader>
        <SocialIconsMobile>
          <SocialIcon href="#" aria-label="TikTok">
            <FaTiktok />
          </SocialIcon>
          <SocialIcon href="#" aria-label="Instagram">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="#" aria-label="LinkedIn">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href="#" aria-label="Facebook">
            <FaFacebook />
          </SocialIcon>
        </SocialIconsMobile>
      </MobilePopup>
    </>
  );
};

export default SocialSidebar; 