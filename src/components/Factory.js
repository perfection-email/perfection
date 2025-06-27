import React from 'react';
import styled from 'styled-components';
import { FaCogs, FaIndustry, FaUsers, FaTools, FaClipboardCheck, FaHandshake, FaHammer, FaDesktop, FaFileAlt } from 'react-icons/fa';

const FactoryContainer = styled.div`
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

const ContentSection = styled.section`
  padding: 100px 0;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const IntroSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

const IntroText = styled.div``;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffa500;
  margin-bottom: 30px;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const IntroDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 30px;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: #333;
  font-size: 1rem;

  &:before {
    content: '✓';
    background: #ffa500;
    color: white;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    font-size: 12px;
    font-weight: bold;
  }
`;

const IntroImage = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/assets/images/track-record.jpg');
  background-size: cover;
  background-position: center;
  height: 400px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  position: relative;

  &::after {
    content: 'Welcome to Perfection';
    position: absolute;
    bottom: 30px;
    left: 30px;
    font-size: 2rem;
    font-weight: bold;
  }
`;

const ExcellenceSection = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const ExcellenceTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffa500;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
`;

const ServiceCard = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: #ffa500;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const GallerySection = styled.div`
  margin-bottom: 80px;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

const GalleryItem = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${props => props.bgImage}');
  background-size: cover;
  background-position: center;
  height: 200px;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const DepartmentsSection = styled.div`
  margin-bottom: 80px;
`;

const DepartmentsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffa500;
  text-align: center;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const DepartmentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const DepartmentCard = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  border-top: 4px solid #ffa500;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const DepartmentIcon = styled.div`
  font-size: 2.5rem;
  color: #ffa500;
  margin-bottom: 15px;
`;

const DepartmentTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

const DepartmentDescription = styled.p`
  color: #666;
  line-height: 1.5;
  font-size: 0.9rem;
`;

const Factory = () => {
  const services = [
    {
      icon: <FaIndustry />,
      title: "Strategic Production Planning",
      description: "Our expertise lies in strategic production planning, where we develop comprehensive plans that ensure efficient resource allocation and timely delivery."
    },
    {
      icon: <FaTools />,
      title: "Advanced Manufacturing Technologies",
      description: "We leverage the latest manufacturing technologies and equipment to deliver products that meet the highest quality standards while maintaining cost efficiency."
    },
    {
      icon: <FaUsers />,
      title: "Skilled Workforce Management",
      description: "Our skilled workforce management ensures that every project benefits from experienced professionals who bring expertise and dedication to every task."
    }
  ];

  const departments = [
    {
      icon: <FaCogs />,
      title: "Engineering Department",
      description: "Transforming concepts into detailed technical specifications and ensuring structural integrity throughout the production process."
    },
    {
      icon: <FaDesktop />,
      title: "Design Department",
      description: "Creating innovative and functional designs that perfectly balance aesthetic appeal with practical functionality and user experience."
    },
    {
      icon: <FaClipboardCheck />,
      title: "Quality Control",
      description: "Implementing rigorous quality control measures to ensure every product meets our high standards before delivery to clients."
    },
    {
      icon: <FaHammer />,
      title: "Production Department",
      description: "Executing manufacturing processes with precision using advanced equipment and skilled technicians to deliver exceptional results."
    },
    {
      icon: <FaFileAlt />,
      title: "Project Management",
      description: "Coordinating all aspects of production from initial planning through final delivery, ensuring projects stay on schedule and within budget."
    },
    {
      icon: <FaHandshake />,
      title: "Client Relations",
      description: "Maintaining strong relationships with clients through clear communication, regular updates, and responsive customer service throughout the process."
    }
  ];

  return (
    <FactoryContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Factory</HeroTitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <ContentContainer>
          <IntroSection>
            <IntroText>
              <SectionTitle>Our Production Environment</SectionTitle>
              <IntroDescription>
                At Perfection, we operate a comprehensive production environment designed to manage and execute projects from concept to completion. Our facility combines cutting-edge technology with skilled craftsmanship to deliver exceptional results across all our service offerings.
              </IntroDescription>
              <FeaturesList>
                <FeatureItem>Advanced production facilities spanning 5,000 square meters</FeatureItem>
                <FeatureItem>State-of-the-art equipment and technology infrastructure</FeatureItem>
                <FeatureItem>Skilled workforce with over 15 years of combined experience</FeatureItem>
                <FeatureItem>Comprehensive quality control and testing capabilities</FeatureItem>
                <FeatureItem>Integrated design, manufacturing, and assembly operations</FeatureItem>
                <FeatureItem>Flexible production capacity to handle projects of any scale</FeatureItem>
                <FeatureItem>Strategic location with excellent logistics and transportation access</FeatureItem>
              </FeaturesList>
            </IntroText>
            <IntroImage />
          </IntroSection>

          <ExcellenceSection>
            <ExcellenceTitle>Execution Excellence Starts Here</ExcellenceTitle>
            <ServicesGrid>
              {services.map((service, index) => (
                <ServiceCard key={index}>
                  <ServiceIcon>{service.icon}</ServiceIcon>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </ExcellenceSection>

          <GallerySection>
            <GalleryGrid>
              <GalleryItem bgImage="/assets/images/office-space-solutions.png" />
              <GalleryItem bgImage="/assets/images/track-record.jpg" />
              <GalleryItem bgImage="/assets/images/trusted-companies.png" />
              <GalleryItem bgImage="/assets/images/office-space-solutions.png" />
            </GalleryGrid>
          </GallerySection>

          <DepartmentsSection>
            <DepartmentsTitle>Factory Departments</DepartmentsTitle>
            <DepartmentsGrid>
              {departments.map((department, index) => (
                <DepartmentCard key={index}>
                  <DepartmentIcon>{department.icon}</DepartmentIcon>
                  <DepartmentTitle>{department.title}</DepartmentTitle>
                  <DepartmentDescription>{department.description}</DepartmentDescription>
                </DepartmentCard>
              ))}
            </DepartmentsGrid>
          </DepartmentsSection>
        </ContentContainer>
      </ContentSection>
    </FactoryContainer>
  );
};

export default Factory; 