import React from "react";
import styled, { keyframes } from "styled-components";
import { Shield, Code2, Cpu, Network, Database, Lock } from "lucide-react";
import Photo from '../assets/photo.jpeg';
// === Animations ===
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;


const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  animation: ${fadeIn} 1.3s ease-out;
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.8rem;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 50px;
    height: 2px;
    background: #e0e0e0;
    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Subtitle = styled.h2`
  font-size: 1.1rem;
  color: #b0b0b0;
  margin-bottom: 1.5rem;
  font-weight: 400;
`;

const Paragraph = styled.p`
  color: #d0d0d0;
  line-height: 1.7;
  font-size: 16px;
  max-width: 600px;
  margin-bottom: 2rem;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 700px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  &:hover {
    transform: translateY(-5px);
  }
  svg {
    color: #e0e0e0;
    width: 32px;
    height: 32px;
    margin-bottom: 0.8rem;
  }
  h3 {
    font-size: 1rem;
    color: #fff;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 0.9rem;
    color: #b0b0b0;
  }
`;

const Quote = styled.div`
  margin-top: 2rem;
  max-width: 600px;
  padding: 1rem;
  border-left: 2px solid #e0e0e0;
  @media (max-width: 768px) {
    border-left: none;
    border-top: 2px solid #e0e0e0;
  }
  p {
    font-style: italic;
    color: #b0b0b0;
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const CTAButton = styled.button`
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: #fff;
  background: transparent;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #e0e0e0;
    color: #0a0a0a;
  }
`;

const HighlightSection = styled.div`
  margin-top: 2rem;
  max-width: 600px;
  h3 {
    font-size: 1.2rem;
    color: #fff;
    margin-bottom: 1rem;
  }
  p {
    font-size: 0.9rem;
    color: #b0b0b0;
    line-height: 1.6;
  }
`;

export default function About() {
  return (
    <>
      <br /><br />
      <div className="Page">
        <div className="container">
          <div className="row d-flex ">
            <div className="col-lg-6 w-100 mt-5">
              <TextBlock>
                <Title>Sardor Shoakbarov</Title>
                <Subtitle>Software Engineer | Ethical Hacker | Problem Solver</Subtitle>
                <Paragraph>
He designs and develops secure, high-performance web applications while fortifying digital systems against vulnerabilities. His work blends technical precision with creative solutions to deliver reliable and innovative outcomes.                </Paragraph>
                <InfoGrid>
                  <InfoCard>
                    <Code2 />
                    <h3>Web Engineering</h3>
                    <p>Building scalable and secure web applications with modern frameworks.</p>
                  </InfoCard>
                  <InfoCard>
                    <Shield />
                    <h3>Ethical Hacking</h3>
                    <p>Identifying and mitigating risks to protect digital ecosystems.</p>
                  </InfoCard>
                  <InfoCard>
                    <Cpu />
                    <h3>AI & Automation</h3>
                    <p>Creating intelligent tools to streamline processes.</p>
                  </InfoCard>
                  <InfoCard>
                    <Network />
                    <h3>Penetration Testing</h3>
                    <p>Simulating attacks to strengthen system defenses.</p>
                  </InfoCard>
                  <InfoCard>
                    <Database />
                    <h3>Data Security</h3>
                    <p>Ensuring robust protection for sensitive information.</p>
                  </InfoCard>
                  <InfoCard>
                    <Lock />
                    <h3>Cryptography</h3>
                    <p>Implementing secure encryption for data integrity.</p>
                  </InfoCard>
                </InfoGrid>
                <HighlightSection>
                  <h3>The Deepest Thoughts</h3>
                  <p>
With a deep passion for technology and security, he believes that every system has a story — one that must be understood before it can be protected. His philosophy is simple: solve complex problems with clarity, responsibility, and precision.                  </p>
                </HighlightSection>
                <Quote>
                  <p>”The Deepest Understanding Comes from Empathy and Insight.”</p>
                </Quote>
                
              </TextBlock>
          
                 </div>
              <div className="col-lg-6">
                <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay="600" className="col-lg-6">




                </div>

              </div>
         
          </div>

        </div>
      </div><br /><br /><br />
    </>
  );
}