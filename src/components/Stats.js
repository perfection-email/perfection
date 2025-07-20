import React from 'react';
import styled from 'styled-components';

const StatsContainer = styled.section`
  background: #f8f9fa;
  padding: 80px 0;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
  
  @media (max-width: 480px) {
    padding: 50px 0;
  }
`;

const StatsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 0 15px;
  }
  
  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

const StatsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;

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

const StatsSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 50px;
    max-width: 90%;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 40px;
    max-width: 95%;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    margin-top: 50px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 25px;
    margin-top: 40px;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 30px 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
  
  @media (max-width: 768px) {
    padding: 25px 15px;
  }
  
  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #ffa500;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 8px;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 6px;
  }
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: #333;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Stats = () => {
  return (
    <StatsContainer>
      <StatsContent>
        <StatsTitle>From Concept to Completion Your Strategic Partner at Every Step</StatsTitle>
        
        <StatsGrid>
          <StatItem>
            <StatNumber>25+</StatNumber>
            <StatLabel>Years of Experience</StatLabel>
          </StatItem>
          
          <StatItem>
            <StatNumber>300+</StatNumber>
            <StatLabel>Team Members</StatLabel>
          </StatItem>
          
          <StatItem>
            <StatNumber>50,000+</StatNumber>
            <StatLabel>Projects Completed</StatLabel>
          </StatItem>
          
          <StatItem>
            <StatNumber>200,000+</StatNumber>
            <StatLabel>Executed Square Meters</StatLabel>
          </StatItem>
        </StatsGrid>
      </StatsContent>
    </StatsContainer>
  );
};

export default Stats; 