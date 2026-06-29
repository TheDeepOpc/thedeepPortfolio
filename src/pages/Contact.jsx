import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Github, Linkedin, Send, Mail, ShieldCheck, Clock, MapPin } from "lucide-react";

// === Dizayn Elementlari ===
const Section = styled.section`
  background: #000;
  color: #fff;
  /* Mobil uchun paddingni kamaytirdik */
  padding: clamp(4rem, 10vh, 10rem) 1rem;
  font-family: 'Inter', sans-serif;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 10rem 2rem;
  }
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr; /* Mobil uchun bitta ustun */
  gap: 3rem;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1.2fr;
    gap: 5rem;
  }
`;

const SideInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

const GlitchTitle = styled.h2`
  font-size: clamp(2.5rem, 8vw, 6rem); /* Mobil uchun minimal o'lchamni kichraytirdik */
  font-weight: 900;
  line-height: 0.9;
  text-transform: uppercase;
  letter-spacing: -2px;
  margin-bottom: 1.5rem;
  
  span {
    display: block;
    -webkit-text-stroke: 1px #fff;
    -webkit-text-fill-color: transparent;
  }

  @media (min-width: 768px) {
    letter-spacing: -3px;
    margin-bottom: 2rem;
  }
`;

const ProtocolBox = styled(motion.div)`
  background: #050505;
  border: 1px solid #111;
  border-left: 4px solid #fff;
  padding: 1.5rem; /* Mobil uchun kichikroq padding */
  position: relative;
  
  &::before {
    content: "SECURITY_PROTOCOL_V2";
    position: absolute;
    top: -10px;
    right: 15px;
    background: #000;
    padding: 0 10px;
    font-family: 'Space Mono', monospace;
    font-size: 0.6rem;
    color: #444;
  }

  @media (min-width: 768px) {
    padding: 2.5rem;
    &::before {
        right: 20px;
        font-size: 0.7rem;
    }
  }
`;

const SocialGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr; /* Mobil uchun bitta ustun */
  gap: 1rem;
  
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`;

const SocialCard = styled(motion.a)`
  background: #050505;
  border: 1px solid #111;
  padding: 1.5rem;
  text-decoration: none !important;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);

  svg { color: #444; transition: 0.4s; width: 24px; height: 24px; }
  h3 { color: #fff; font-size: 1.1rem; font-weight: 800; margin: 0; text-transform: uppercase; }
  p { color: #666; font-size: 0.7rem; margin: 0; text-transform: uppercase; letter-spacing: 1px; }

  @media (min-width: 768px) {
    padding: 2.5rem;
    svg { width: 28px; height: 28px; }
    h3 { font-size: 1.3rem; }
    p { font-size: 0.8rem; }
  }

  &:hover {
    background: #fff;
    border-color: #fff;
    transform: translateY(-5px);

    svg { color: #000; transform: scale(1.1); }
    h3 { color: #000; }
    p { color: #333; }
  }
`;

const SystemStatus = styled(motion.div)`
  margin-top: 2rem;
  border-top: 1px solid #111;
  padding-top: 2rem;
  display: grid;
  grid-template-columns: 1fr; /* Mobil uchun elementlarni ustma-ust qo'yamiz */
  gap: 1.5rem;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 3rem;
    padding-top: 3rem;
  }
`;

const StatusItem = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
  
  .label {
    font-family: 'Space Mono', monospace;
    font-size: 0.7rem;
    color: #444;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  
  .value {
    font-size: 0.85rem;
    color: #fff;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    .value { font-size: 0.9rem; }
  }
`;

// === Animatsiya Variantlari ===
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        {/* Chap tomon: Strategik Ma'lumotlar */}
        <SideInfo
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <GlitchTitle>
              Establish<span>Uplink_</span>
            </GlitchTitle>
            <p style={{ color: '#666', fontSize: '1rem', maxWidth: '450px', marginBottom: '2rem' }}>
              I accept professional inquiries regarding security consulting or Red Team operations.
            </p>

            <ProtocolBox
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                <ShieldCheck size={18} color="#fff" />
                <span style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Comm_Protocol</span>
              </div>
              <ul style={{ color: '#888', fontSize: '0.8rem', paddingLeft: '1.2rem', margin: 0, listStyleType: 'square' }}>
                <li style={{ marginBottom: '8px' }}>Initial discovery call for new projects.</li>
                <li style={{ marginBottom: '8px' }}>NDAs required for all technical audits.</li>
                <li>Secure hand-off for all sensitive data.</li>
              </ul>
            </ProtocolBox>
          </div>

          <SystemStatus>
            <StatusItem>
              <Clock size={18} color="#444" />
              <div>
                <div className="label">Availability</div>
                <div className="value">MON-FRI / 09:00-00:00</div>
              </div>
            </StatusItem>
            <StatusItem>
              <MapPin size={18} color="#444" />
              <div>
                <div className="label">Location</div>
                <div className="value">TASHKENT / REMOTE</div>
              </div>
            </StatusItem>
          </SystemStatus>
        </SideInfo>

        {/* O'ng tomon: Social Grid */}
        <SocialGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SocialCard href="https://linkedin.com/in/callmethedeep" target="_blank" variants={itemVariants}>
            <Linkedin />
            <h3>LinkedIn</h3>
            <p>Corporate_Network</p>
          </SocialCard>

          <SocialCard href="https://github.com/TheDeepOpc" target="_blank" variants={itemVariants}>
            <Github />
            <h3>GitHub</h3>
            <p>Security_Research</p>
          </SocialCard>

          <SocialCard href="https://t.me/wsync" target="_blank" variants={itemVariants}>
            <Send />
            <h3>Telegram</h3>
            <p>Encrypted_Chat</p>
          </SocialCard>

          <SocialCard href="mailto:sardordev02@gmail.com" variants={itemVariants}>
            <Mail />
            <h3>Email</h3>
            <p>Direct_Inquiry</p>
          </SocialCard>
          
          <div style={{ gridColumn: '1 / -1', textAlign: 'right', marginTop: '1.5rem' }}>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.3 }}
              style={{ fontSize: '0.6rem', letterSpacing: '3px', fontFamily: 'Space Mono' }}
            >
              [ TRANSMISSION_END // 2026 ]
            </motion.p>
          </div>
        </SocialGrid>
      </Container>
    </Section>
  );
}