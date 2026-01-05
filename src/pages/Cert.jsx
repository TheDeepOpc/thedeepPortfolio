import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ExternalLink, Award, ShieldCheck, Zap } from "lucide-react";

const Section = styled.section`
  background: #000;
  color: #fff;
  padding: 10rem 2rem;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const GlitchTitle = styled(motion.h2)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -2px;
  margin: 0;
  color: #fff;
  span {
    -webkit-text-stroke: 1px #444;
    -webkit-text-fill-color: transparent;
  }
`;

const CertGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
`;

const CertItem = styled(motion.div)`
  background: #050505;
  border: 1px solid #111;
  padding: 2.5rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  cursor: pointer;

  &:hover {
    border-color: #fff;
    background: #0a0a0a;
    transform: translateX(20px);
    
    .icon-box {
      color: #fff;
      transform: rotate(360deg);
    }
    
    .view-btn {
      background: #fff;
      color: #000;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background: #fff;
    transform: scaleY(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleY(1);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    &:hover { transform: translateX(10px); }
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 768px) { gap: 1.5rem; }
`;

const IconBox = styled.div`
  color: #333;
  transition: all 0.8s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Info = styled.div`
  .year {
    font-family: 'Space Mono', monospace;
    font-size: 0.8rem;
    color: #555;
    margin-bottom: 0.5rem;
    display: block;
  }
  h3 {
    font-size: 1.6rem;
    font-weight: 800;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: -0.5px;
  }
  .org {
    color: #888;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 0.5rem;
    display: block;
  }
`;

const ViewButton = styled.a`
  width: 60px;
  height: 60px;
  border: 1px solid #222;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: 0.4s;
  text-decoration: none;

  @media (max-width: 768px) {
    width: 100%;
    height: 50px;
  }
`;

export default function Certificates() {
  const certs = [
    { title: "Cisco Ethical Hacker", org: "Cisco", year: "2025", link: "https://www.credly.com/badges/777ae72b-49df-4a0d-9a05-c3fd02644734/public_url" },
    { title: "Certified Red Team Analyst", org: "CyberWarfare Labs", year: "2025", link: "#" },
    { title: "Cisco Linux Essentials", org: "Cisco", year: "2025", link: "https://www.credly.com/badges/65024c1a-4c2d-4ea9-9d21-478db8994a76/public_url" },
    { title: "Certified Red Team Infra Dev", org: "CyberWarfare Labs", year: "2025", link: "https://labs.cyberwarfare.live/credential/achievement/690664425e19303aec1fef99" },
    { title: "Introduction to Cybersecurity", org: "Cisco", year: "2025", link: "https://www.credly.com/badges/89c6646e-df75-4266-9da8-818d1b796226/public_url" },

  ];

  // Animatsiya variantlari
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <Section id="certificates">
      <Container>
        <Header>
          <GlitchTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Proof_of <span>Competence</span>
          </GlitchTitle>
          <motion.p 
            style={{color: '#444', fontFamily: 'Space Mono', fontSize: '0.9rem'}}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            // LOGS: 6 VERIFIED ACHIEVEMENTS FOUND...
          </motion.p>
        </Header>

        <CertGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certs.map((c, i) => (
            <CertItem
              key={i}
              variants={itemVariants}
            >
              <Content>
                <IconBox className="icon-box">
                  {i % 2 === 0 ? <ShieldCheck size={32} /> : <Zap size={32} />}
                </IconBox>
                <Info>
                  <span className="year">[{c.year}]</span>
                  <h3>{c.title}</h3>
                  <span className="org">{c.org}</span>
                </Info>
              </Content>
              <ViewButton href={c.link} className="view-btn" target="_blank">
                <ExternalLink size={20} />
              </ViewButton>
            </CertItem>
          ))}
        </CertGrid>
      </Container>
    </Section>
  );
}