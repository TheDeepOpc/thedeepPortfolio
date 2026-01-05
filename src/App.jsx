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
// --- Styled Components ---
const MainContainer = styled.div`
  background-color: #000;
  min-height: 100vh;
  color: #fff;
  font-family: 'Space Mono', monospace;
  position: relative;
  overflow-x: hidden;
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
  margin-top: 40px; 

  @media (max-width: 992px) {
    align-items: center; 
    text-align: center;
    margin-top: 20px;
  }
`;

const GlitchText = styled.h1`
  font-size: clamp(2.8rem, 15vw, 7rem); /* Mobil uchun minimal o'lcham kattalashtirildi */
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
  gap: 15px;
  margin-top: 20px;

  @media (max-width: 992px) {
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Mobil qurilmada 2 qator tartibli chiqishi uchun */
    width: 100%;
  }
`;

const DataFragment = styled(motion.div)`
  border-left: 2px solid #fff;
  padding-left: 15px;
  text-align: left;
  
  .label { color: #444; font-size: 0.65rem; display: block; text-transform: uppercase; }
  .value { font-size: 0.9rem; color: #fff; white-space: nowrap; }

  @media (max-width: 992px) {
    border-left: 1px solid #333; /* Mobil versiyada nozikroq chiziq */
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

  @media (max-width: 992px) {
    width: 100%; 
    max-width: 300px;
    justify-content: center;
  }
`;

const AsciiWrapper = styled(motion.div)`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: visible; /* ASCII kesilib qolmasligi uchun */

  @media (min-width: 992px) {
    margin-top: 0;
    justify-content: flex-end;
  }
`;

const AsciiContainer = styled.pre`
  color: #fff;
  /* Mobil qurilmada ASCII san'atini sezilarli kattalashtirish */
  font-size: clamp(9px, 3vw, 11px); 
  line-height: 1.1;
  opacity: 0.8;
  font-weight: bold;
  pointer-events: none;
  margin: 0;
  text-align: left;
  
  @media (max-width: 992px) {
    font-size: 10px; /* Mobil uchun optimal qat'iy o'lcham */
    letter-spacing: -0.5px;
  }
`;

// --- Komponent ---
function App() {
  const [randomArt, setRandomArt] = useState("");
const handleDownload = (e) => {
    e.preventDefault();
    // Faylga boradigan yo'lni tekshirish
    const fileUrl = "/files/Resume_sardor.pdf";
    
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "Resume_Sardor.pdf"); // Fayl yuklangandagi nomi
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#00ff04ff', justifyContent: window.innerWidth < 768 ? 'center' : 'flex-start' }}>
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
      href="#" // Funksiya orqali boshqaramiz
      onClick={handleDownload}
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



