import React from 'react';
import styled from 'styled-components';
import { FaCubes, FaHome, FaClock, FaDesktop, FaVideo, FaUsers, FaChartLine, FaTools, FaLightbulb, FaHandshake, FaAward, FaCog } from 'react-icons/fa';

const ExhibitionsContainer = styled.div`
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
  position: relative;
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

const Exhibitions = () => {
  const services = [
    {
      icon: <FaCubes />,
      title: "Exhibition Stand Design & Build",
      description: "Complete design and construction of custom exhibition stands that reflect your brand identity."
    },
    {
      icon: <FaHome />,
      title: "Architectural Design and Interior",
      description: "Professional architectural and interior design services for exhibition spaces and venues."
    },
    {
      icon: <FaClock />,
      title: "Project Management & Logistics",
      description: "End-to-end project management ensuring timely delivery and seamless execution."
    },
    {
      icon: <FaDesktop />,
      title: "Digital Content Creation",
      description: "Creating engaging digital content and multimedia presentations for your exhibitions."
    },
    {
      icon: <FaVideo />,
      title: "Audio Visual Integration",
      description: "Professional AV setup and integration to enhance your exhibition experience."
    },
    {
      icon: <FaUsers />,
      title: "Branding & Design Solutions",
      description: "Comprehensive branding solutions that create lasting impressions on your audience."
    },
    {
      icon: <FaChartLine />,
      title: "Graphic Design Services",
      description: "Professional graphic design services for all your exhibition marketing materials."
    },
    {
      icon: <FaTools />,
      title: "Booth Setup and Installation",
      description: "Expert booth setup and installation services ensuring everything is perfectly positioned."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaLightbulb />,
      title: "Planning & Consultation",
      description: "We work closely with you to understand your vision and create a strategic plan that delivers results."
    },
    {
      icon: <FaAward />,
      title: "Design & Integration",
      description: "Our creative team designs stunning exhibitions that integrate seamlessly with your brand message."
    },
    {
      icon: <FaCog />,
      title: "Technical Specification Support",
      description: "We provide comprehensive technical support to ensure all systems work flawlessly throughout your event."
    }
  ];

  const experiences = [
    {
      icon: <FaHandshake />,
      title: "Consultation",
      description: "We start with a thorough consultation to understand your goals, target audience, and specific requirements for the exhibition.",
      buttonText: "Read More"
    },
    {
      icon: <FaDesktop />,
      title: "Design & Planning",
      description: "Our expert team creates detailed designs and comprehensive plans that bring your vision to life effectively.",
      buttonText: "Read More"
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "We incorporate the latest technologies and innovative solutions to create memorable and impactful exhibition experiences.",
      buttonText: "Read More"
    },
    {
      icon: <FaVideo />,
      title: "Immersive Experiences",
      description: "We create fully immersive experiences that engage visitors and leave lasting impressions of your brand.",
      buttonText: "Read More"
    },
    {
      icon: <FaUsers />,
      title: "Display Solutions",
      description: "Our comprehensive display solutions are tailored to showcase your products and services in the most effective way.",
      buttonText: "Read More"
    },
    {
      icon: <FaDesktop />,
      title: "Technology",
      description: "We integrate cutting-edge technology solutions that enhance visitor engagement and create interactive experiences.",
      buttonText: "Read More"
    }
  ];

  return (
    <ExhibitionsContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Exhibitions</HeroTitle>
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
              <SectionSubtitle>Exhibitions That Make an Impact and Create Identity</SectionSubtitle>
              <Description>
                We offer professional exhibition solutions that create stunning presentations designed to 
                elevate your brand, capturing the attention of potential customers, building full 
                visibility, and delivering exceptional experiences.
              </Description>
            </GalleryText>
          </GallerySection>

          <ServicesIntro>
            <ServicesTitle>From Concept to Execution We Design Experiences That Showcase Your Brand and Achieve</ServicesTitle>
            <ServicesDescription>
              We provide end-to-end exhibition solutions covering temporary structure design, logistics, and 
              technical support — all from a single point of contact.
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
            <WhyChooseTitle>Why Do Our Exhibition Solutions Make A Difference?</WhyChooseTitle>
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
    </ExhibitionsContainer>
  );
};

export default Exhibitions; 