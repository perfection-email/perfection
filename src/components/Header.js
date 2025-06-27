import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background: #1a1a1a;
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const TopBar = styled.div`
  background: #000;
  padding: 10px 0;
  font-size: 14px;
`;

const TopBarContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px;
    text-align: center;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MainNav = styled.nav`
  padding: 15px 0;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 28px;
  font-weight: bold;
  color: white;
  letter-spacing: 1px;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 30px;

  @media (max-width: 768px) {
    position: fixed;
    top: 120px;
    left: 0;
    width: 100%;
    background: #1a1a1a;
    flex-direction: column;
    padding: 20px 0;
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease;
  }
`;

const NavItem = styled.li`
  position: relative;
  
  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    gap: 5px;
    
    &:hover {
      color: #ffa500;
    }

    &.active {
      color: #ffa500;
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 10px 0;
  }
`;

const ServicesNavItem = styled(NavItem)`
  &:hover > div {
    opacity: 1;
    visibility: visible;
    transform: translateY(10px);
  }

  @media (max-width: 768px) {
    &:hover > div {
      display: block;
    }
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  width: 220px;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.isOpen ? '10px' : '0'});
  transition: all 0.3s ease;
  z-index: 1000;
  overflow: hidden;

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    box-shadow: none;
    margin-top: 10px;
    display: ${props => props.isOpen ? 'block' : 'none'};
    transform: none;
  }
`;

const DropdownItem = styled.div`
  padding: 15px 20px;
  color: #333;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  border-bottom: 1px solid #f1f1f1;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #f8f8f8;
    color: #ffa500;
  }

  @media (max-width: 768px) {
    background: #2a2a2a;
    color: white;
    border-bottom: 1px solid #3a3a3a;

    &:hover {
      background: #3a3a3a;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const QuoteButton = styled(Link)`
  background: #ffa500;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;

  &:hover {
    background: #e69500;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const MobileMenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const serviceCategories = [
    { name: "Exhibitions", path: "/exhibitions" },
    { name: "Technology", path: "/technology" },
    { name: "Events", path: "/events" },
    { name: "Environments", path: "/environments" },
    { name: "Immersive Experiences", path: "/immersive-experiences" },
    { name: "Display Systems", path: "/display-systems" }
  ];

  return (
    <HeaderContainer>
      <TopBar>
        <TopBarContent>
          <ContactInfo>
            <ContactItem>
              <FaPhone />
              <span>+966 555037548</span>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <span>info@perfection.com</span>
            </ContactItem>
          </ContactInfo>
          <div>
            <QuoteButton to="/get-quote">Get Quote</QuoteButton>
          </div>
        </TopBarContent>
      </TopBar>
      
      <MainNav>
        <NavContent>
          <Logo to="/">
            PERFECTION
          </Logo>
          
          <NavMenu isOpen={mobileMenuOpen}>
            <NavItem><Link to="/">Home</Link></NavItem>
            <ServicesNavItem>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                toggleServicesDropdown();
              }}>
                Our Services <FaChevronDown />
              </a>
              <DropdownMenu isOpen={servicesDropdownOpen}>
                {serviceCategories.map((category, index) => (
                  <DropdownItem key={index}>
                    <Link to={category.path}>{category.name}</Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </ServicesNavItem>
            <NavItem><Link to="/our-works">Our works</Link></NavItem>
            <NavItem><Link to="/factory">Factory</Link></NavItem>
            <NavItem><Link to="/about">About Us</Link></NavItem>
            <NavItem><Link to="/get-quote">Contact us</Link></NavItem>
          </NavMenu>
          
          <MobileMenuToggle onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuToggle>
        </NavContent>
      </MainNav>
    </HeaderContainer>
  );
};

export default Header; 