import React from 'react';
import styled from 'styled-components';
import SocialSidebar from './SocialSidebar';

const OurServicesContainer = styled.div`
  background-color: #121212;
  color: white;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
`;

const HeaderSection = styled.div`
  padding: 180px 0 20px;
  text-align: center;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 120px 0 20px;
  }
  
  @media (max-width: 480px) {
    padding: 100px 0 15px;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 9rem;
  font-weight: 300;
  margin-bottom: 10px;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 3.5rem;
  }
  
  @media (max-width: 360px) {
    font-size: 2.8rem;
  }
`;

const OrangeText = styled.span`
  color: #ff6b35;
`;

const Divider = styled.hr`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  
  @media (max-width: 768px) {
    width: 85%;
  }
  
  @media (max-width: 480px) {
    width: 80%;
  }
`;

const SectionDivider = styled(Divider)`
  margin: 60px auto;
  
  @media (max-width: 768px) {
    margin: 40px auto;
  }
  
  @media (max-width: 480px) {
    margin: 30px auto;
  }
`;

const IntroText = styled.p`
  font-size: 1.25rem;
  max-width: 1000px;
  margin: 30px auto;
  line-height: 1.6;
  padding: 0 20px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 90%;
    margin: 25px auto;
    padding: 0 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    max-width: 95%;
    margin: 20px auto;
    padding: 0 10px;
    line-height: 1.5;
  }
`;

const ServicesGridTop = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px 100px;
  max-width: 1000px;
  margin: 60px auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    margin: 50px auto;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    margin: 40px auto;
    padding: 0 15px;
  }
  
  @media (max-width: 480px) {
    gap: 25px;
    margin: 30px auto;
    padding: 0 10px;
  }
`;

const ServiceItem = styled.div`
  padding: 0;
  cursor: pointer;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 15px;
    border: 1px solid rgba(255, 107, 53, 0.2);
    border-radius: 8px;
    background: rgba(255, 107, 53, 0.05);
    transition: all 0.3s ease;
    
    &:hover {
      border-color: rgba(255, 107, 53, 0.4);
      background: rgba(255, 107, 53, 0.1);
    }
  }
  
  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0;
  color: #ff6b35;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 360px) {
    font-size: 1.1rem;
  }
`;

const ServiceSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 15px;
  }
  
  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

const EventServiceSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 60px;
`;

const EventHeading = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  color: #ff6b35;
  margin-bottom: 30px;
  text-align: left;
  line-height: 1;
  
  @media (max-width: 992px) {
    font-size: 3.5rem;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 25px;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
`;

const EventContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const EventContent = styled.div`
  @media (max-width: 992px) {
    text-align: center;
  }
`;

const EventImage = styled.div`
  width: 100%;
  height: 350px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 992px) {
    height: 300px;
  }
  
  @media (max-width: 768px) {
    height: 250px;
  }
  
  @media (max-width: 480px) {
    height: 200px;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 25px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
`;

const EventServicesList = styled.div`
  margin-top: 20px;
`;

const EventServicesTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;

const EventServiceItem = styled.div`
  font-size: 1rem;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 6px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 5px;
  }
`;

const BrandingSection = styled.div`
  margin: 0 auto 60px;
  text-align: center;
`;

const BrandingHeading = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  color: #ff6b35;
  margin-bottom: 30px;
  
  @media (max-width: 992px) {
    font-size: 3.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 25px;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
`;

const BrandingDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0 auto;
  max-width: 900px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ConceptSection = styled.div`
  margin: 0 auto 60px;
  text-align: center;
`;

const ConceptHeading = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  color: #ff6b35;
  margin-bottom: 30px;
  
  @media (max-width: 992px) {
    font-size: 3.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 25px;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
`;

const ConceptImagesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 30px;
  
  @media (max-width: 768px) {
    gap: 15px;
  }
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const ConceptImage = styled.div`
  width: 100%;
  height: 220px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 180px;
  }
  
  @media (max-width: 480px) {
    height: 150px;
  }
`;

const ServicesInclude = styled.div`
  text-align: center;
  margin: 25px auto;
  font-size: 1.1rem;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ConceptServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 0 auto;
  max-width: 800px;
  
  @media (max-width: 768px) {
    gap: 15px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const ServiceGridItem = styled.div`
  font-size: 1rem;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ExhibitionsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 0 auto 60px;
  align-items: start;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 20px;
    text-align: center;
  }
`;

const ExhibitionsContent = styled.div`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const ExhibitionsHeading = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  color: #ff6b35;
  margin-bottom: 30px;
  text-align: left;
  
  @media (max-width: 992px) {
    font-size: 3.5rem;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 25px;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
`;

const ExhibitionsImage = styled.div`
  width: 100%;
  height: 350px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  overflow: hidden;
  
  @media (max-width: 992px) {
    height: 300px;
    order: 1;
  }
  
  @media (max-width: 768px) {
    height: 250px;
  }
  
  @media (max-width: 480px) {
    height: 200px;
  }
`;

const OrangeGlow = styled.div`
  position: fixed;
  width: 600px;
  height: 350px;
  background: radial-gradient(ellipse at right top, 
    rgba(255, 230, 100, 0.9) 0%, 
    rgba(255, 180, 80, 0.8) 15%, 
    rgba(255, 140, 60, 0.7) 30%, 
    rgba(255, 107, 53, 0.5) 50%,
    rgba(255, 107, 53, 0.3) 70%,
    rgba(255, 107, 53, 0) 90%);
  border-radius: 250px 250px 0 0;
  top: 10%;
  left: 65%;
  transform: translateX(-60%);
  z-index: 0;
  pointer-events: none;
  opacity: 0.9;
  filter: blur(30px);
  
  @media (max-width: 768px) {
    width: 400px;
    height: 250px;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.6;
  }
  
  @media (max-width: 480px) {
    width: 300px;
    height: 200px;
    opacity: 0.4;
  }
`;

const OurServices = () => {
  return (
    <OurServicesContainer>
      <OrangeGlow />
      
      <HeaderSection>
        <HeaderTitle>
          <OrangeText>Our</OrangeText> Services
        </HeaderTitle>
        <Divider />
        <IntroText>
          We've earned our reputation through distinctive concept development, flawless execution, expert event management, and a sharp eye for detail. Our core strengths lie in the following services we offer:
        </IntroText>
      </HeaderSection>
      
      <ServicesGridTop>
        <ServiceItem>
          <ServiceTitle>Branding & positioning</ServiceTitle>
        </ServiceItem>
        <ServiceItem>
          <ServiceTitle>Onsite event Organization</ServiceTitle>
        </ServiceItem>
        <ServiceItem>
          <ServiceTitle>Digital & Social media marketing</ServiceTitle>
        </ServiceItem>
        <ServiceItem>
          <ServiceTitle>Concept design & printing</ServiceTitle>
        </ServiceItem>
        <ServiceItem>
          <ServiceTitle>Exhibitions</ServiceTitle>
        </ServiceItem>
        <ServiceItem>
          <ServiceTitle>Outdoor Advertising & Pr</ServiceTitle>
        </ServiceItem>
      </ServicesGridTop>
      
      <SectionDivider />
      
      <ServiceSection>
        <EventServiceSection>
          <EventHeading>
            Onsite<br/>
            Event<br/>
            Organization
          </EventHeading>
          <EventContainer>
            <EventContent>
              <ServiceDescription>
                At Perfection, we leverage our expertise in event management to design and execute impactful promotional events that spotlight brands and celebrate their achievements. Our approach aligns with strategic marketing goals, focusing on enhancing brand awareness and generating valuable business opportunities.
              </ServiceDescription>
              <EventServicesTitle>Our event services include:</EventServicesTitle>
              <EventServiceItem>Event and venue planning, production, and management</EventServiceItem>
              <EventServiceItem>Vehicle, product, and corporate launches</EventServiceItem>
              <EventServiceItem>Test drives and roadshows</EventServiceItem>
              <EventServiceItem>Product display stands</EventServiceItem>
              <EventServiceItem>Stage design and showroom decoration</EventServiceItem>
            </EventContent>
            <EventImage image="/assets/images/project-1.jpeg" />
          </EventContainer>
        </EventServiceSection>
        
        <SectionDivider />
        
        <BrandingSection>
          <BrandingHeading>Branding & Positioning</BrandingHeading>
          <BrandingDescription>
            We craft distinctive brand identities that set your business apart from the competition. Our strategy is designed to align with your marketing goals—helping you attract new customers while reinforcing loyalty among your current audience. By developing personalized and targeted approaches, we ensure your brand connects meaningfully with people wherever they are. The result: a brand identity that is unique, authentic, and memorable.
          </BrandingDescription>
        </BrandingSection>
        
        <SectionDivider />
        
        <ConceptSection>
          <ConceptHeading>Concept Design & Printing</ConceptHeading>
          <ConceptImagesGrid>
            <ConceptImage image="/assets/images/project-8.jpeg" />
            <ConceptImage image="/assets/images/project-9.jpeg" />
          </ConceptImagesGrid>
          <ServiceDescription style={{ marginTop: '25px' }}>
            At Perfection, our expert team begins by strategically outlining the creative framework to capture the full scope of your project. We then apply innovative design techniques to produce visually impactful content that aligns with your brand's marketing goals.
          </ServiceDescription>
          <ServicesInclude>Our Services Include:</ServicesInclude>
          <ConceptServicesGrid>
            <ServiceGridItem>Concept Development & Innovation</ServiceGridItem>
            <ServiceGridItem>Premium Quality Printing</ServiceGridItem>
            <ServiceGridItem>Creative Design Solutions</ServiceGridItem>
          </ConceptServicesGrid>
        </ConceptSection>
        
        <SectionDivider />
        
        <ExhibitionsSection>
          <ExhibitionsContent>
            <ExhibitionsHeading>Exhibitions</ExhibitionsHeading>
            <ServiceDescription>
              At Perfection, our expert team begins by strategically outlining the creative framework to capture the full scope of your project. 
            </ServiceDescription>
            <ServiceDescription>
              We then apply innovative design techniques to produce visually impactful content that aligns with your brand's marketing goals.
            </ServiceDescription>
            <ServicesInclude>Our Services Include:</ServicesInclude>
            <ServiceGridItem>Concept Development & Innovation</ServiceGridItem>
            <ServiceGridItem>Creative Design Solutions</ServiceGridItem>
            <ServiceGridItem>Premium Quality Printing</ServiceGridItem>
          </ExhibitionsContent>
          <ExhibitionsImage image="/assets/images/project-2.jpeg" />
        </ExhibitionsSection>
      </ServiceSection>

      <SocialSidebar />
    </OurServicesContainer>
  );
};

export default OurServices; 