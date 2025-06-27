import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PortfolioContainer = styled.section`
  padding: 100px 0;
  background: #f8f9fa;
`;

const PortfolioContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
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
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 60px;
  flex-wrap: wrap;
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

  &:hover {
    background: #ffa500;
    color: white;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
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
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

const ProjectDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const ProjectDate = styled.div`
  color: #999;
  font-size: 0.9rem;
  margin-bottom: 15px;
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