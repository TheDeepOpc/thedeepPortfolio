import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Github, FileText, ExternalLink, ShieldAlert, Code, Lock } from "lucide-react";

// === Styled Components ===
const Section = styled.section`
  background: #000;
  color: #fff;
  padding: 8rem 2rem;
  min-height: 100vh;
  font-family: 'Space Mono', monospace;
`;

const Header = styled.div`
  max-width: 1200px;
  margin: 0 auto 5rem;
  border-bottom: 1px solid #111;
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: -2px;
  span { color: #444; }
`;

const FilterTabs = styled.div`
  display: flex;
  gap: 20px;
`;

const TabButton = styled.button`
  background: none;
  border: 1px solid ${props => props.active ? "#fff" : "#111"};
  color: ${props => props.active ? "#fff" : "#444"};
  padding: 8px 20px;
  font-size: 0.7rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;
  &:hover { border-color: #555; }
`;

const ProjectGrid = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: #050505;
  border: 1px solid #111;
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 320px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0; width: 4px; height: 100%;
    background: ${props => props.type === 'report' ? '#ff0000' : '#fff'};
    opacity: 0.5;
  }

  .type-tag {
    font-size: 0.6rem;
    color: #444;
    text-transform: uppercase;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #eee;
  }

  p {
    font-size: 0.85rem;
    color: #666;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 2rem;
    span {
      font-size: 0.6rem;
      background: #111;
      padding: 4px 10px;
      color: #888;
    }
  }

  .links {
    display: flex;
    gap: 20px;
    margin-top: auto;
    a { color: #fff; transition: 0.3s; &:hover { color: #888; } }
  }

  &:hover {
    border-color: #333;
    background: #080808;
  }
`;

// === Ma'lumotlar ===
const projects = [
  {
    id: 1,
    category: "projects",
    type: "All-in-One Pentesting Toolkit",
    title: "Butcher // Multi-Vector Exploitation Framework",
    desc: "A comprehensive multi-service penetration testing framework designed for full-spectrum security audits. Butcher integrates diverse exploitation vectors including Wireless Network Auditing (WiFi), Web Application Attack modules, and an advanced Windows Evasion Engine for generating obfuscated payloads that bypass modern AV/EDR solutions.",
    tech: ["Linux", "Bash Scripting", "Vb Scripting"],
    github: "https://github.com/TheDeepOpc/butcher",
    link: "https://github.com/TheDeepOpc/butcher"
  },
  {
    id: 2,
    category: "projects",
    type: "AI-Driven Penetration Testing",
    title: "DeepSec_AI // Neural Infiltrator",
    desc: "An intelligent, AI-powered penetration testing engine designed to automate complex security audits. DeepSec leverages machine learning models to perform autonomous reconnaissance, vulnerability identification, and intelligent exploit selection, simulating real-world adversary behavior with high precision.",
    tech: ["Python", "LLM Integration", "Reinforcement Learning"],
    github: "https://github.com/TheDeepOpc/DeepSec",
    link: "https://github.com/TheDeepOpc/DeepSec"
  },
  {
    id: 3,
    category: "projects",
    type: "Environment Simulation & Sandbox",
    title: "Linux Basics for Beginners // Virtual Terminal Simulator",
    desc: "A Python-based Linux environment simulator designed to provide a virtualized terminal experience without OS installation. This tool replicates the Linux filesystem hierarchy and command execution logic, offering a secure sandbox for users to learn system administration and shell interactions.",
    tech: ["Python"],
    github: "https://github.com/TheDeepOpc/LinuxBasics",
    link: "https://github.com/TheDeepOpc/LinuxBasics"
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <Section id="portfolio">
      <Header>
        <Title>Vault<span>.Archives</span></Title>
        <FilterTabs>
          {["all", "projects", "reports"].map(t => (
            <TabButton 
              key={t} 
              active={filter === t} 
              onClick={() => setFilter(t)}
            >
              {t}
            </TabButton>
          ))}
        </FilterTabs>
      </Header>

      <ProjectGrid layout>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((item) => (
            <ProjectCard
              key={item.id}
              type={item.category === 'reports' ? 'report' : 'project'}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="type-tag">
                {item.category === 'reports' ? <ShieldAlert size={12} /> : <Code size={12} />}
                {item.type}
              </div>
              
              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <div className="tech-stack">
                {item.tech.map(t => <span key={t}>{t}</span>)}
              </div>

              <div className="links">
                {item.github && (
                  <a href={item.github} target="_blank" rel="noreferrer">
                    <Github size={18} />
                  </a>
                )}
                <a href={item.link}>
                  {item.category === 'reports' ? <FileText size={18} /> : <ExternalLink size={18} />}
                </a>
                <div style={{ marginLeft: 'auto' }}>
                   <Lock size={14} color="#222" />
                </div>
              </div>
            </ProjectCard>
          ))}
        </AnimatePresence>
      </ProjectGrid>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{ textAlign: 'center', marginTop: '5rem', color: '#222', fontSize: '0.7rem' }}
      >
        ACCESS_LEVEL: RESTRICTED // 0xCC001
      </motion.div>
    </Section>
  );
}