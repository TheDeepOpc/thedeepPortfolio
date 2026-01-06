



import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaDownload, FaFingerprint, FaWifi, FaGithub, FaLinkedin, FaInstagram, FaTerminal } from 'react-icons/fa';

// --- Animatsiyalar ---
const glitchAnim = keyframes`
  0% { clip: rect(44px, 9999px, 56px, 0); transform: skew(0.5deg); }
  20% { clip: rect(13px, 9999px, 93px, 0); transform: skew(-0.5deg); }
  100% { clip: rect(44px, 9999px, 56px, 0); }
`;

// --- Styled Components ---
const MainContainer = styled.div`
  background-color: #000;
  min-height: 100vh;
  color: #fff;
  font-family: 'Space Mono', monospace;
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column; /* Ijtimoiy tarmoqlar pastdan chiqishi uchun */
  padding: 20px;

  @media (min-width: 768px) {
    padding: 60px;
    justify-content: center;
  }
`;

const ContentLayout = styled.div`
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 992px) {
    align-items: center; 
    text-align: center;
    margin-top: 40px;
  }
`;

const GlitchText = styled.h1`
  font-size: clamp(2.8rem, 12vw, 7rem);
  font-weight: 900;
  letter-spacing: -2px;
  margin: 0;
  position: relative;
  text-transform: uppercase;
  line-height: 1;
  
  &::after {
    content: 'TheDEEP_';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: #000;
    left: 2px;
    text-shadow: -2px 0 #ff00c1;
    animation: ${glitchAnim} 2s infinite linear alternate-reverse;
  }
`;

const DataGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;

  @media (max-width: 992px) {
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
`;

const DataFragment = styled(motion.div)`
  border-left: 2px solid #fff;
  padding-left: 15px;
  text-align: left;
  
  .label { color: #444; font-size: 0.65rem; display: block; text-transform: uppercase; }
  .value { font-size: 0.85rem; color: #fff; white-space: nowrap; }
`;

// === Yangi: Social Network Styles ===
const SocialUplink = styled(motion.div)`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  border-top: 1px solid #111;
  padding-top: 30px;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 18px;
  background: #050505;
  border: 1px solid #222;
  color: #888;
  text-decoration: none;
  font-size: 0.75rem;
  transition: 0.3s;

  svg { font-size: 1.1rem; }

  &:hover {
    border-color: #fff;
    color: #fff;
    background: #111;
    transform: translateY(-3px);
  }
`;

const DownloadTrigger = styled(motion.button)`
  background: none;
  border: 1px solid #fff;
  color: #fff;
  padding: 12px 25px;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  margin-top: 20px;
  cursor: pointer;
  font-family: inherit;
  text-transform: uppercase;

  &:hover { background: #fff; color: #000; }
`;

const AsciiContainer = styled.pre`
  color: #fff;
  font-size: clamp(8px, 2vw, 10px); 
  line-height: 1.1;
  opacity: 0.6;
  font-weight: bold;
  pointer-events: none;
  text-align: left;
`;

// --- Komponent ---
function App() {
  const [randomArt, setRandomArt] = useState("");

  const handleDownload = (e) => {
    e.preventDefault();
    const fileUrl = "/files/Resume_sardor.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "Resume_Sardor.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

 const cyberArts = [
    `
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠈⠻⢿⠿⠋⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⠿⠿⠿⠿⠿⠟⠛⠉⠁⠀⠀⠉⠙⠛⠛⠛⠛⢛⣛⣉⣁⣀⣈⣉⣙⣛⣿⣿⣿⣿⣿⣿
    ⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⠀⠀⠀⠼⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿
    ⣿⣿⣿⣿⣿⣿⠿⠶⠶⣶⡶⣶⣴⣤⣤⣤⣤⣤⣤⣶⣶⣶⡶⠶⠿⢿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⡿⠋⠁⠀⠀⠀⠹⣆⡀⠀⠀⣠⣶⣶⣄⠀⠀⢀⣾⡇⠀⠀⠀⠈⠻⣿⣿⣿⣿
    ⣿⣿⣯⣤⣄⣀⣀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⢀⣀⣀⣤⣤⣽⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⠟⠃⠀⠙⢿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣥⣀⡀⠀⠀⠀⠙⢿⣿⣿⠏⠀⠀⠀⠀⣀⣠⣽⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣄⡀⠀⣸⠃⠀⢀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡏⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    `,
    `
     [ SECURITY SCAN ]
     -----------------
     ID: THE_DEEP
     STATUS: ENCRYPTED
     UPLINK: ACTIVE
     -----------------
    `,
     `
       ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡠⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠟⠃⠀⠀⠙⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠋⠀⠀⠀⠀⠀⠀⠘⣆⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠾⢛⠒⠀⠀⠀⠀⠀⠀⠀⢸⡆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣶⣄⡈⠓⢄⠠⡀⠀⠀⠀⣄⣷⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣷⠀⠈⠱⡄⠑⣌⠆⠀⠀⡜⢻⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡿⠳⡆⠐⢿⣆⠈⢿⠀⠀⡇⠘⡆⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣷⡇⠀⠀⠈⢆⠈⠆⢸⠀⠀⢣⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣧⠀⠀⠈⢂⠀⡇⠀⠀⢨⠓⣄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣦⣤⠖⡏⡸⠀⣀⡴⠋⠀⠈⠢⡀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⠁⣹⣿⣿⣿⣷⣾⠽⠖⠊⢹⣀⠄⠀⠀⠀⠈⢣⡀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡟⣇⣰⢫⢻⢉⠉⠀⣿⡆⠀⠀⡸⡏⠀⠀⠀⠀⠀⠀⢇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢨⡇⡇⠈⢸⢸⢸⠀⠀⡇⡇⠀⠀⠁⠻⡄⡠⠂⠀⠀⠀⠘
⢤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠛⠓⡇⠀⠸⡆⢸⠀⢠⣿⠀⠀⠀⠀⣰⣿⣵⡆⠀⠀⠀⠀
⠈⢻⣷⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡿⣦⣀⡇⠀⢧⡇⠀⠀⢺⡟⠀⠀⠀⢰⠉⣰⠟⠊⣠⠂⠀⡸
⠀⠀⢻⣿⣿⣷⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⢧⡙⠺⠿⡇⠀⠘⠇⠀⠀⢸⣧⠀⠀⢠⠃⣾⣌⠉⠩⠭⠍⣉⡇
⠀⠀⠀⠻⣿⣿⣿⣿⣿⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣞⣋⠀⠈⠀⡳⣧⠀⠀⠀⠀⠀⢸⡏⠀⠀⡞⢰⠉⠉⠉⠉⠉⠓⢻⠃
⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⢀⣀⠠⠤⣤⣤⠤⠞⠓⢠⠈⡆⠀⢣⣸⣾⠆⠀⠀⠀⠀⠀⢀⣀⡼⠁⡿⠈⣉⣉⣒⡒⠢⡼⠀
⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣎⣽⣶⣤⡶⢋⣤⠃⣠⡦⢀⡼⢦⣾⡤⠚⣟⣁⣀⣀⣀⣀⠀⣀⣈⣀⣠⣾⣅⠀⠑⠂⠤⠌⣩⡇⠀
⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡁⣺⢁⣞⣉⡴⠟⡀⠀⠀⠀⠁⠸⡅⠀⠈⢷⠈⠏⠙⠀⢹⡛⠀⢉⠀⠀⠀⣀⣀⣼⡇⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⡟⢡⠖⣡⡴⠂⣀⣀⣀⣰⣁⣀⣀⣸⠀⠀⠀⠀⠈⠁⠀⠀⠈⠀⣠⠜⠋⣠⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⡟⢿⣿⣿⣷⡟⢋⣥⣖⣉⠀⠈⢁⡀⠤⠚⠿⣷⡦⢀⣠⣀⠢⣄⣀⡠⠔⠋⠁⠀⣼⠃⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⡄⠈⠻⣿⣿⢿⣛⣩⠤⠒⠉⠁⠀⠀⠀⠀⠀⠉⠒⢤⡀⠉⠁⠀⠀⠀⠀⠀⢀⡿⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⣤⣤⠴⠟⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⠤⠀⠀⠀⠀⠀⢩⠇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    `,
`
   ⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⠀⠀⠀⠀⣠⣴⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢾⡇⠀⢀⣀⣀⣀⡀⢉⡽⠁⠀⠀⣿⣦⠤⠤⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠸⡷⠀⣀⠤⠤⢤⣴⡿⠁⠀⢰⠀⣿⣿⣷⣤⠶⢶⣬⣭⣕⣒⠠⢄⣀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢷⠀⡇⠀⠀⡞⣾⠁⠀⠀⠘⠀⠹⣇⣀⣙⡆⠀⠀⠈⠉⠙⠛⠷⠮⣉⠲⢄⡀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣀⢸⡀⢰⢃⣿⣧⣴⡶⣿⣿⡶⢼⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠑⠛⠷⣤⡀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡏⠀⡇⢸⢻⣿⣿⣿⣶⣌⣻⣿⣿⣿⣥⣼⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢱⠀⢱⢸⢺⣿⣿⣥⠈⠛⠣⢤⣙⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣦⠈⣿⣼⣿⣿⣿⡾⠆⠀⠙⣿⣿⠇⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢯⠀⢻⣿⣿⣿⣿⣶⣶⣷⣾⣿⣣⣴⣾⣇⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠖⢿⡆⠸⣏⢳⡼⣿⣿⣿⣿⣿⣟⠉⠙⠛⠋⣭⣷⠦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣴⠏⠀⢰⣿⣷⡄⣿⣾⣟⠬⣿⣿⣿⣿⣿⠀⢀⠀⣠⠟⠁⠀⠲⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣼⣿⠢⠬⣭⣿⣿⣧⢸⣿⣯⡑⠦⣾⣿⡟⣡⣔⣁⠴⢟⣱⠂⠀⠀⠈⢻⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⣾⠋⠀⣄⢀⣿⣿⢿⣷⠀⣿⢧⡙⢦⣙⣿⣿⣽⣿⣁⣹⠟⠛⢀⡇⠀⠀⠘⢧⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣰⠃⣏⣹⣦⣿⣿⡿⠁⠀⢿⣇⢘⡶⢬⣉⣿⣽⣿⣟⣻⣤⠆⣠⣺⣾⡇⡂⠀⢠⠘⡇⠀⠀⠀⠀⠀⠀
⠀⠀⢰⡇⢰⠃⢛⣿⣯⣉⣠⣤⣶⣿⣿⣿⣿⣿⠀⣈⣛⣿⡿⠟⢀⠜⠁⣹⣿⣷⣿⠀⣸⢰⡇⠀⠀⠀⠀⠀⠀
⠀⠀⣿⢣⠇⠀⣾⣿⣿⣟⣏⡜⢧⣬⣿⣿⣯⣽⣀⣿⣿⣟⣁⠔⠁⠀⠀⣽⣿⣿⠏⢀⣿⠈⡇⠀⠀⠀⠀⠀⠀
⠀⡼⠃⣨⣤⣴⣿⢃⢹⢻⡾⠀⠘⢿⣿⣟⠘⣿⣿⠿⣿⣏⣄⣀⡀⡀⠀⣸⡿⣿⠇⢈⡏⠀⡇⠀⠀⠀⠀⠀⠀
⠀⡇⣾⠿⠟⢛⠇⡸⣾⢸⡇⣀⣦⣈⣿⣿⡆⢯⣀⣲⠛⠉⠉⠑⠾⣿⢃⣿⡇⠌⠀⣼⡗⠀⡇⠀⠀⠀⠀⠀⠀
⢀⣧⠁⠀⣠⠊⠀⢳⠃⠘⠇⠿⣿⣿⣿⣿⡆⢸⣿⣷⣤⣀⣠⠤⠊⢀⣼⣿⡄⢀⠼⣿⡇⢸⡇⠀⠀⠀⠀⠀⠀
⠈⠙⣇⢻⣿⣦⣴⣃⡄⠀⢀⠀⠈⣿⡀⠹⣿⠒⡿⠟⠛⢋⡤⠒⢁⢾⣿⠙⡠⠋⠀⠛⠁⣸⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠈⠓⠾⣅⣈⣉⣀⠀⠠⢷⡀⢸⣆⣠⣿⡄⢻⣴⣾⡏⠀⠀⠀⣾⣷⣾⣷⠒⢉⡀⢀⢿⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣷⣾⣧⣸⣿⣿⣿⣧⠈⡿⣟⡠⢀⠄⣠⣿⣿⠟⢛⡉⠛⠀⡞⣼⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡿⢸⣿⣏⣿⣿⣿⣿⣿⣽⡀⢹⠰⣚⣯⣾⣿⣿⡟⠉⠀⢀⡀⢠⢷⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡇⢸⣿⡿⣿⡿⣿⣿⣿⣿⣷⠈⣦⣿⡯⠀⡾⠋⠁⠰⣶⡟⢁⠎⣿⠁⠀⠀⠀
`,
`
   ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⡀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⣄⠘⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⠀⠀⢢⣤⣀⣦⣄⡀⠙⣶⡘⢷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣀⣀⣨⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣯⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⣽⣿⣿⣿⣿⠟⠛⠛⠛⠛⠻⢿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠘⣻⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⣿⣿⣿⣿⢿⣷⡀⠀⠀⠀⠀⠀⠀
⠀⠀⣴⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣿⣿⣷⣽⣷⣄⠀⠀⠀⠀⠀
⠀⠀⠀⣾⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⢿⣿⣿⣿⣯⠁⠀⠀⠀⠀
⠀⠀⠐⠛⢿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿⣿⣷⣄⡀⠀⠀
⠀⠀⠀⠀⠘⠟⠿⣿⣿⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⠇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⣿⣷⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠟⠋⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⢿⣷⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠲⣶⣶⣦⠀⢀⣴⣶⣶⠖⠀⠀⠒⢶⣶⣶⣶⠀⠀⠐⢶⣶⣶⣦⠀⠀⠀⠒⢶⣶⣶⡆
⠀⣿⣿⣿⣠⣾⣿⡿⠋⠀⠀⠀⢠⣿⣿⣿⣿⣧⠀⠀⠠⣿⣿⣿⠀⠀⠀⠀⢸⣿⣿⡇
⠀⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⣾⣿⡿⠹⣿⣿⣇⠀⠐⣿⣿⣿⠀⠀⠀⠀⢸⣿⣿⡇
⠀⣿⣿⣿⠟⣿⣿⣿⣄⠀⠀⣼⣿⣿⣿⣶⣿⣿⣿⣆⢈⣿⣿⣿⣤⣤⣄⣀⣸⣿⣿⡇
⠀⣿⣿⡿⠀⠈⢿⣿⣿⡆⢸⣿⣿⠏⠉⠉⠉⢿⣿⡿⡄⣿⣿⣿⣿⢿⣿⡿⢸⣿⣿⡇

`,    
    `
    ⠀⠀⠀⠀⢀⣶⣾⣲⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣯⣳⡄
⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣟⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣽⣾⣿⣿⠇
⠀⠀⠀⠀⠀⠀⠀⠀⢈⣟⡟⣳⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠴⡚⡋⡅⢸⠉⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣼⠁⣏⠃⡟⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡵⠞⣫⠍⠡⠛⡗⠦⣼⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢰⠇⠀⢩⣉⡈⠈⡻⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⣀⠀⠀⣀⣤⡶⠋⠁⠋⡄⢩⡏⠃⠇⠁⠆⣿⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣟⠇⣽⠧⡲⠁⡁⢌⡎⢷⡄⠀⠀⠀⠀⠀⠀⠀⣠⠞⠡⡀⠉⠳⣞⠙⠀⠄⠲⠇⡀⡈⠐⢍⡚⠀⠀⠃⣿⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡾⠁⠑⠟⡎⢁⡀⠆⠠⠁⠧⡙⢦⡀⠀⠀⠀⢀⡼⠃⠈⠢⣌⠲⡄⠈⢯⡪⣟⠂⠏⠇⠄⠂⠨⠈⠀⣁⠈⡏⠀⠀⠀
⠀⠀⠀⠀⠀⣸⢋⠦⡄⠷⢶⠃⢋⠁⡉⢀⣀⣤⡭⠿⡶⠾⢶⡾⠡⡉⠢⢄⡀⠑⢌⠢⡊⣿⢍⠤⠀⠁⠂⠅⡁⠂⠐⠀⠄⡇⠀⠀⠀
⠀⠀⠀⠀⢠⡏⠁⠌⡆⡺⠙⠠⣢⡵⠞⠫⠋⠀⢀⠈⠢⢅⡞⠡⣀⠈⠑⠢⢍⠒⣄⡳⡌⢸⣆⠑⠐⠠⠀⠀⠁⠂⠀⠃⠈⡇⠀⠀⠀
⠀⠀⠀⠀⢾⠀⠊⡖⡂⣪⣴⠞⡛⡡⡄⠅⢀⠀⠄⠁⠁⣸⠀⠂⠤⣉⡒⠤⢄⣹⡟⠿⣾⠋⠉⠛⣶⠒⠛⠋⠉⠉⠙⠛⠲⠧⣤⡀⠀
⠀⠀⠀⠀⠈⠳⣇⡃⣰⣿⠃⠀⣻⣥⠤⠶⠾⠤⣅⡐⠀⠸⠷⣤⣀⣀⠉⠁⠒⠢⠍⢰⡇⠀⠀⣠⣟⣀⡭⠭⠍⣁⡒⠒⠤⢄⣀⠀⠀
⠀⠀⠀⠀⠄⠀⠈⣻⢿⡧⠇⡼⠏⠀⠀⠀⠀⠀⠀⠙⢦⠰⡀⠂⢉⠉⠙⠛⠛⠟⢻⠫⠛⣶⡶⠋⣐⠮⢟⡒⠤⣀⠈⠉⠒⠄⡾⠀⠀
⠀⠀⠀⠀⠀⠀⣼⠃⢐⢅⣵⠃⢀⣤⡄⠀⠀⢠⣤⡀⠘⣇⠂⠅⠆⠄⠀⣢⠁⢉⠓⡀⠌⡔⢿⡜⠮⡓⢄⡈⠑⠠⣍⠒⠤⣼⠃⠀⠀
⠀⣄⡀⠀⠀⢰⠏⡡⠁⠂⠙⣇⢸⣿⠇⠀⠀⠸⣿⡗⣸⠏⠀⠇⠀⠐⠵⠧⢃⠀⠈⠀⠄⡅⠈⠻⣄⠉⠢⣉⠢⢄⡀⠉⣾⠃⠀⠀⠀
⠀⠈⠙⠀⠀⣾⠀⡈⢂⡴⠶⣿⣷⣦⠀⡄⢠⠀⣴⣾⡷⠖⠓⠶⢷⣀⠂⠁⠀⠪⡀⠀⠅⠐⠀⠀⠹⢷⣄⠈⠑⠦⢉⡾⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⡇⠀⣿⡋⠀⠀⠀⠙⠿⣟⣿⣿⡿⠟⠉⠀⠀⠀⠁⠀⠉⠛⢦⣧⡀⠀⠀⠀⠁⠄⢄⢀⠀⠊⠛⢶⠶⠋⢀⣀⡄⠀⠀⠀
⠉⠉⠁⠀⠀⡇⣸⠃⣟⣦⣄⡀⠀⠀⠈⠙⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣦⠊⠠⠐⠊⡀⠂⠀⡐⠥⡾⠀⠀⠉⠉⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢿⡿⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣤⣴⣶⠄⠀⠀⠈⢿⡆⠈⠃⠠⠀⠀⠐⣸⠃⠀⢀⣀⡀⠀⠀⠀⠀
⠐⠚⠋⠀⠀⠘⣧⠀⠸⣿⣿⡿⠀⠀⢀⣀⡀⠀⠀⠀⠀⠀⠋⠁⠀⠀⠁⠀⠀⠀⠀⠀⢿⡀⠄⠀⠂⢠⡾⠁⠀⠀⠀⠉⠙⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⢷⡀⠈⠉⠀⠀⠀⠻⠿⠇⣠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠗⠀⣡⡼⠋⠀⠀⠀⢤⣀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⢳⡤⠤⣴⠲⡽⣖⣚⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣣⡴⠛⠁⠀⠀⠀⠀⠀⠀⠙⠃⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢰⠏⠀⠀⢨⣾⠁⣀⡉⠙⠓⢦⣀⣀⣀⣀⣀⣀⣤⣤⣴⣶⣿⣿⣿⣝⣷⠛⢳⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⣀⣀⣠⣾⣷⡿⣛⡻⣷⠄⣼⠭⡽⣿⣿⣅⡀⠀⣿⡟⠛⠻⣏⠉⠉⠙⠛⠋⠀⠀⣀⣴⣿⣿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣏⠁⡞⣿⣟⠴⢜⣿⠷⠳⢾⣅⠀⠉⠛⣿⡷⣿⠿⣄⠀⠙⢦⡀⠀⠀⠀⠀⠸⢿⣿⣿⣿⡆⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠳⢬⣟⣯⢿⡃⠀⠀⠀⢩⣠⡴⠞⠁⠀⠻⣤⡽⠀⠀⠀⠙⢦⡀⠀⠀⢀⣼⣿⡿⠙⠃⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⢧⣀⠀⣀⡼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣬⣷⣤⣴⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⢻⡉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠿⢿⠿⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    `,
  ]; 

  useEffect(() => {
    setRandomArt(cyberArts[Math.floor(Math.random() * cyberArts.length)]);
  }, []);

  return (
    <MainContainer className=''>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-lg-7 order-2 order-lg-1">
            <ContentLayout>
              {/* Identity Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#00ff41', marginBottom: '10px' }}>
                  <FaFingerprint size={14} />
                  <span style={{ fontSize: '0.6rem', letterSpacing: '3px' }}>IDENTITY_CONFIRMED</span>
                </div>
                <GlitchText>TheDEEP_</GlitchText>
              </motion.div>

              {/* Data Grid */}
              <DataGrid>
                {[
                  { label: "Operator", value: "Sardor S.", delay: 0.3 },
                  { label: "Focus", value: "Cyber Security", delay: 0.4 },
                  { label: "Network", value: "Stable", delay: 0.5 },
                ].map((item, index) => (
                  <DataFragment 
                    key={index}
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: item.delay }}
                  >
                    <span className="label">{item.label}</span>
                    <span className="value">{item.value} {item.label === "Network" && <FaWifi size={10} color="#00ff41"/>}</span>
                  </DataFragment>
                ))}
              </DataGrid>

              {/* Actions */}
              <DownloadTrigger
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                DOWNLOAD_CV <FaDownload size={14} />
              </DownloadTrigger>

              {/* === SOCIAL NETWORKS SECTION === */}
              <SocialUplink
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <SocialLink href="https://github.com/TheDeepOpc" target="_blank">
                  <FaGithub /> <span>Github</span>
                </SocialLink>
                
                <SocialLink href="https://linkedin.com/in/callmethedeep" target="_blank">
                  <FaLinkedin /> <span>LINKEDIN</span>
                </SocialLink>
                
                <SocialLink href="https://instagram.com/thedeep" target="_blank">
                  <FaInstagram /> <span>Instagram</span>
                </SocialLink>

                <SocialLink href="https://t.me/callmethedeep" target="_blank">
                   <FaTerminal /> <span>Telegram</span>
                </SocialLink>
              </SocialUplink>

            </ContentLayout>
          </div>

          {/* ASCII Art Column */}
          <div className="col-lg-5 order-1 order-lg-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <AsciiContainer>{randomArt}</AsciiContainer>
            </motion.div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}

export default App;