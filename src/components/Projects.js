import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Animation keyframes
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInScale = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8) rotate(0deg);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1) rotate(${props => props.rotation || '0deg'});
  }
`;

const ProjectsContainer = styled.div`
  background: url('/assets/images/bg-projects-page.png');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  min-height: 100vh;
  color: white;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  padding: 120px 0 60px;
  
  @media (max-width: 768px) {
    padding: 100px 0 40px;
  }
  
  @media (max-width: 576px) {
    padding: 80px 0 30px;
  }
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  overflow: visible;
`;

const DiscoverText = styled.h2`
  color: #ff6b35;
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 30px;
  opacity: ${props => props.isVisible ? 1 : 0};
  animation: ${props => props.isVisible ? fadeInUp : 'none'} 0.8s ease-out;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

const ProjectsTitle = styled.h1`
  font-size: 20rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
  z-index: 2;
  
  @media (max-width: 1200px) {
    font-size: 15rem;
  }
  
  @media (max-width: 992px) {
    font-size: 10rem;
  }
  
  @media (max-width: 768px) {
    font-size: 6rem;
    margin-bottom: 30px;
  }
  
  @media (max-width: 576px) {
    font-size: 4rem;
    margin-bottom: 20px;
  }
`;

const OverlayImage = styled.div`
  position: absolute;
  width: 500px;
  height: 320px;
  background: url('${props => props.bgImage}');
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  opacity: ${props => props.isVisible ? 1 : 0};
  animation: ${props => props.isVisible ? slideInScale : 'none'} 0.8s ease-out forwards;
  animation-fill-mode: forwards;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${props => props.rotation || '0deg'});
  z-index: ${props => props.zIndex || 3};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 12px;
  }
  
  @media (max-width: 992px) {
    width: 400px;
    height: 250px;
  }
  
  @media (max-width: 768px) {
    width: 300px;
    height: 200px;
  }
  
  @media (max-width: 576px) {
    width: 250px;
    height: 160px;
  }
`;

const ProjectsDescription = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  max-width: 1000px;
  margin: 0 auto 80px;
  color: #cccccc;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 0 auto 60px;
    padding: 0 20px;
  }
`;

const ProjectSection = styled.section`
  margin-bottom: 100px;
  
  @media (max-width: 768px) {
    margin-bottom: 80px;
  }
`;

const ProjectHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const BolverLogo = styled.img`
  height: 60px;
  width: auto;
  filter: brightness(0) invert(1); /* Make logo white */
  
  @media (max-width: 992px) {
    height: 60px;
  }
  
  @media (max-width: 768px) {
    height: 40px;
  }
  
  @media (max-width: 576px) {
    height: 30px;
  }
`;

const ProjectGallery = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 576px) {
    padding: 0 15px;
  }
`;

const BolverGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 250px);
  gap: 20px;
  margin-bottom: 40px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 15px;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const EnvironmentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 250px);
  gap: 20px;
  margin-bottom: 40px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 15px;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const GalleryImage = styled.div`
  background: url('${props => props.bgImage}');
  background-size: cover;
  background-position: center;
  height: 100%;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  grid-column: ${props => props.column || 'auto'};
  grid-row: ${props => props.row || 'auto'};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: scale(1.02);
    
    &::before {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  
  @media (max-width: 992px) {
    grid-column: auto;
    grid-row: auto;
    height: 250px;
  }
  
  @media (max-width: 576px) {
    height: 200px;
  }
`;

const EnvironmentFundSection = styled.section`
  margin-bottom: 80px;
`;

const EnvironmentHeader = styled.div`
  text-align: center;
`;

const EnvironmentLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const EnvironmentLogo = styled.img`
  height: 300px;
  width: auto;
  filter: brightness(0) invert(1); /* Make logo white */
  
  @media (max-width: 992px) {
    height: 280px;
  }
  
  @media (max-width: 768px) {
    height: 250px;
  }
  
  @media (max-width: 576px) {
    height: 200px;
  }
`;

const Projects = () => {
  const [discoverVisible, setDiscoverVisible] = useState(false);
  const [overlayImage1Visible, setOverlayImage1Visible] = useState(false);
  const [overlayImage2Visible, setOverlayImage2Visible] = useState(false);
  const [overlayImage3Visible, setOverlayImage3Visible] = useState(false);

  useEffect(() => {
    // Show "Discover our" after 2 seconds
    const discoverTimer = setTimeout(() => {
      setDiscoverVisible(true);
    }, 2000);

    // Show overlay images at 3, 4, 5 seconds
    const overlay1Timer = setTimeout(() => {
      setOverlayImage1Visible(true);
    }, 3000);

    const overlay2Timer = setTimeout(() => {
      setOverlayImage2Visible(true);
    }, 4000);

    const overlay3Timer = setTimeout(() => {
      setOverlayImage3Visible(true);
    }, 5000);

    return () => {
      clearTimeout(discoverTimer);
      clearTimeout(overlay1Timer);
      clearTimeout(overlay2Timer);
      clearTimeout(overlay3Timer);
    };
  }, []);

  // Define the project images with their layout information for desktop
  const bolverImages = [
    { id: 1, path: "/assets/images/project-1.jpeg", column: "1", row: "1" },
    { id: 2, path: "/assets/images/project-2.jpeg", column: "1", row: "2" },
    { id: 3, path: "/assets/images/project-3.jpeg", column: "1", row: "3" },
    { id: 4, path: "/assets/images/project-4.jpeg", column: "2", row: "1 / 3" },
    { id: 5, path: "/assets/images/project-5.jpeg", column: "3", row: "1" },
    { id: 6, path: "/assets/images/project-6.jpeg", column: "3", row: "2" },
    { id: 7, path: "/assets/images/project-7.jpeg", column: "2 / 4", row: "3" }
  ];

  const environmentFundImages = [
    { id: 8, path: "/assets/images/project-8.jpeg", column: "1", row: "1" },
    { id: 9, path: "/assets/images/project-9.jpeg", column: "1", row: "2" },
    { id: 10, path: "/assets/images/project-10.jpeg", column: "2", row: "1" },
    { id: 11, path: "/assets/images/project-11.jpeg", column: "2", row: "2" },
    { id: 12, path: "/assets/images/project-12.jpeg", column: "3", row: "1" },
    { id: 13, path: "/assets/images/project-13.jpeg", column: "3", row: "2" }
  ];

  return (
    <ProjectsContainer>
      <ContentWrapper>
        <HeroSection>
          <DiscoverText isVisible={discoverVisible}>Discover our</DiscoverText>
          <ProjectsTitle>
            Projects
            {/* Overlay images that appear over the title and each other */}
            <OverlayImage 
              bgImage="/assets/images/project-6.jpeg" 
              isVisible={overlayImage1Visible}
              zIndex={3}
              rotation="-5deg"
            />
            <OverlayImage 
              bgImage="/assets/images/project-1.jpeg" 
              isVisible={overlayImage2Visible}
              zIndex={4}
              rotation="3deg"
            />
            <OverlayImage 
              bgImage="/assets/images/project-2.jpeg" 
              isVisible={overlayImage3Visible}
              zIndex={5}
              rotation="-2deg"
            />
          </ProjectsTitle>
          <ProjectsDescription>
            From crafting innovative strategies to achieving impactful results, 
            we offer comprehensive marketing solutions and deliver distinctive experiences tailored to each client.
          </ProjectsDescription>
        </HeroSection>

          <ProjectHeader>
            <LogoContainer>
              <BolverLogo src="/assets/images/bolver-logo.png" alt="BOLVER Logo" />
            </LogoContainer>
          </ProjectHeader>
          <ProjectGallery>
            <BolverGrid>
              {bolverImages.map((image) => (
                <GalleryImage 
                  key={image.id} 
                  bgImage={image.path} 
                  column={image.column}
                  row={image.row}
                  aria-label={`BOLVER project image ${image.id}`}
                />
              ))}
            </BolverGrid>
          </ProjectGallery>

        <EnvironmentFundSection>
          <EnvironmentHeader>
            <EnvironmentLogoContainer>
              <EnvironmentLogo src="/assets/images/enviroment-fund-logo.png" alt="Environment Fund Logo" />
            </EnvironmentLogoContainer>
          </EnvironmentHeader>
          <ProjectGallery>
            <EnvironmentGrid>
              {environmentFundImages.map((image) => (
                <GalleryImage 
                  key={image.id} 
                  bgImage={image.path} 
                  column={image.column}
                  row={image.row}
                  aria-label={`Environment Fund project image ${image.id}`}
                />
              ))}
            </EnvironmentGrid>
          </ProjectGallery>
        </EnvironmentFundSection>
      </ContentWrapper>
    </ProjectsContainer>
  );
};

export default Projects; 