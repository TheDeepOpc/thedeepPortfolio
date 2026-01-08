import React, { useEffect } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { Shield, Terminal, Globe, Zap, Cpu, Code, PenTool, ExternalLink } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const GlobalStyle = createGlobalStyle`
  body { background-color: #000; margin: 0; padding: 0; overflow-x: hidden; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #000; }
  ::-webkit-scrollbar-thumb { background: #444; }
  ::-webkit-scrollbar-thumb:hover { background: #fff; }
`;

const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const scanline = keyframes`
  0% { bottom: 100%; }
  80% { bottom: 100%; }
  100% { bottom: 0%; }
`;

const Page = styled.section`
  background: #000;
  color: #fff;
  padding: 8rem 2rem;
  font-family: 'Inter', -apple-system, sans-serif;
  position: relative;
`;

const HeroSection = styled.div`
  max-width: 1200px;
  margin: 0 auto 6rem auto;
  border-left: 3px solid #fff;
  padding-left: 3rem;

  @media (max-width: 768px) {
    padding-left: 1.5rem;
    margin-bottom: 4rem;
  }
`;

const Title = styled.h1`
  font-size: clamp(3.5rem, 12vw, 8rem);
  font-weight: 900;
  text-transform: uppercase;
  line-height: 0.85;
  margin: 0;
  letter-spacing: -5px;
  
  span {
    display: block;
    -webkit-text-stroke: 1.5px #fff;
    -webkit-text-fill-color: transparent;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  max-width: 650px;
  color: #888;
  margin-top: 2.5rem;
  line-height: 1.6;
  letter-spacing: 0.02em;
`;

const LangWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
  flex-wrap: wrap;
`;

const LangCard = styled.div`
  border: 1px solid #333;
  padding: 0.8rem 1.5rem;
  font-weight: 700;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s !important;
  
  &:hover {
    background: #fff;
    color: #000;
    border-color: #fff;

  }
`;

const MarqueeContainer = styled.div`
  overflow: hidden;
  border-top: 1px solid #222;
  border-bottom: 1px solid #222;
  padding: 2rem 0;
  margin: 6rem 0;
  white-space: nowrap;
  background: #050505;
`;

const MarqueeTrack = styled.div`
  display: flex;
  width: 200%;
  animation: ${marquee} 25s linear infinite;
`;

const MarqueeItem = styled.span`
  font-size: 2.5rem;
  font-weight: 900;
  margin-right: 5rem;
  text-transform: uppercase;
  opacity: 0.4;
  font-family: 'Space Mono', monospace;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 0;
  transition: all 0.4s ease;
  max-width: 1400px;
  margin: 0 auto;
  border: 1px solid #222;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: 3.5rem;
  border: 1px solid #222;
  position: relative;
  overflow: hidden;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1) !important;

  &:hover {
    background: #fff;

    color: #000;

    svg { color: #000; transform: scale(1.1); }
    li { color: #333; }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: rgba(255,255,255,0.15);
    animation: ${scanline} 6s linear infinite;
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 2.5rem;
  color: #fff;
  transition: all 0.4s ease;
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 1.8rem;
  text-transform: uppercase;
  letter-spacing: -0.5px;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #777;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;
  
  &::before {
    content: "/";
    font-weight: 900;
    color: #fff;
  }
  
  ${Card}:hover &::before {
    color: #000;
  }
`;

const BadgeSection = styled.div`
  margin-top: 12rem;
  text-align: center;
  padding: 0 1rem;
`;

const BadgeGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  max-width: 1100px;
  margin: 4rem auto;
  filter: grayscale(1) invert(1) brightness(0.8);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);


  img {
    height: 38px;
    border: 1px solid #333;
  }
`;

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skillsData = [
    {
      title: 'Infrastructure & AD Security',
      icon: <Shield size={42} strokeWidth={1.5} />,
      subs: ['Active Directory Attacks (DCSync)', 'Internal Network Pivoting', 'Lateral Movement', 'Privilege Escalation']
    },
    {
      title: 'Web Application Security',
      icon: <Globe size={42} strokeWidth={1.5} />,
      subs: ['OWASP Top 10 Standards', 'Authentication & Auth Testing', 'Security Misconfigurations']
    },
    {
      title: 'Offensive Operations',
      icon: <Zap size={42} strokeWidth={1.5} />,
      subs: ['Red Team Methodologies', 'Detection Evasion', 'Post-Exploitation', 'Ethical Hacking']
    },
    {
      title: 'Vulnerability Management',
      icon: <Cpu size={42} strokeWidth={1.5} />,
      subs: ['CVE & CVSS Risk Analysis', 'Nessus Vulnerability Scanning', 'Vulnerability Assessment', 'OpenVAS Management']
    },
    {
      title: 'Scripting & Automation',
      icon: <Code size={42} strokeWidth={1.5} />,
      subs: ['Python for Security Tools', 'Bash & PowerShell Scripting', 'Malware Analysis']
    },
    {
      title: 'OS & Technical Reporting',
      icon: <PenTool size={42} strokeWidth={1.5} />,
      subs: ['Kali Linux / Windows OS Expert', 'Technical Pentest Reporting', 'Proof-of-Concept (PoC)', 'Incident Documentation']
    }
  ];

  return (
    <Page id="skills">
      <GlobalStyle />
      
      <HeroSection>
        <Title data-aos="fade-right">
          Technical<br /><span>Arsenal</span>
        </Title>
        <Subtitle data-aos="fade-up" data-aos-delay="200">
          Advanced expertise in offensive security, penetration testing, and infrastructure protection. 
          Focusing on identifying vulnerabilities before they are exploited.
        </Subtitle>
        
        <LangWrapper>
          <LangCard data-aos="zoom-in" data-aos-delay="300">English — B1</LangCard>
          <LangCard data-aos="zoom-in" data-aos-delay="400">Russian — B1</LangCard>
          <LangCard data-aos="zoom-in" data-aos-delay="500">Uzbek — Native</LangCard>
        </LangWrapper>
      </HeroSection>

      <MarqueeContainer>
        <MarqueeTrack>
          {[...Array(8)].map((_, i) => (
            <MarqueeItem key={i}>
              • PENETRATION TESTING • CYBER SECURITY • VULNERABILITY ASSESSMENT • SOFTWARE ENGEENER • OFFENSIVE SECURITY •
            </MarqueeItem>
          ))}
        </MarqueeTrack>
      </MarqueeContainer>

      <Grid >
        {skillsData.map((skill, index) => (
          <Card key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <IconWrapper className="icon">{skill.icon}</IconWrapper>
            <CardTitle>{skill.title}</CardTitle>
            <SkillList>
              {skill.subs.map((sub, i) => (
                <SkillItem key={i}>{sub}</SkillItem>
              ))}
            </SkillList>
          </Card>
        ))}
      </Grid>

      <BadgeSection>
        <h2 style={{fontSize: '2.5rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-1px'}}>
          Toolbox & Technologies
        </h2>
        
        <BadgeGrid data-aos="fade-up">
            <img src="https://img.shields.io/badge/Kali_Linux-000000?style=for-the-badge&logo=kali-linux&logoColor=white" alt="Kali"/>
            <img src="https://img.shields.io/badge/Metasploit-000000?style=for-the-badge&logo=metasploit&logoColor=white" alt="Metasploit"/>
            <img src="https://img.shields.io/badge/Burp_Suite-000000?style=for-the-badge&logo=burp-suite&logoColor=white" alt="Burp"/>
            <img src="https://img.shields.io/badge/Nmap-000000?style=for-the-badge&logo=nmap&logoColor=white" alt="Nmap"/>
            <img src="https://img.shields.io/badge/Python-000000?style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
            <img src="https://img.shields.io/badge/Windows_Server-000000?style=for-the-badge&logo=windows-server&logoColor=white" alt="WinServer"/>
            <img src="https://img.shields.io/badge/Active_Directory-000000?style=for-the-badge&logo=active-directory&logoColor=white" alt="AD"/>
            <img src="https://img.shields.io/badge/Docker-000000?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
            <img src="https://img.shields.io/badge/Wireshark-000000?style=for-the-badge&logo=wireshark&logoColor=white" alt="Wireshark"/>
            <img src="https://img.shields.io/badge/Bash-000000?style=for-the-badge&logo=gnu-bash&logoColor=white" alt="Bash"/>
            <img src="https://img.shields.io/badge/Git-000000?style=for-the-badge&logo=git&logoColor=white" alt="Git"/>
            <img src="https://img.shields.io/badge/Nessus-000000?style=for-the-badge&logo=tenable&logoColor=white" alt="Nessus"/>
        </BadgeGrid>
      </BadgeSection>

      <footer style={{marginTop: '10rem', textAlign: 'center', opacity: 0.2, fontSize: '0.8rem', letterSpacing: '2px'}}>
        [ The Deep Art of Cybersecurity ]
      </footer>
    </Page>
  );
}