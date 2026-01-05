import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaDownload, FaFingerprint, FaWifi } from 'react-icons/fa';

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
  overflow-x: hidden; /* Gorizontal scroll bo'lmasligi uchun */
  display: flex;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    padding: 60px;
  }
`;

const ContentLayout = styled.div`
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 60px; /* Navbar bo'lsa joy tashlash uchun */

  @media (max-width: 768px) {
    align-items: center; /* Mobil versiyada markazga tekislash */
    text-align: center;
  }
`;

const GlitchText = styled.h1`
  font-size: clamp(2.5rem, 12vw, 7rem); /* Kichik ekranlarda kichrayadi */
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

  @media (min-width: 768px) {
    letter-spacing: -5px;
  }
`;

const DataGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center; /* Mobil versiyada kartalarni markazga surish */
  }
`;

const DataFragment = styled(motion.div)`
  border-left: 2px solid #fff;
  padding-left: 15px;
  text-align: left;
  min-width: 120px;
  
  .label { color: #444; font-size: 0.65rem; display: block; text-transform: uppercase; }
  .value { font-size: 1rem; color: #fff; white-space: nowrap; }
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

  &:hover { background: #fff; color: #000; }

  @media (max-width: 768px) {
    width: 100%; /* Mobil versiyada to'liq kenglik */
    justify-content: center;
  }
`;

const AsciiWrapper = styled(motion.div)`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;

  @media (min-width: 992px) {
    margin-top: 0;
    justify-content: flex-end;
  }
`;

const AsciiContainer = styled.pre`
  color: #fff;
  font-size: clamp(4px, 1.5vw, 9px); /* Mobil ekranlarda rasm kichrayadi */
  line-height: 1.1;
  opacity: 0.6;
  pointer-events: none;
  margin: 0;
`;

// --- Komponent ---
function App() {
  const [randomArt, setRandomArt] = useState("");

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
      [==============================]
      [  .-----------.  [01010101]  ]
      [  |  SYSTEM   |  [11001100]  ]
      [  |  STATUS:  |  [00011100]  ]
      [  |  ACTIVE   |  [10101010]  ]
      [  '-----------'  [01110101]  ]
      [==============================]
      [  | NODE_01 |   | NODE_02 |  ]
      [  | ONLINE  |   | OFFLINE |  ]
      [==============================]
    `
  ]; 

  useEffect(() => {
    setRandomArt(cyberArts[Math.floor(Math.random() * cyberArts.length)]);
  }, []);

  return (
    <MainContainer>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 order-2 order-lg-1">
            <ContentLayout>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ff0000', justifyContent: window.innerWidth < 768 ? 'center' : 'flex-start' }}>
                  <FaFingerprint size={14} />
                  <span style={{ fontSize: '0.6rem', letterSpacing: '3px' }}>IDENTITY_CONFIRMED</span>
                </div>
                <GlitchText>TheDEEP_</GlitchText>
              </motion.div>

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
                    <span className="value">{item.value} {item.label === "Network" && <FaWifi size={10}/>}</span>
                  </DataFragment>
                ))}
              </DataGrid>

              <DownloadTrigger
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                DOWNLOAD_CV <FaDownload size={14} style={{ marginLeft: '10px' }} />
              </DownloadTrigger>
            </ContentLayout>
          </div>

          <div className="col-lg-5 order-1 order-lg-2">
            <AsciiWrapper
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <AsciiContainer>{randomArt}</AsciiContainer>
            </AsciiWrapper>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}

export default App;



