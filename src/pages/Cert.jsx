import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Award, X } from "lucide-react";

// === Fade Animations ===
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.95); }
`;

// === Layout ===
const Page = styled.section`
  background: #000;
  color: #fff;
  min-height: 100vh;
  padding: 4rem 1rem;
  display: flex;
  justify-content: center;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

// === Header ===
const Header = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  letter-spacing: -0.5px;

  &::after {
    content: '';
    display: block;
    width: 48px;
    height: 2px;
    background: #fff;
    margin: 0.75rem auto 0;
  }
`;

const Subtitle = styled.p`
  font-size: 1.05rem;
  color: #bbb;
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.6;
`;

// === Grid ===
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.75rem;
  width: 100%;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

// === Certificate Card ===
const Card = styled.div`
  background: #0f0f0f;
  border: 2px solid #2a2a2a;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: border 0.3s ease, transform 0.2s ease;
  display: flex;
    flex-direction: column;

  &:hover {
border:2px solid white;  
  }

  img {
    width: 100%;
    height: 230px;
    object-fit: cover;
    transition: filter 0.3s ease;
  }


`;

const CardContent = styled.div`
  padding: 1.25rem;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  color: #fff;
  margin: 0 0 0.5rem;
  line-height: 1.4;
`;

const CardOrg = styled.p`
  font-size: 0.95rem;
  color: #ccc;
  margin: 0 0 0.25rem;
  font-weight: 500;
`;

const CardDate = styled.span`
  font-size: 0.85rem;
  color: #999;
  font-style: italic;
`;

// === Modal Overlay (Fade) ===
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
  backdrop-filter: blur(6px);
  animation: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)} 0.3s ease-out forwards;
`;

// === Modal Box ===
const ModalBox = styled.div`
  background: #0a0a0a;
  border: 1px solid #333;
  border-radius: 14px;
  max-width: 750px;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);

  @media (min-width: 601px) and (max-width: 900px) {
    max-width: 80%;
  }

  @media (max-width: 600px) {
    max-width: 95%;
    margin: 1rem;
  }
`;

const ModalHeader = styled.div`
  padding: 1.75rem 2rem 1rem;
  border-bottom: 1px solid #222;
  position: relative;
`;

const ModalTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
  line-height: 1.3;
  padding-right: 2.5rem;
`;

const ModalSubtitle = styled.p`
  font-size: 1rem;
  color: #aaa;
  margin: 0.5rem 0 0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.75rem;
  right: 2rem;
  background: #222;
  border: none;
  color: #ccc;
  cursor: pointer;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  z-index: 10;

  &:hover {
    background: #fff;
    color: #000;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  background: #111;
  padding: 1.5rem;
`;

const ModalBody = styled.div`
  padding: 1.5rem 2rem 2rem;
`;

const ModalDescription = styled.p`
  font-size: 1.05rem;
  color: #ddd;
  line-height: 1.7;
  margin: 0;
  text-align: center;
`;


// === Component ===
export default function Certificates() {
  const [selected, setSelected] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = (cert) => {
    setSelected(cert);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelected(null);
      setIsClosing(false);
    }, 300); // Animatsiya tugaguncha kutish
  };

  const certificates = [
    {
      title: "Cisco Ethical Hacker",
      org: "Cisco",
      date: "2025",
      desc: "Certified expertise in ethical hacking methodologies, penetration testing, and vulnerability assessment.",
      img: "src/assets/certs/ethical.jpg",
    },
    {
      title: "Cisco Linux Essentials",
      org: "Cisco",
      date: "2025",
      desc: "Proficiency in Linux command-line operations, system administration, and scripting fundamentals.",
      img: "src/assets/certs/linuxes.jpg",
    },
    {
      title: "Palo Alto Networks Certified Cybersecurity Practitioner",
      org: "Palo Alto Networks",
      date: "2025",
      desc: "Validated skills in cybersecurity fundamentals, risk management, and threat detection strategies.",
      img: "src/assets/certs/panccp.jpg",
    },
    {
      title: "Cisco Introduction to Cybersecurity",
      org: "Cisco",
      date: "2025",
      desc: "Core understanding of cybersecurity principles, attack vectors, and defense mechanisms.",
      img: "src/assets/certs/intro.jpg",
    },
    {
      title: "Palo Alto Networks Certified Network Security Fundamentals",
      org: "Palo Alto Networks",
      date: "2025",
      desc: "Advanced knowledge of next-generation firewalls, network segmentation, and secure connectivity.",
      img: "src/assets/certs/netsec.jpg",
    },
    {
      title: "Palo Alto Networks Endpoint Security",
      org: "Palo Alto Networks",
      date: "2025",
      desc: "Expertise in endpoint protection platforms, behavioral analysis, and incident response.",
      img: "src/assets/certs/endpoint.jpg",
    },
    
    
  ];

  return (
 <div className="Page">
     <Page>
      <Container>
        <Header>
          <Title>Professional Certificates</Title>
          <Subtitle>
            Industry-recognized certifications validating expertise in cybersecurity, networking, and systems administration.
          </Subtitle>
        </Header>

        <Grid >
          {certificates.map((cert, i) => (
            <Card data-aos="fade-up" data-aos-duration="2000" data-aos-delay={1000 / (2/i)} key={i} onClick={() => openModal(cert)}>
              <img src={cert.img} alt={cert.title} />
              <CardContent>
                <Award size={30} className="mx-auto mb-2 " color="#fff"  />
                <CardTitle>{cert.title}</CardTitle>
                <CardOrg>{cert.org}</CardOrg>
                <CardDate>{cert.date}</CardDate>
              </CardContent>
            </Card>
          ))}
        </Grid>

   

        {/* Fade Modal */}
        {selected && (
          <ModalOverlay isClosing={isClosing} onClick={closeModal}>
            <ModalBox onClick={(e) => e.stopPropagation()}>
              <ModalHeader>
                <CloseButton onClick={closeModal}>
                  <X />
                </CloseButton>
                <ModalTitle>{selected.title}</ModalTitle>
                <ModalSubtitle>
                  {selected.org} • {selected.date}
                </ModalSubtitle>
              </ModalHeader>

              <ModalImage src={selected.img} alt={selected.title} />

              <ModalBody>
                <ModalDescription>{selected.desc}</ModalDescription>
              </ModalBody>
            </ModalBox>
          </ModalOverlay>
        )}
      </Container>
    </Page>
 </div>
  );
}