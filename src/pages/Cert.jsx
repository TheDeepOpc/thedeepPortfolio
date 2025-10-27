import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Award } from "lucide-react";

// === Animations ===
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

const bookTilt = keyframes`
  0% { transform: perspective(800px) rotateY(0deg); }
  50% { transform: perspective(800px) rotateY(10deg); }
  100% { transform: perspective(800px) rotateY(0deg); }
`;

const modalFade = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`;

// === Styled Components ===
const Page = styled.section`
  background: #0a0a0a;
  color: #fff;
  min-height: 100vh;
  padding: 4rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
  position: relative;
  animation: ${fadeIn} 1s ease-out;
  &:after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background: #e0e0e0;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  color: #b0b0b0;
  margin-bottom: 2rem;
  font-weight: 400;
  text-align: center;
  max-width: 600px;
  animation: ${fadeIn} 1.3s ease-out;
`;

const CertificateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const CertificateCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  transform: perspective(800px);
  animation: ${fadeIn} 1.5s ease-out;
  cursor: pointer;
  &:hover {
    transform: perspective(800px) translateY(-5px);
    animation: ${bookTilt} 2s ease-in-out infinite;
  }
  svg {
    color: #e0e0e0;
    width: 40px;
    height: 40px;
    margin-bottom: 1rem;
  }
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.1rem;
    color: #fff;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 0.9rem;
    color: #b0b0b0;
    margin-bottom: 0.5rem;
  }
  span {
    font-size: 0.85rem;
    color: #b0b0b0;
    font-style: italic;
  }
`;

const BookSpine = styled.div`
  position: absolute;
  left: -2px;
  top: 0;
  width: 8px;
  height: 100%;
  background: #e0e0e0;
  border-radius: 4px 0 0 4px;
  box-shadow: inset -2px 0 5px rgba(0, 0, 0, 0.2);
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${modalFade} 0.3s ease-out;
`;

const ModalContent = styled.div`
  background: #0a0a0a;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 2rem;
  max-width: 800px;
  width: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 100%;
    max-height: 500px;
    object-fit: contain;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1rem;
    color: #b0b0b0;
    text-align: center;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: #e0e0e0;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #fff;
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
  animation: ${fadeIn} 1.7s ease-out;
  &:hover {
    background: #e0e0e0;
    color: #0a0a0a;
  }
`;

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "Cisco Ethical Hacker",
      organization: "Cisco",
      date: "2025",
      description: "Comprehensive knowledge of ethical hacking principles and practices.",
      image: "src/assets/certs/ethical.jpg",
    },
    {
      title: "Cisco Linux Essentials",
      organization: "Cisco",
      date: "2025",
      description: "Fundamental skills in Linux system administration and command-line usage.",
      image: "src/assets/certs/linuxes.jpg",
    },
    {
      title: "Palo Alto Networks Certified Cybersecurity Practitioner",
      organization: "Palo Alto Networks",
      date: "2025",
      description: "Foundational knowledge in cybersecurity and risk management.",
      image: "src/assets/certs/panccp.jpg",
    },
      {
      title: "Cisco Introduction to Cybersecurity",
      organization: "Cisco",
      date: "2025",
      description: "Basic understanding of cybersecurity concepts and best practices.",
      image: "src/assets/certs/intro.jpg",
    },
    {
      title: "Palo Alto Networks Certified Network Security Fundamentals",
      organization: "Palo Alto Networks",
      date: "2025",
      description: "Advanced skills in network security and threat prevention.",
      image: "src/assets/certs/netsec.jpg",
    },
    {
      title: "Palo Alto Networks  Endpoint Security",
      organization: "Palo Alto Networks",
      date: "2025",
      description: "Hands-on expertise in endpoint protection and security management.",
      image: "src/assets/certs/endpoint.jpg",
    },
   
  ];

  return (
  <div className="Page">
      <Page>
      <Container>
        <Title>Certificates</Title>
        <Subtitle>
          A curated collection of my professional certifications, presented like books in a library.
        </Subtitle>
        <CertificateGrid>
          {certificates.map((cert, index) => (
            <CertificateCard key={index} onClick={() => setSelectedCert(cert)}>
              <BookSpine />
              <img src={cert.image} alt={cert.title} />
              <Award />
              <h3>{cert.title}</h3>
              <p>{cert.organization}</p>
              <span>{cert.date}</span>
            </CertificateCard>
          ))}
        </CertificateGrid>
        <CTAButton onClick={() => window.location.href = '#contact'}>
          Connect for Collaboration
        </CTAButton>
        {selectedCert && (
          <Modal onClick={() => setSelectedCert(null)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={() => setSelectedCert(null)}>×</CloseButton>
              <img src={selectedCert.image} alt={selectedCert.title} />
              <h3>{selectedCert.title}</h3>
              <p>{selectedCert.description}</p>
            </ModalContent>
          </Modal>
        )}
      </Container>
    </Page>
  </div>
  );
}