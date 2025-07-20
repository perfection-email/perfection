import React from 'react';
import styled from 'styled-components';

const PerfectionContainer = styled.section`
  background: #f8f9fa;
  padding: 100px 0;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 80px 0;
  }
  
  @media (max-width: 480px) {
    padding: 60px 0;
  }
`;

const PerfectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 50px;
    padding: 0 15px;
  }
  
  @media (max-width: 480px) {
    gap: 40px;
    padding: 0 10px;
  }
`;

const TextContent = styled.div`
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

const SectionDescription = styled.p`
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

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  @media (max-width: 768px) {
    text-align: left;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: #333;
  font-size: 1.1rem;

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
    flex-shrink: 0;
  }
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
    margin-bottom: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;

const VisualContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  
  @media (max-width: 768px) {
    height: 300px;
  }
  
  @media (max-width: 480px) {
    height: 250px;
  }
`;

const PerfectionText = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: #ffa500;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    letter-spacing: 1px;
  }
  
  @media (max-width: 360px) {
    font-size: 1.6rem;
  }
`;

const HexagonPattern = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  background-image: 
    radial-gradient(circle at 25% 25%, #ffa500 2px, transparent 2px),
    radial-gradient(circle at 75% 75%, #ffa500 2px, transparent 2px);
  background-size: 50px 50px;
  background-position: 0 0, 25px 25px;
  
  @media (max-width: 768px) {
    background-size: 40px 40px;
    background-position: 0 0, 20px 20px;
  }
  
  @media (max-width: 480px) {
    background-size: 30px 30px;
    background-position: 0 0, 15px 15px;
  }
`;

const HexagonShape = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: #ffa500;
  opacity: 0.1;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  animation: float 6s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }

  &:nth-child(2) {
    width: 150px;
    height: 150px;
    top: 50px;
    left: 100px;
    animation-delay: -2s;
  }

  &:nth-child(3) {
    width: 100px;
    height: 100px;
    bottom: 50px;
    right: 50px;
    animation-delay: -4s;
  }
  
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    
    &:nth-child(2) {
      width: 120px;
      height: 120px;
      top: 30px;
      left: 80px;
    }

    &:nth-child(3) {
      width: 80px;
      height: 80px;
      bottom: 30px;
      right: 30px;
    }
  }
  
  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
    
    &:nth-child(2) {
      width: 100px;
      height: 100px;
      top: 20px;
      left: 60px;
    }

    &:nth-child(3) {
      width: 60px;
      height: 60px;
      bottom: 20px;
      right: 20px;
    }
  }
`;

const Perfection = () => {
  return (
    <PerfectionContainer>
      <PerfectionContent>
        <TextContent>
          <SectionTitle>
            In Building Exhibitions We Are a Name You Can Trust
          </SectionTitle>
          <SectionDescription>
            We have been providing exhibition design and build services for over two decades, 
            establishing ourselves as a trusted partner for businesses looking to make an impact.
          </SectionDescription>
          <FeaturesList>
            <FeatureItem>Comprehensive project management</FeatureItem>
            <FeatureItem>Creative design solutions</FeatureItem>
            <FeatureItem>Quality construction and installation</FeatureItem>
            <FeatureItem>On-time delivery guarantee</FeatureItem>
            <FeatureItem>Post-event support and maintenance</FeatureItem>
          </FeaturesList>
        </TextContent>
        
        <VisualContent>
          <HexagonPattern />
          <HexagonShape />
          <HexagonShape />
          <HexagonShape />
          <PerfectionText>Perfection</PerfectionText>
        </VisualContent>
      </PerfectionContent>
    </PerfectionContainer>
  );
};

export default Perfection; 