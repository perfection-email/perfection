import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PortfolioContainer = styled.section`
  padding: 100px 0;
  background: #f8f9fa;
  
  @media (max-width: 768px) {
    padding: 80px 0;
  }
  
  @media (max-width: 480px) {
    padding: 60px 0;
  }
`;

const PortfolioContent = styled.div`
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

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 12px;
  }
  
  @media (max-width: 360px) {
    font-size: 1.6rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #666;
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 50px;
    max-width: 90%;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 40px;
    max-width: 95%;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 60px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 15px;
    margin-bottom: 50px;
  }
  
  @media (max-width: 480px) {
    gap: 10px;
    margin-bottom: 40px;
  }
`;

const FilterButton = styled.button`
  background: ${props => props.active ? '#ffa500' : 'transparent'};
  color: ${props => props.active ? 'white' : '#333'};
  border: 2px solid #ffa500;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background: #ffa500;
    color: white;
  }
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.8rem;
    border-radius: 20px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
  
  @media (max-width: 768px) {
    border-radius: 8px;
    
    &:hover {
      transform: translateY(-3px);
    }
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
  
  @media (max-width: 768px) {
    height: 200px;
  }
  
  @media (max-width: 480px) {
    height: 180px;
  }
`;

const ProjectInfo = styled.div`
  padding: 25px;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 6px;
  }
`;

const ProjectDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 10px;
    line-height: 1.5;
  }
`;

const ProjectDate = styled.div`
  color: #999;
  font-size: 0.9rem;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-bottom: 10px;
  }
`;

const ViewMoreButton = styled(Link)`
  background: #ffa500;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.3s ease;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background: #e69500;
  }
  
  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    padding: 5px 10px;
    font-size: 0.8rem;
    width: 100%;
    text-align: center;
  }
`;

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "Corporate Headquarters Design",
      description: "We designed and executed a modern corporate headquarters that blends innovation with functionality, creating an inspiring workspace.",
      date: "2024-01-15",
      category: "Branding Spaces",
      image: "/assets/images/office-space-solutions.png",
      path: "/environments"
    },
    {
      title: "Tech Conference 2024",
      description: "A comprehensive tech conference with over 2000 attendees, featuring cutting-edge technology demonstrations and networking zones.",
      date: "2024-02-20",
      category: "Events",
      image: "/assets/images/track-record.jpg",
      path: "/events"
    },
    {
      title: "International Trade Show Booth",
      description: "Award-winning exhibition booth design for a leading manufacturing company at the international trade show.",
      date: "2024-03-10",
      category: "Exhibitions",
      image: "/assets/images/trusted-companies.png",
      path: "/exhibitions"
    },
    {
      title: "Interactive Museum Experience",
      description: "An immersive museum installation combining AR technology with traditional exhibits to create engaging visitor experiences.",
      date: "2024-04-05",
      category: "Immersive Experiences",
      image: "/assets/images/office-space-solutions.png",
      path: "/immersive-experiences"
    },
    {
      title: "Retail Flagship Store",
      description: "Complete retail environment design featuring smart display systems and interactive product showcases.",
      date: "2024-05-12",
      category: "Display Solutions",
      image: "/assets/images/track-record.jpg",
      path: "/display-systems"
    },
    {
      title: "Smart Office Integration",
      description: "Technology integration project featuring IoT sensors, smart lighting, and automated systems for a modern office space.",
      date: "2024-06-18",
      category: "Technology",
      image: "/assets/images/trusted-companies.png",
      path: "/technology"
    }
  ];

  const categories = ['All', 'Branding Spaces', 'Events', 'Exhibitions', 'Immersive Experiences', 'Display Solutions', 'Technology'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <PortfolioContainer id="portfolio">
      <PortfolioContent>
        <SectionTitle>Proven Work Where Vision Meets Execution</SectionTitle>
        <SectionSubtitle>
          Our track record speaks for itself. Explore our recent projects and see how we turn ideas into reality.
        </SectionSubtitle>
        
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
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDate>{new Date(project.date).toLocaleDateString()}</ProjectDate>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ViewMoreButton to={project.path}>View More</ViewMoreButton>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </PortfolioContent>
    </PortfolioContainer>
  );
};

export default Portfolio; 