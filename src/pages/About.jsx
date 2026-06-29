import React from "react";
import styled, { keyframes } from "styled-components";
import {
  Shield, Target, Eye, AlertTriangle, Search, Bug,
  Terminal, Activity, Hexagon
} from "lucide-react";
import { motion } from "framer-motion";
import Photo from '../assets/photo.png';

// === CSS Animatsiyalar ===
const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(400%); }
`;

const framePulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
`;

// === Styled Components ===
const Section = styled.section`
  padding: 120px 0;
  background-color: #000;
  color: #fff;
  font-family: 'Space Mono', monospace;
  overflow: hidden;
`;

const TitleWrapper = styled(motion.div)`
  border-left: 4px solid #fff;
  padding-left: 25px;
  margin-bottom: 50px;
  
  h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 900;
    text-transform: uppercase;
    margin: 0;
    line-height: 1;
    span { color: #444; }
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 25px;
  position: relative;
  overflow: hidden;

  h3 {
    font-size: 0.9rem;
    color: #fff;
    margin: 15px 0 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p {
    font-size: 0.8rem;
    color: #666;
    line-height: 1.6;
    margin: 0;
  }

  .icon { color: #444; transition: 0.3s; }

  &:hover {
    border-color: #fff;
    .icon { color: #fff; transform: scale(1.1); }
  }
`;

const PhotoContainer = styled(motion.div)`
  position: relative;
  z-index: 1;

  .main-img {
    position: relative;
    z-index: 2;
  }



 
`;

const DataOverlay = styled.div`
  position: absolute;
  top: 10px;
  left: -40px;
  transform: rotate(-90deg);
  font-size: 0.6rem;
  color: #333;
  letter-spacing: 5px;
`;

export default function About() {
  const services = [
    { icon: <Target />, title: "Penetration Testing", desc: "Network, web, and app assessment via industry-standard methodologies." },
    { icon: <Search />, title: "Vulnerability Assessment", desc: "Automated/manual scanning, risk prioritization, and remediation." },
    { icon: <Eye />, title: "Security Auditing", desc: "Code review, configuration auditing, and compliance assessment." },
    { icon: <AlertTriangle />, title: "Incident Response", desc: "Digital forensics, malware analysis, and breach investigation." }
  ];

  return (
    <Section>
      <div className="container">
        <div className="row g-5 align-items-center">

          {/* CHAP TARAF: MA'LUMOTLAR */}
          <div className="col-lg-7 order-2 order-lg-1">
            <TitleWrapper
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ fontSize: '0.7rem', color: '#555', letterSpacing: '4px' }}
              >
                [ OPERATOR_PROFILE_DECRYPTED ]
              </motion.span>
              <h1>SARDOR <br /> <span>SHOAKBAROV</span></h1>
              <p style={{ marginTop: '20px', color: '#888', maxWidth: '600px', lineHeight: '1.7' }}>
                A skilled cybersecurity professional experienced in assessing web application security and identifying security gaps. Adept at analyzing threat vectors and supporting incident response efforts to ensure robust system protection
              </p>
            </TitleWrapper>

            <InfoGrid>
              {services.map((s, i) => (
                <Card
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="icon">{React.cloneElement(s.icon, { size: 20 })}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </Card>
              ))}
            </InfoGrid>
          </div>

          {/* O'NG TARAF: RASM */}
          <div className="col-lg-5 order-1 order-lg-2">
            <PhotoContainer
            >
              <DataOverlay>RE_TEAM_OPERATOR_v8</DataOverlay>
              <img  width={"500px"} src={Photo} alt="Sardor S." className="main-img" />

           
            </PhotoContainer>
          </div>

        </div>
      </div>
    </Section>
  );
}