import React from 'react';
import styled from 'styled-components';
import { FaUsers, FaAward, FaLightbulb, FaHandshake, FaEye, FaBullseye, FaHeart } from 'react-icons/fa';

const AboutContainer = styled.div`
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

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
`;

const ContentSection = styled.section`
  padding: 100px 0;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const StorySection = styled.div`
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

const StoryText = styled.div``;

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

const StoryDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 30px;
`;

const StoryImage = styled.div`
  background: url('/assets/images/about-us.jpg');
  background-size: cover;
  background-position: center;
  height: 500px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const ValuesSection = styled.div`
  text-align: center;
  margin-bottom: 100px;
`;

const ValuesTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffa500;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
`;

const ValueCard = styled.div`
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

const ValueIcon = styled.div`
  font-size: 3rem;
  color: #ffa500;
  margin-bottom: 20px;
`;

const ValueTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
`;

const ValueDescription = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const MissionVisionSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const MissionVisionCard = styled.div`
  background: white;
  padding: 50px 40px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const MissionVisionIcon = styled.div`
  font-size: 3.5rem;
  color: #ffa500;
  margin-bottom: 30px;
`;

const MissionVisionTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const MissionVisionText = styled.p`
  color: #666;
  line-height: 1.8;
  font-size: 1.1rem;
`;

const StatsSection = styled.div`
  background: #1a1a1a;
  padding: 80px 0;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
`;

const StatCard = styled.div`
  color: white;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #ffa500;
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  opacity: 0.9;
`;

const TeamSection = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const TeamTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffa500;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TeamDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
`;

const AboutUs = () => {
  const values = [
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "We continuously seek creative solutions and embrace new technologies to deliver cutting-edge results that exceed expectations."
    },
    {
      icon: <FaAward />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from initial concept to final delivery, ensuring superior quality outcomes."
    },
    {
      icon: <FaHandshake />,
      title: "Integrity",
      description: "We build trust through transparent communication, honest practices, and reliable partnerships with our clients and stakeholders."
    },
    {
      icon: <FaUsers />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and foster collaborative relationships that drive success for all parties involved."
    }
  ];

  return (
    <AboutContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>About Us</HeroTitle>
          <HeroSubtitle>
            Discover the story behind Perfection and our commitment to excellence in everything we do
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <ContentContainer>
          <StorySection>
            <StoryText>
              <SectionTitle>Our Story</SectionTitle>
              <StoryDescription>
                Founded with a vision to transform ideas into reality, Perfection has grown from a small startup to a leading company in our industry. Our journey began with a simple belief: that exceptional results come from combining innovative thinking with meticulous execution.
              </StoryDescription>
              <StoryDescription>
                Over the years, we have built a reputation for delivering high-quality solutions that not only meet but exceed our clients' expectations. Our team of dedicated professionals brings together diverse expertise and a shared commitment to excellence.
              </StoryDescription>
              <StoryDescription>
                Today, we continue to push boundaries, embrace new technologies, and create value for our clients while maintaining the core values that have guided us from the beginning.
              </StoryDescription>
            </StoryText>
            <StoryImage />
          </StorySection>

          <ValuesSection>
            <ValuesTitle>Our Core Values</ValuesTitle>
            <ValuesGrid>
              {values.map((value, index) => (
                <ValueCard key={index}>
                  <ValueIcon>{value.icon}</ValueIcon>
                  <ValueTitle>{value.title}</ValueTitle>
                  <ValueDescription>{value.description}</ValueDescription>
                </ValueCard>
              ))}
            </ValuesGrid>
          </ValuesSection>

          <MissionVisionSection>
            <MissionVisionCard>
              <MissionVisionIcon>
                <FaBullseye />
              </MissionVisionIcon>
              <MissionVisionTitle>Our Mission</MissionVisionTitle>
              <MissionVisionText>
                To deliver exceptional solutions that empower our clients to achieve their goals while fostering innovation, maintaining the highest quality standards, and building lasting partnerships based on trust and mutual success.
              </MissionVisionText>
            </MissionVisionCard>

            <MissionVisionCard>
              <MissionVisionIcon>
                <FaEye />
              </MissionVisionIcon>
              <MissionVisionTitle>Our Vision</MissionVisionTitle>
              <MissionVisionText>
                To be the leading provider of innovative solutions in our industry, recognized for our commitment to excellence, customer satisfaction, and positive impact on the communities we serve.
              </MissionVisionText>
            </MissionVisionCard>
          </MissionVisionSection>

          <TeamSection>
            <TeamTitle>Why Choose Perfection?</TeamTitle>
            <TeamDescription>
              At Perfection, we combine years of experience with fresh perspectives to deliver solutions that make a difference. Our team of experts is passionate about what they do and committed to helping you succeed. We believe that our success is measured by your success, and we work tirelessly to ensure that every project exceeds expectations.
            </TeamDescription>
          </TeamSection>
        </ContentContainer>
      </ContentSection>

      <StatsSection>
        <ContentContainer>
          <StatsGrid>
            <StatCard>
              <StatNumber>15+</StatNumber>
              <StatLabel>Years of Experience</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>500+</StatNumber>
              <StatLabel>Projects Completed</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>200+</StatNumber>
              <StatLabel>Happy Clients</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>50+</StatNumber>
              <StatLabel>Team Members</StatLabel>
            </StatCard>
          </StatsGrid>
        </ContentContainer>
      </StatsSection>
    </AboutContainer>
  );
};

export default AboutUs; 