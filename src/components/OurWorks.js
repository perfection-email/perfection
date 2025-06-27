import React, { useState } from 'react';
import styled from 'styled-components';

const OurWorksContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/images/Header-bg.png');
  background-size: cover;
  background-position: center;
  padding: 200px 0 100px;
  text-align: center;
  color: white;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 165, 0, 0.2) 0%, rgba(0, 150, 136, 0.2) 100%);
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContentSection = styled.section`
  padding: 100px 0;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffa500;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 60px;
  max-width: 800px;
  line-height: 1.6;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 60px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? '#ffa500' : 'transparent'};
  color: ${props => props.active ? 'white' : '#333'};
  border: 2px solid #ffa500;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background: #ffa500;
    color: white;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  height: 250px;
  background-image: url('${props => props.bgImage}');
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 165, 0, 0.8) 0%, rgba(255, 140, 0, 0.8) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const ProjectInfo = styled.div`
  padding: 25px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

const ProjectCategory = styled.div`
  color: #ffa500;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const ProjectDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 0.95rem;
`;

const ReadMoreButton = styled.button`
  background: transparent;
  color: #ffa500;
  border: none;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: #e69500;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
`;

const PaginationButton = styled.button`
  background: ${props => props.active ? '#ffa500' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  border: 1px solid #ddd;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ffa500;
    color: white;
  }
`;

const OurWorks = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const projects = [
    {
      title: "Loqma | Pet & Vet Expo",
      category: "Designing Exhibitions & booths",
      description: "We designed and executed Loqma's booth at Pet & Vet Expo 2024.",
      image: "/assets/images/office-space-solutions.png",
      date: "2024"
    },
    {
      title: "Dar Wa Emar | city scape",
      category: "Conference Planning",
      description: "We delivered a distinctive booth for Dar Wa Emar that blends innovation.",
      image: "/assets/images/track-record.jpg",
      date: "2024"
    },
    {
      title: "African Delegation Museum Setup",
      category: "Managing Events",
      description: "As part of a special event highlighting deep cultural and historical ties.",
      image: "/assets/images/trusted-companies.png",
      date: "2024"
    },
    {
      title: "Ertiga Association | IENA Exhibition",
      category: "Preparing Branded Environments",
      description: "We created the participation of Ertiga Charity at the IENA Exhibition 2024.",
      image: "/assets/images/office-space-solutions.png",
      date: "2024"
    },
    {
      title: "Royal Commission for Jubail and Yanbu",
      category: "Conference Planning",
      description: "In a project that combines modernity with institutional identity, we designed and.",
      image: "/assets/images/track-record.jpg",
      date: "2024"
    },
    {
      title: "King Salman Global Arabic Language Complex | Harf Competition",
      category: "Managing Events",
      description: "In an event celebrating the spirit of language and the beauty of.",
      image: "/assets/images/trusted-companies.png",
      date: "2024"
    }
  ];

  const categories = ['All', 'Designing Exhibitions & booths', 'Conference Planning', 'Managing Events', 'Preparing Branded Environments'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <OurWorksContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Our works</HeroTitle>
          <HeroSubtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, 
            pulvinar dapibus leo.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <ContentContainer>
          <SectionTitle>We Believe That Achievements Speak for Themselves</SectionTitle>
          <SectionDescription>
            A curated selection of our professionally executed projects that reflect our expertise in exhibitions, event management, and institutional space preparation
          </SectionDescription>

          <FilterButtons>
            {categories.map(category => (
              <FilterButton
                key={category}
                active={activeFilter === category}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </FilterButton>
            ))}
          </FilterButtons>

          <ProjectsGrid>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index}>
                <ProjectImage bgImage={project.image} />
                <ProjectInfo>
                  <ProjectCategory>{project.category}</ProjectCategory>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ReadMoreButton>Read More</ReadMoreButton>
                </ProjectInfo>
              </ProjectCard>
            ))}
          </ProjectsGrid>

          <Pagination>
            <PaginationButton>&lt;</PaginationButton>
            <PaginationButton active>1</PaginationButton>
            <PaginationButton>2</PaginationButton>
            <PaginationButton>&gt;</PaginationButton>
          </Pagination>
        </ContentContainer>
      </ContentSection>
    </OurWorksContainer>
  );
};

export default OurWorks; 