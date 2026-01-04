import React from "react";
import styled, { keyframes } from "styled-components";
import { Github, Linkedin, Send, Mail, ShieldCheck, Terminal, Clock, MapPin } from "lucide-react";

// === Animatsiya ===
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// === Styled Components ===
const PageWrapper = styled.div`
  padding: 100px 0;
  color: #fff;
  margin-top: 50px;
  font-family: 'Inter', sans-serif;
`;

const TextBlock = styled.div`
  animation: ${fadeIn} 1s ease-out;
  @media (max-width: 992px) { text-align: center; margin-bottom: 4rem; }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(to right, #fff, #666);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
`;

const ProtocolSection = styled.div`
  margin-top: 2.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-left: 3px solid #fff;
  border-radius: 0 10px 10px 0;
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  @media (max-width: 576px) { grid-template-columns: 1fr; }
`;

const SocialCard = styled.a`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.5rem;
  border-radius: 16px;
  text-decoration: none !important;
  transition: all 0.4s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.4);
  }

  h3 { color: #fff; font-size: 1.2rem; margin: 10px 0 5px; }
  p { color: #666; font-size: 0.85rem; margin: 0; }
  svg { color: #fff; opacity: 0.8; }
`;

const InfoBar = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.01);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);

  .info-item {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    h5 { font-size: 0.9rem; color: #fff; margin-bottom: 4px; text-transform: uppercase; }
    p { font-size: 0.85rem; color: #777; margin: 0; line-height: 1.5; }
    svg { color: #888; margin-top: 3px; }
  }
`;

export default function Contact() {
  return (
    <PageWrapper>
      <div className="container mt-5">
        <div className="row align-items-center mt-5">
          
          {/* Chap tomon: Strategik ma'lumotlar */}
          <div className="col-lg-5">
            <TextBlock>
              <Title>Contact_</Title>
              <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.7' }}>
                Xavfsizlik bo'yicha konsultatsiya, hamkorlik yoki Red Team operatsiyalari bo'yicha professional so'rovlarni qabul qilaman.
              </p>

              <ProtocolSection>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <ShieldCheck size={18} color="#fff" />
                  <span style={{ fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Communication Protocol</span>
                </div>
                <ul style={{ color: '#888', fontSize: '0.85rem', paddingLeft: '18px', margin: 0 }}>
                  <li>Initial discovery call for new projects.</li>
                  <li>NDAs required for all technical audits.</li>
                  <li>Secure hand-off for all sensitive data.</li>
                </ul>
              </ProtocolSection>

              <div style={{ marginTop: '2.5rem' }}>
                
  
              </div>
            </TextBlock>
          </div>

          {/* O'ng tomon: Social Grid va Stats */}
          <div className="col-lg-7">
            <SocialGrid>
              <SocialCard href="https://linkedin.com/in/callmethedeep" target="_blank">
                <Linkedin size={24} />
                <h3>LinkedIn</h3>
                <p>Corporate network & official CV</p>
              </SocialCard>

              <SocialCard href="https://github.com/TheDeepOpc" target="_blank">
                <Github size={24} />
                <h3>GitHub</h3>
                <p>Security tools & open research</p>
              </SocialCard>

              <SocialCard href="https://t.me/callmethedeep" target="_blank">
                <Send size={24} />
                <h3>Telegram</h3>
                <p>End-to-end encrypted chat</p>
              </SocialCard>

              <SocialCard href="mailto:sardordev02@gmail.com">
                <Mail size={24} />
                <h3>Email</h3>
                <p>Direct professional inquiries</p>
              </SocialCard>
            </SocialGrid>

            <InfoBar>
              <div className="info-item">
                <Clock size={20} />
                <div>
                  <h5>Availability</h5>
                  <p>Mon — Fri, 09:00 - 00:00<br />(GMT +5)</p>
                </div>
              </div>
              <div className="info-item">
                <MapPin size={20} />
                <div>
                  <h5>Location</h5>
                  <p>Remote / Global Operations<br />Based in Tashkent, UZ</p>
                </div>
              </div>
            </InfoBar>

            <div style={{ marginTop: '2.5rem', textAlign: 'right', opacity: 0.4 }}>
              <p style={{ fontSize: '0.75rem', letterSpacing: '2px' }}>
                TheDEEP // 2024
              </p>
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}