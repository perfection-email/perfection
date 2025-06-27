import React from 'react';
import styled from 'styled-components';
import { FaBuilding, FaCalendarAlt, FaImage, FaEye, FaDesktop, FaCogs } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServicesContainer = styled.section`
  padding: 100px 0;
  background: white;
`;

const ServicesContent = styled.div`
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
  margin-bottom: 80px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
`;

const ServiceCard = styled.div`
  background: #f8f9fa;
  padding: 40px 30px;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    background: white;
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: #ffa500;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ServiceButton = styled(Link)`
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

  &:hover {
    background: #e69500;
  }
`;

const Services = () => {
  const services = [
    {
      icon: <FaBuilding />,
      title: "Branding Spaces",
      description: "We develop corporate and commercial setups that reflect your brand identity through modern, practical effective design solutions",
      path: "/environments"
    },
    {
      icon: <FaCalendarAlt />,
      title: "Events",
      description: "We organize full-scale events including planning, operations, and technical support to deliver a flawless and impactful experience",
      path: "/events"
    },
    {
      icon: <FaImage />,
      title: "Exhibitions",
      description: "We offer end-to-end exhibition booth design and execution from concept to completion with full branding integration",
      path: "/exhibitions"
    },
    {
      icon: <FaEye />,
      title: "Immersive Experiences",
      description: "We create interactive setups blending visuals sound and technology to fully engage and captivate your audience on-site",
      path: "/immersive-experiences"
    },
    {
      icon: <FaDesktop />,
      title: "Display Solutions",
      description: "We design smart structures tailored to space and objectives and execute them with precision creativity, and premium quality",
      path: "/display-systems"
    },
    {
      icon: <FaCogs />,
      title: "Technology",
      description: "We integrate advanced tools like AR, VR, and data analytics to elevate experience quality and optimize your project outcomes",
      path: "/technology"
    }
  ];

  return (
    <ServicesContainer id="services">
      <ServicesContent>
        <SectionTitle>We're Here to Be Part of Your Journey</SectionTitle>
        <SectionSubtitle>
          At Perfection, we believe every project is a chance to create something exceptional. 
          That's why we craft solutions that match your ambition.
        </SectionSubtitle>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceButton to={service.path}>Learn More</ServiceButton>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesContent>
    </ServicesContainer>
  );
};

export default Services; 