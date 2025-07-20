import React from 'react';
import styled from 'styled-components';
import { FaCalendarAlt, FaUsers, FaBuilding, FaNetworkWired, FaDesktop, FaVideo, FaAward, FaMapMarkerAlt, FaLightbulb, FaHandshake, FaCog, FaFileAlt, FaMicrophone } from 'react-icons/fa';

const EventsContainer = styled.div`
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

const Events = () => {
  const services = [
    {
      icon: <FaCalendarAlt />,
      title: "Event Planning & Management",
      description: "Comprehensive event planning services from concept to execution, ensuring every detail is perfectly managed."
    },
    {
      icon: <FaUsers />,
      title: "Corporate Event Solutions",
      description: "Professional corporate event solutions tailored to meet your business objectives and impress your stakeholders."
    },
    {
      icon: <FaBuilding />,
      title: "Venue Selection & Setup",
      description: "Expert venue selection and complete setup services to create the perfect environment for your event."
    },
    {
      icon: <FaNetworkWired />,
      title: "Networking & Team Building",
      description: "Specialized networking events and team building activities that strengthen relationships and boost morale."
    },
    {
      icon: <FaDesktop />,
      title: "Conference & Seminar Setup",
      description: "Professional conference and seminar setup with all necessary equipment and technical support."
    },
    {
      icon: <FaVideo />,
      title: "Live Streaming & Broadcasting",
      description: "High-quality live streaming and broadcasting services to extend your event's reach globally."
    },
    {
      icon: <FaAward />,
      title: "Award Ceremonies & Galas",
      description: "Elegant award ceremonies and gala events that celebrate achievements in memorable style."
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Event Marketing & Promotion",
      description: "Strategic event marketing and promotion services to maximize attendance and engagement."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaLightbulb />,
      title: "Planning",
      description: "Comprehensive planning services that cover every aspect of your event from initial concept to final execution."
    },
    {
      icon: <FaHandshake />,
      title: "Staffing",
      description: "Professional staffing solutions with experienced event coordinators and support staff for seamless execution."
    },
    {
      icon: <FaCog />,
      title: "Execution",
      description: "Flawless event execution with attention to detail and real-time management to ensure everything runs smoothly."
    }
  ];

  const experiences = [
    {
      icon: <FaHandshake />,
      title: "Consultation",
      description: "We begin with detailed consultation to understand your vision, objectives, and specific requirements for the event.",
      buttonText: "Read More"
    },
    {
      icon: <FaDesktop />,
      title: "Design & Planning",
      description: "Strategic event design and comprehensive planning that brings your vision to life with precision and creativity.",
      buttonText: "Read More"
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Innovative event solutions that incorporate the latest trends and technologies to create memorable experiences.",
      buttonText: "Read More"
    },
    {
      icon: <FaVideo />,
      title: "Immersive Experiences",
      description: "We create immersive event experiences that engage attendees and leave lasting impressions.",
      buttonText: "Read More"
    },
    {
      icon: <FaUsers />,
      title: "Display Solutions",
      description: "Professional display solutions and exhibition setups that showcase your brand and message effectively.",
      buttonText: "Read More"
    },
    {
      icon: <FaDesktop />,
      title: "Technology",
      description: "Advanced technology integration including AV systems, lighting, and interactive elements for enhanced experiences.",
      buttonText: "Read More"
    }
  ];

  return (
    <EventsContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Events</HeroTitle>
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
              <SectionSubtitle>Toward an Unforgettable Experience</SectionSubtitle>
              <Description>
                Our goal is to create unique event management solutions, and we 
                understand that behind every successful event our expertise ensures 
                seamless execution from planning to completion. We create memorable 
                experiences that exceed expectations and deliver exceptional value for 
                your investment and lasting impressions.
              </Description>
            </GalleryText>
          </GallerySection>

          <ServicesIntro>
            <ServicesTitle>Our Comprehensive Services</ServicesTitle>
            <ServicesDescription>
              We provide a range of professional services to meet the needs of your events and projects—delivered with professionalism and unforgettable 
              experiences.
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
            <WhyChooseTitle>Why Us? Why Are We Your Ideal Partner?</WhyChooseTitle>
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
    </EventsContainer>
  );
};

export default Events; 