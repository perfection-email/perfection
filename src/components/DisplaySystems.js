import React from 'react';
import styled from 'styled-components';
import { FaDesktop, FaTv, FaProjectDiagram, FaVideo, FaTabletAlt, FaBuilding, FaChartLine, FaTools, FaLightbulb, FaAward, FaCog, FaHandshake, FaUsers, FaFileAlt } from 'react-icons/fa';

const DisplaySystemsContainer = styled.div`
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

const GalleryText = styled.div``;

const SectionSubtitle = styled.h3`
  font-size: 1.5rem;
  color: #ffa500;
  margin-bottom: 20px;
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

const DisplaySystems = () => {
  const services = [
    {
      icon: <FaDesktop />,
      title: "Interactive Touch Solutions",
      description: "Advanced interactive touch screen solutions for engaging user experiences and seamless navigation."
    },
    {
      icon: <FaTv />,
      title: "Digital Signage",
      description: "Dynamic digital signage systems for effective communication and brand messaging in any environment."
    },
    {
      icon: <FaProjectDiagram />,
      title: "LED Display Solutions",
      description: "High-resolution LED display systems that deliver stunning visual impact for any application."
    },
    {
      icon: <FaVideo />,
      title: "Video Wall Systems",
      description: "Professional video wall installations that create immersive visual experiences and commanding presence."
    },
    {
      icon: <FaTabletAlt />,
      title: "Kiosk Solutions",
      description: "Custom kiosk solutions for self-service applications, information delivery, and interactive experiences."
    },
    {
      icon: <FaBuilding />,
      title: "Architectural Integration",
      description: "Seamless integration of display systems into architectural environments for aesthetic and functional harmony."
    },
    {
      icon: <FaChartLine />,
      title: "Content Management",
      description: "Comprehensive content management systems for easy control and scheduling of your display content."
    },
    {
      icon: <FaTools />,
      title: "Installation & Support",
      description: "Professional installation services and ongoing technical support to ensure optimal performance."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaLightbulb />,
      title: "Smart Solutions",
      description: "Intelligent display solutions that adapt to your needs and provide seamless user experiences with cutting-edge technology."
    },
    {
      icon: <FaAward />,
      title: "Speed-Based Content Design",
      description: "Fast and efficient content design services that deliver high-quality visuals optimized for your display systems."
    },
    {
      icon: <FaCog />,
      title: "Visual Integration",
      description: "Expert visual integration services that ensure your display systems work harmoniously with your environment and brand."
    }
  ];

  const experiences = [
    {
      icon: <FaHandshake />,
      title: "Consultation",
      description: "We provide expert consultation to understand your display requirements and recommend the best solutions for your needs.",
      buttonText: "Read More"
    },
    {
      icon: <FaDesktop />,
      title: "Design & Planning",
      description: "Comprehensive design and planning services that ensure your display systems are perfectly integrated and optimized.",
      buttonText: "Read More"
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "We bring innovative display technologies and creative solutions that set your installations apart from the competition.",
      buttonText: "Read More"
    },
    {
      icon: <FaVideo />,
      title: "Immersive Experiences",
      description: "Creating immersive visual experiences that captivate audiences and deliver powerful messaging through display technology.",
      buttonText: "Read More"
    },
    {
      icon: <FaUsers />,
      title: "Display Solutions",
      description: "Tailored display solutions that meet your specific requirements and deliver exceptional visual performance.",
      buttonText: "Read More"
    },
    {
      icon: <FaFileAlt />,
      title: "Technology",
      description: "Advanced display technologies and systems that provide reliable performance and stunning visual quality.",
      buttonText: "Read More"
    }
  ];

  return (
    <DisplaySystemsContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Display Systems</HeroTitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <ContentContainer>
          <GallerySection>
            <GalleryGrid>
              <GalleryItem bgImage="/assets/images/office-space-solutions.png" />
              <GalleryItem bgImage="/assets/images/track-record.jpg" />
              <GalleryItem bgImage="/assets/images/trusted-companies.png" />
              <GalleryItem bgImage="/assets/images/about-us.jpg" />
            </GalleryGrid>
            <GalleryText>
              <SectionSubtitle>Smart and Customizable Display Solutions</SectionSubtitle>
              <Description>
                We offer flexible and customizable display systems suited for any space or purpose. 
                From flexible modular solutions, printing, and preparation to deliver a fully 
                integrated visual experience, our solutions are designed to enhance communication 
                and deliver exceptional visual impact.
              </Description>
            </GalleryText>
          </GallerySection>

          <ServicesIntro>
            <ServicesTitle>Comprehensive Display Solutions That Align With Your Vision and Enhance Your Visual</ServicesTitle>
            <ServicesDescription>
              We offer flexible and innovative visual display solutions including digital signage, interactive screens, 
              video walls, and custom displays that are designed to help you achieve your visual communication goals.
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
            <WhyChooseTitle>Why Do Our Display Solutions Make a Difference?</WhyChooseTitle>
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
    </DisplaySystemsContainer>
  );
};

export default DisplaySystems; 