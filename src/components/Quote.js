import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp, FaEnvelope, FaPhone, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';

const QuoteContainer = styled.div`
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

const HeroText = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.9);
`;

const ContentSection = styled.section`
  padding: 100px 0;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SupportSection = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const SupportTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffa500;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SupportText = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 40px;
`;

const ContactOptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
`;

const ContactOptionCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ContactIcon = styled.div`
  font-size: 2.5rem;
  color: #ffa500;
  margin-bottom: 20px;
`;

const ContactOptionTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
`;

const ContactOptionText = styled.p`
  color: #666;
  font-size: 1.1rem;
`;

const FormSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  margin-bottom: 100px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const FormImage = styled.div`
  background: url('/assets/images/contact.png');
  background-size: cover;
  background-position: center;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 992px) {
    height: 400px;
    margin-bottom: 30px;
  }
`;

const FormContainer = styled.div``;

const FormTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffa500;
  margin-bottom: 20px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FormText = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 30px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FormInput = styled.input`
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ffa500;
  }
`;

const FormSelect = styled.select`
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ffa500;
  }
`;

const FormTextarea = styled.textarea`
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ffa500;
  }
`;

const FormButton = styled.button`
  background: #ffa500;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-top: 15px;

  &:hover {
    background: #e69500;
  }
`;

const SocialSection = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const SocialTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #ffa500;
  margin-bottom: 30px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #ffa500;
  color: white;
  border-radius: 50%;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: #e69500;
  }
`;

const Quote = () => {
  const contactOptions = [
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      text: "+966555037548"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      text: "info@perfection.com"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      text: "920004371"
    }
  ];

  const serviceOptions = [
    "Exhibitions",
    "Technology",
    "Events",
    "Environments",
    "Immersive Experiences",
    "Display Systems"
  ];

  return (
    <QuoteContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Contact</HeroTitle>
          <HeroText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</HeroText>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <ContentContainer>
          <SupportSection>
            <SupportTitle>Perfection Team Is Ready to Support You</SupportTitle>
            <SupportText>
              Whether you're already using our services or simply have a question, our team is always here to help — ready to respond and provide the right support as quickly as possible.
            </SupportText>
            <ContactOptionsGrid>
              {contactOptions.map((option, index) => (
                <ContactOptionCard key={index}>
                  <ContactIcon>{option.icon}</ContactIcon>
                  <ContactOptionTitle>{option.title}</ContactOptionTitle>
                  <ContactOptionText>{option.text}</ContactOptionText>
                </ContactOptionCard>
              ))}
            </ContactOptionsGrid>
          </SupportSection>

          <FormSection>
            <FormImage />
            <FormContainer>
              <FormTitle>The Perfection Team Is Ready to Support You</FormTitle>
              <FormText>
                Whether you're already using our services or simply have a question, our team is always here to help — ready to respond and provide the right support as quickly as possible.
              </FormText>
              <Form>
                <FormRow>
                  <FormInput type="text" placeholder="First Name" required />
                  <FormInput type="text" placeholder="Last Name" required />
                </FormRow>
                <FormInput type="email" placeholder="Email Address" required />
                <FormInput type="tel" placeholder="Phone Number" required />
                <FormInput type="text" placeholder="Company Name" />
                <FormInput type="file" />
                <FormSelect>
                  <option value="" disabled selected>Select a Service</option>
                  {serviceOptions.map((option, index) => (
                    <option key={index} value={option.toLowerCase().replace(/\s+/g, '-')}>{option}</option>
                  ))}
                </FormSelect>
                <FormTextarea placeholder="Your Message" required />
                <div>
                  {/* Placeholder for reCAPTCHA */}
                  <div style={{ marginBottom: '15px' }}>
                    <input type="checkbox" id="recaptcha" />
                    <label htmlFor="recaptcha" style={{ marginLeft: '10px', fontSize: '0.9rem', color: '#666' }}>
                      I'm not a robot
                    </label>
                  </div>
                </div>
                <FormButton type="submit">Send Message</FormButton>
              </Form>
            </FormContainer>
          </FormSection>

          <SocialSection>
            <SocialTitle>Follow Us and Be the First to Know What's New at Perfection</SocialTitle>
            <SocialIcons>
              <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </SocialIcon>
              <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialIcon>
              <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialIcon>
            </SocialIcons>
          </SocialSection>
        </ContentContainer>
      </ContentSection>
    </QuoteContainer>
  );
};

export default Quote; 