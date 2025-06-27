import React from 'react';
import styled from 'styled-components';
import { FaVrCardboard, FaVideo, FaDesktop, FaHeadset, FaGamepad, FaCube, FaUsers, FaLaptop, FaLightbulb, FaAward, FaCog, FaHandshake, FaFileAlt } from 'react-icons/fa';

const ImmersiveExperiencesContainer = styled.div`
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

const ImmersiveExperiences = () => {
  const services = [
    {
      icon: <FaVrCardboard />,
      title: "Augmented & Virtual Reality",
      description: "Cutting-edge AR and VR solutions that create immersive digital experiences and transport users to new realities."
    },
    {
      icon: <FaVideo />,
      title: "Interactive Mapping",
      description: "Dynamic interactive mapping solutions that provide engaging geographical and spatial experiences for users."
    },
    {
      icon: <FaDesktop />,
      title: "Multi-Screen Interactive Experiences",
      description: "Synchronized multi-screen setups that create panoramic and collaborative interactive experiences."
    },
    {
      icon: <FaHeadset />,
      title: "Advanced Surround Sound",
      description: "Professional surround sound systems that enhance immersion and create captivating audio environments."
    },
    {
      icon: <FaGamepad />,
      title: "Interactive Game Experiences",
      description: "Custom interactive gaming experiences designed to engage audiences and create memorable interactions."
    },
    {
      icon: <FaCube />,
      title: "3D Visualization",
      description: "Advanced 3D visualization technologies that bring concepts to life with stunning visual clarity and detail."
    },
    {
      icon: <FaUsers />,
      title: "Collaborative Interactions",
      description: "Multi-user collaborative platforms that enable shared immersive experiences and group interactions."
    },
    {
      icon: <FaLaptop />,
      title: "Motion Tracking Technology",
      description: "Sophisticated motion tracking systems that respond to user movements and create reactive environments."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaLightbulb />,
      title: "Multi-Sensory Interaction",
      description: "We create multi-sensory experiences that engage all senses, providing rich and memorable interactions that captivate audiences."
    },
    {
      icon: <FaAward />,
      title: "Cognitive & Sensational Content",
      description: "Our content is designed to stimulate both cognitive and emotional responses, creating meaningful and impactful experiences."
    },
    {
      icon: <FaCog />,
      title: "Extended Reality Technologies",
      description: "We leverage the latest extended reality technologies to push the boundaries of what's possible in immersive experiences."
    }
  ];

  const experiences = [
    {
      icon: <FaHandshake />,
      title: "Consultation",
      description: "We provide expert consultation to understand your immersive experience goals and develop customized solutions that exceed expectations.",
      buttonText: "Read More"
    },
    {
      icon: <FaDesktop />,
      title: "Design & Planning",
      description: "Comprehensive design and planning services that ensure your immersive experiences are perfectly crafted and seamlessly executed.",
      buttonText: "Read More"
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "We bring cutting-edge innovation to every immersive experience, utilizing the latest technologies and creative approaches.",
      buttonText: "Read More"
    },
    {
      icon: <FaVideo />,
      title: "Immersive Experiences",
      description: "Creating truly immersive experiences that transport users to new worlds and provide unforgettable interactive journeys.",
      buttonText: "Read More"
    },
    {
      icon: <FaUsers />,
      title: "Display Solutions",
      description: "Advanced display technologies that serve as the foundation for stunning immersive visual experiences and interactions.",
      buttonText: "Read More"
    },
    {
      icon: <FaFileAlt />,
      title: "Technology",
      description: "State-of-the-art immersive technologies that create seamless and responsive environments for optimal user engagement.",
      buttonText: "Read More"
    }
  ];

  return (
    <ImmersiveExperiencesContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Immersive Experiences</HeroTitle>
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
              <SectionTitle>An Immersive Experience That Engages All</SectionTitle>
              <Description>
                Immersive media, virtual games, simulations, and interactive 
                learning applications, virtual reality, and augmented reality 
                experiences provide users with the opportunity to experience 
                and learn in new ways. We create experiences that combine 
                cutting-edge technology with creative storytelling to deliver 
                unforgettable moments that engage and inspire.
              </Description>
            </GalleryText>
          </GallerySection>

          <ServicesIntro>
            <ServicesTitle>Immersive Experiences That Set the Senses and Tell a Story</ServicesTitle>
            <ServicesDescription>
              Interactive environments using multi-sensory content and advanced technologies that take users on a journey to the front story. 
              We create immersive experiences that are both technically sophisticated and emotionally engaging.
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
            <WhyChooseTitle>Why Do Our Immersive Experiences Make A Difference?</WhyChooseTitle>
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
    </ImmersiveExperiencesContainer>
  );
};

export default ImmersiveExperiences; 