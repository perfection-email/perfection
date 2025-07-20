import React from 'react';
import styled from 'styled-components';
import { FaCogs, FaUsers, FaRocket, FaFlask } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutContainer = styled.section`
  padding: 100px 0;
  background: white;
  
  @media (max-width: 768px) {
    padding: 80px 0;
  }
  
  @media (max-width: 480px) {
    padding: 60px 0;
  }
`;

const AboutContent = styled.div`
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

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  
  @media (max-width: 480px) {
    gap: 40px;
  }
`;

const AboutText = styled.div`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 25px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
  
  @media (max-width: 360px) {
    font-size: 1.6rem;
  }
`;

const AboutDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 30px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 25px;
    line-height: 1.6;
  }
`;

const FeaturesList = styled.div`
  display: grid;
  gap: 25px;
  
  @media (max-width: 768px) {
    gap: 20px;
    max-width: 500px;
    margin: 0 auto;
    text-align: left;
  }
  
  @media (max-width: 480px) {
    gap: 18px;
    max-width: 100%;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  
  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const FeatureIcon = styled.div`
  color: #ffa500;
  font-size: 1.5rem;
  margin-top: 5px;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-top: 3px;
  }
`;

const FeatureContent = styled.div``;

const FeatureTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 6px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.05rem;
    margin-bottom: 5px;
  }
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const AboutImage = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/assets/images/track-record.jpg');
  background-size: cover;
  background-position: center;
  height: 400px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  
  @media (max-width: 768px) {
    height: 300px;
    font-size: 1.3rem;
  }
  
  @media (max-width: 480px) {
    height: 250px;
    font-size: 1.2rem;
  }
`;

const CTASection = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/assets/images/track-record.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 80px 0;
  margin-top: 100px;
  text-align: center;
  color: white;
  
  @media (max-width: 768px) {
    padding: 60px 0;
    margin-top: 80px;
    background-attachment: scroll;
  }
  
  @media (max-width: 480px) {
    padding: 50px 0;
    margin-top: 60px;
  }
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    max-width: 90%;
    padding: 0 15px;
  }
  
  @media (max-width: 480px) {
    max-width: 95%;
    padding: 0 10px;
  }
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 18px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 15px;
  }
  
  @media (max-width: 360px) {
    font-size: 1.6rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 40px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 30px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 25px;
    line-height: 1.5;
  }
`;

const CTAButton = styled(Link)`
  background: #ffa500;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background: #e69500;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 165, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 12px 25px;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 0.9rem;
    width: 100%;
    max-width: 250px;
  }
`;

const About = () => {
  const features = [
    {
      icon: <FaCogs />,
      title: "Integrated Production System",
      description: "Complete design, printing, and carpentry setup — all under one roof"
    },
    {
      icon: <FaUsers />,
      title: "Skilled and Specialized Team",
      description: "High expertise and capabilities to execute every detail with precision"
    },
    {
      icon: <FaRocket />,
      title: "Advanced Technologies",
      description: "Modern equipment to achieve the highest quality standards"
    },
    {
      icon: <FaFlask />,
      title: "High Execution Flexibility",
      description: "Ready to handle everything — from compact jobs to large-scale projects"
    }
  ];

  return (
    <>
      <AboutContainer id="about">
        <AboutContent>
          <AboutGrid>
            <AboutText>
              <SectionTitle>
                Learn more about our integrated production system
              </SectionTitle>
              <AboutDescription>
                At Perfection, we don't just offer services — we create impact. 
                Our comprehensive approach combines creativity with cutting-edge technology 
                to deliver exceptional results that exceed expectations.
              </AboutDescription>
              
              <FeaturesList>
                {features.map((feature, index) => (
                  <FeatureItem key={index}>
                    <FeatureIcon>{feature.icon}</FeatureIcon>
                    <FeatureContent>
                      <FeatureTitle>{feature.title}</FeatureTitle>
                      <FeatureDescription>{feature.description}</FeatureDescription>
                    </FeatureContent>
                  </FeatureItem>
                ))}
              </FeaturesList>
            </AboutText>
            
            <AboutImage>
              Our State-of-the-Art Facility
            </AboutImage>
          </AboutGrid>
        </AboutContent>
      </AboutContainer>

      <CTASection>
        <CTAContent>
          <CTATitle>Ready to Launch Your Project With Us?</CTATitle>
          <CTADescription>
            Let's turn your ideas into an impressive reality — we'll support you from design to execution
          </CTADescription>
          <CTAButton to="/get-quote">Contact Us</CTAButton>
        </CTAContent>
      </CTASection>
    </>
  );
};

export default About; 