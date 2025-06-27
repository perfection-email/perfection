import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FAQContainer = styled.section`
  padding: 100px 0;
  background: #f8f9fa;
`;

const FAQContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #666;
  margin-bottom: 60px;
  line-height: 1.6;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FAQItem = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const FAQQuestion = styled.div`
  padding: 25px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.1rem;
  color: #333;
  transition: background 0.3s ease;

  &:hover {
    background: #f8f9fa;
  }
`;

const FAQIcon = styled.div`
  color: #ffa500;
  font-size: 1rem;
`;

const FAQAnswer = styled.div`
  padding: ${props => props.isOpen ? '0 25px 25px 25px' : '0'};
  max-height: ${props => props.isOpen ? '200px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  color: #666;
  line-height: 1.6;
`;

const StartButton = styled(Link)`
  background: #ffa500;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  margin: 60px auto 0;
  text-decoration: none;
  text-align: center;
  width: fit-content;

  &:hover {
    background: #e69500;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 165, 0, 0.3);
  }
`;

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqs = [
    {
      question: "What services does Perfection offer?",
      answer: "We offer comprehensive exhibition booth design and execution, event management, corporate space setup, immersive experiences, display solutions, and interactive technologies."
    },
    {
      question: "Can I request a custom design?",
      answer: "Yes, we provide fully customized design solutions tailored to your vision and project requirements. Every project is unique and we work closely with you to bring your ideas to life."
    },
    {
      question: "How long does project execution take?",
      answer: "The timeline depends on the size and complexity of the project, but we always adhere to the agreed schedule. Typical projects range from 2-8 weeks depending on scope."
    },
    {
      question: "Do you operate only within the local area?",
      answer: "We serve clients both locally and internationally, with proven experience delivering projects across multiple countries and regions."
    },
    {
      question: "What makes Perfection different?",
      answer: "Extensive experience, a dedicated in-house team, a fully equipped production facility, and a firm commitment to quality and innovation set us apart from the competition."
    },
    {
      question: "How can I start working with you?",
      answer: "You can reach us through the contact form, phone, or email to discuss your requirements and schedule an initial consultation meeting."
    }
  ];

  return (
    <FAQContainer>
      <FAQContent>
        <SectionTitle>Answered Clearly</SectionTitle>
        <SectionSubtitle>
          We provide clear, reliable answers to the most common questions to ensure 
          a smooth and transparent experience
        </SectionSubtitle>
        
        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <FAQQuestion onClick={() => toggleItem(index)}>
                <span>{faq.question}</span>
                <FAQIcon>
                  {openItems[index] ? <FaMinus /> : <FaPlus />}
                </FAQIcon>
              </FAQQuestion>
              <FAQAnswer isOpen={openItems[index]}>
                {faq.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
        
        <StartButton to="/get-quote">Start Now</StartButton>
      </FAQContent>
    </FAQContainer>
  );
};

export default FAQ; 