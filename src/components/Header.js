import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: ${props => props.scrolled ? 'rgba(30, 30, 30, 0.95)' : 'transparent'};
  transition: all 0.3s ease;
  padding: 20px 0;
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.3)' : 'none'};
`;

const HeaderContent = styled.div`
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  padding-left: 30px;
  
  @media (max-width: 768px) {
    padding-left: 20px;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
  margin-right: 10px;
`;

const NavContainer = styled.div`
  padding-right: 30px;
  
  @media (max-width: 768px) {
    padding-right: 20px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.95);
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease;
    padding: 0;
  }
`;

const NavLink = styled(Link)`
  color: ${props => {
    // If on home page or about page, use white for non-active links
    if (props.isHomePage || props.isAboutPage) {
      return props.isActive ? '#ff6b35' : 'white';
    }
    // Otherwise use orange with different opacity based on active state
    return props.isActive ? '#ff6b35' : 'rgba(255, 107, 53, 0.7)';
  }};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: #ff6b35;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const MobileMenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Check if on home page or about page
  const isHomePage = location.pathname === '/';
  const isAboutPage = location.pathname === '/about';

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <HeaderContainer scrolled={scrolled}>
      <HeaderContent>
        <LogoContainer>
          <Logo to="/">
            <LogoImage src="/assets/images/perfection-logo.png" alt="Perfection Logo" />
          </Logo>
        </LogoContainer>

        <NavContainer>
          <Nav isOpen={mobileMenuOpen}>
            <NavLink 
              to="/our-services" 
              onClick={() => setMobileMenuOpen(false)} 
              isActive={location.pathname === '/our-services'}
              isHomePage={isHomePage}
              isAboutPage={isAboutPage}
            >
              Our Services
            </NavLink>
            <NavLink 
              to="/projects" 
              onClick={() => setMobileMenuOpen(false)} 
              isActive={location.pathname === '/projects'}
              isHomePage={isHomePage}
              isAboutPage={isAboutPage}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/about" 
              onClick={() => setMobileMenuOpen(false)} 
              isActive={location.pathname === '/about'}
              isHomePage={isHomePage}
              isAboutPage={isAboutPage}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)} 
              isActive={location.pathname === '/contact'}
              isHomePage={isHomePage}
              isAboutPage={isAboutPage}
            >
              Contact Us
            </NavLink>
          </Nav>

          <MobileMenuToggle onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuToggle>
        </NavContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header; 