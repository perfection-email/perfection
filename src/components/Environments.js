import React from 'react';
import styled from 'styled-components';
import { FaBuilding, FaDesktop, FaChair, FaUsers, FaLaptop, FaStore, FaChartLine, FaComments, FaLightbulb, FaAward, FaCog, FaHandshake, FaVideo, FaFileAlt } from 'react-icons/fa';

const EnvironmentsContainer = styled.div`
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

const GallerySection = styled.div`
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

const GalleryText = styled.div``;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const GalleryItem = styled.div`
  background: url('${props => props.bgImage}');
  background-size: cover;
  background-position: center;
  height: 200px;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

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

const Description = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 30px;
`;

const ServicesIntro = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const ServicesTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffa500;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ServicesDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 100px;
`;

const ServiceCard = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #ffa500;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 0.9rem;
`;

const WhyChooseSection = styled.div`
  text-align: center;
  margin-bottom: 100px;
`;

const WhyChooseTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffa500;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const WhyChooseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
`;

const WhyChooseCard = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`;

const WhyChooseIcon = styled.div`
  font-size: 3rem;
  color: #ffa500;
  margin-bottom: 20px;
`;

const WhyChooseCardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
`;

const WhyChooseCardDescription = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const ExperienceSection = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const ExperienceTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffa500;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
`;

const ExperienceCard = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`;

const ExperienceIcon = styled.div`
  font-size: 3rem;
  color: #ffa500;
  margin-bottom: 20px;
`;

const ExperienceCardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
`;

const ExperienceCardDescription = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
  margin-bottom: 20px;
`;

const ReadMoreButton = styled.button`
  background: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #555;
  }
`;

const Environments = () => {
  const services = [
    {
      icon: <FaBuilding />,
      title: "Workspace Environment Design",
      description: "Comprehensive workspace design solutions that enhance productivity and create inspiring work environments."
    },
    {
      icon: <FaDesktop />,
      title: "Digital Workspace Integration",
      description: "Seamless integration of digital technologies to create smart, connected, and efficient workspaces."
    },
    {
      icon: <FaChair />,
      title: "Furniture & Layout Planning",
      description: "Strategic furniture selection and space planning to optimize functionality and comfort in any environment."
    },
    {
      icon: <FaUsers />,
      title: "Collaborative Spaces",
      description: "Design and implementation of collaborative spaces that foster teamwork and creative thinking."
    },
    {
      icon: <FaLaptop />,
      title: "Technology Infrastructure",
      description: "Complete technology infrastructure setup to support modern workplace requirements and connectivity."
    },
    {
      icon: <FaStore />,
      title: "Information and Facilities",
      description: "Comprehensive information systems and facility management solutions for optimal space utilization."
    },
    {
      icon: <FaChartLine />,
      title: "Performance Integration",
      description: "Integration of performance monitoring and analytics to optimize environment effectiveness and user satisfaction."
    },
    {
      icon: <FaComments />,
      title: "Client Engagement Solutions",
      description: "Specialized solutions for client engagement areas that create professional and welcoming environments."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaLightbulb />,
      title: "Comfort & Functionality",
      description: "We create environments that perfectly balance comfort and functionality, ensuring optimal user experience and productivity."
    },
    {
      icon: <FaAward />,
      title: "Brand Identity",
      description: "Our environmental solutions reflect and reinforce your brand identity, creating cohesive and memorable spaces."
    },
    {
      icon: <FaCog />,
      title: "Performance & Motivation",
      description: "Designed to enhance performance and motivation through thoughtful space planning and environmental psychology."
    }
  ];

  const experiences = [
    {
      icon: <FaHandshake />,
      title: "Consultation",
      description: "We provide comprehensive consultation to understand your space requirements and develop tailored environmental solutions.",
      buttonText: "Read More"
    },
    {
      icon: <FaDesktop />,
      title: "Design & Planning",
      description: "Strategic environmental design and planning services that transform spaces into functional and inspiring environments.",
      buttonText: "Read More"
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Innovative environmental solutions that incorporate the latest trends in workspace design and technology integration.",
      buttonText: "Read More"
    },
    {
      icon: <FaVideo />,
      title: "Immersive Experiences",
      description: "Creating immersive environmental experiences that engage users and enhance their interaction with the space.",
      buttonText: "Read More"
    },
    {
      icon: <FaUsers />,
      title: "Display Solutions",
      description: "Environmental display solutions that seamlessly integrate information and wayfinding into your space design.",
      buttonText: "Read More"
    },
    {
      icon: <FaFileAlt />,
      title: "Technology",
      description: "Advanced environmental technologies that create smart, responsive, and adaptive spaces for modern needs.",
      buttonText: "Read More"
    }
  ];

  return (
    <EnvironmentsContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Environments</HeroTitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <ContentContainer>
          <GallerySection>
            <GalleryText>
              <SectionTitle>Spaces That Reflect Your Vision</SectionTitle>
              <Description>
                Our office design service goes beyond design and brings professional work 
                environments to life. We create spaces that support productivity, collaboration, 
                and well-being, while reflecting your company's culture and values. From concept 
                to completion, we deliver spaces that inspire and perform.
              </Description>
            </GalleryText>
            <GalleryGrid>
              <GalleryItem bgImage="/assets/images/office-space-solutions.png" />
              <GalleryItem bgImage="/assets/images/track-record.jpg" />
              <GalleryItem bgImage="/assets/images/trusted-companies.png" />
              <GalleryItem bgImage="/assets/images/about-us.jpg" />
            </GalleryGrid>
          </GallerySection>

          <ServicesIntro>
            <ServicesTitle>Integrated Solutions for Corporate and Retail Environments</ServicesTitle>
            <ServicesDescription>
              We design and create environments that combine beauty and function to enhance presence and user experience. 
              Our comprehensive approach ensures every element works together to create exceptional spaces.
            </ServicesDescription>
          </ServicesIntro>

          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard key={index}>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServicesGrid>

          <WhyChooseSection>
            <WhyChooseTitle>Why Do Our Environmental Solutions Make a Difference?</WhyChooseTitle>
            <WhyChooseGrid>
              {whyChooseUs.map((item, index) => (
                <WhyChooseCard key={index}>
                  <WhyChooseIcon>{item.icon}</WhyChooseIcon>
                  <WhyChooseCardTitle>{item.title}</WhyChooseCardTitle>
                  <WhyChooseCardDescription>{item.description}</WhyChooseCardDescription>
                </WhyChooseCard>
              ))}
            </WhyChooseGrid>
          </WhyChooseSection>

          <ExperienceSection>
            <ExperienceTitle>We're Here to Be Part of Your Experience</ExperienceTitle>
            <ExperienceGrid>
              {experiences.map((experience, index) => (
                <ExperienceCard key={index}>
                  <ExperienceIcon>{experience.icon}</ExperienceIcon>
                  <ExperienceCardTitle>{experience.title}</ExperienceCardTitle>
                  <ExperienceCardDescription>{experience.description}</ExperienceCardDescription>
                  <ReadMoreButton>{experience.buttonText}</ReadMoreButton>
                </ExperienceCard>
              ))}
            </ExperienceGrid>
          </ExperienceSection>
        </ContentContainer>
      </ContentSection>
    </EnvironmentsContainer>
  );
};

export default Environments; 