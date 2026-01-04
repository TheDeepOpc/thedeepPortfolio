const ArsenalTitle = styled.h2`
  font-size: 1.35rem;
  font-weight: 700;
  color: #fff;
  margin: 3.2rem 0 1.2rem 0;
  letter-spacing: 1.2px;
  text-align: left;
  position: relative;
  width: 100%;
  max-width: 1100px;
  padding-left: 0.2em;
  &::before {
    content: '';
    display: inline-block;
    width: 32px;
    height: 3px;
    background: linear-gradient(90deg, #fff 60%, #222 100%);
    border-radius: 2px;
    position: absolute;
    left: 0;
    top: 100%;
    margin-top: 7px;
  }
  @media (max-width: 600px) {
    font-size: 1.05rem;
    margin: 2.2rem 0 0.7rem 0;
    &::before { width: 22px; height: 2px; }
  }
`;

import React from "react";
import styled, { keyframes } from "styled-components";
import './Skills.css';
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Page = styled.section`
  background: #000;
  color: #fff;
  min-height: 100vh;
  padding: 3rem 1rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  letter-spacing: -0.5px;
  text-align: center;
  &::after {
    content: '';
    display: block;
    width: 48px;
    height: 2px;
    background: #fff;
    margin: 0.75rem auto 0;
  }
  @media (max-width: 600px) {
    font-size: 1.3rem;
    &::after { width: 32px; }
  }
`;

const Subtitle = styled.p`
  font-size: 1.05rem;
  color: #bbb;
  max-width: 560px;
  margin: 0 auto 2rem auto;
  line-height: 1.6;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 0.95rem;
    margin-bottom: 1.2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1100px;
  margin-top: 2.2rem;
  @media (max-width: 900px) {
    gap: 1.1rem;
    max-width: 98vw;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.7rem;
    margin-top: 1.2rem;
  }
`;

const Card = styled.div`
  background: #0f0f0f;
  border: 2px solid #2a2a2a;
  border-radius: 14px;
  padding: 1.3rem 1rem 1rem 1rem;
  color: #fff;
  box-shadow: 0 4px 24px #000a;
  transition: transform 0.2s, box-shadow 0.2s;
  animation: ${fadeIn} 1.1s ease-out;
  min-width: 0;
  word-break: break-word;
  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 8px 32px #fff2;
    border-color: #fff;
  }
  @media (max-width: 600px) {
    padding: 1rem 0.7rem 0.7rem 0.7rem;
    font-size: 0.97rem;
  }
`;

const CardTitle = styled.h2`
  font-size: 1.08rem;
  font-weight: 600;
  margin-bottom: 1.1rem;
  color: #fff;
  letter-spacing: 0.5px;
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 0.7rem;
  }
`;

const SubList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SubItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 1rem;
  color: #eee;
  margin-bottom: 0.7rem;
  svg, i {
    color: #fff;
    font-size: 1.1rem;
    opacity: 0.85;
  }
  @media (max-width: 600px) {
    font-size: 0.93rem;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    svg, i { font-size: 1rem; }
  }
`;

const LanguageBar = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  margin: 2rem 0 0.5rem 0;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    gap: 0.7rem;
    margin: 1.2rem 0 0.2rem 0;
  }
`;

const Lang = styled.div`
  background: #111;
  color: #fff;
  border-radius: 8px;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 0 2px 12px #0006;
  border: 1px solid #222;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  @media (max-width: 600px) {
    font-size: 0.93rem;
    padding: 0.5rem 0.7rem;
    gap: 0.4rem;
  }
`;

const skillsData = [
  {
    title: 'Infrastructure & AD Security',
    subs: [
      { icon: <i className="fa-solid fa-shield-halved"></i>, name: 'Active Directory Attacks (DCSync, Kerberoasting)' },
      { icon: <i className="fa-solid fa-network-wired"></i>, name: 'Internal Network Pivoting' },
      { icon: <i className="fa-solid fa-arrows-to-eye"></i>, name: 'Lateral Movement' },
      { icon: <i className="fa-solid fa-user-lock"></i>, name: 'Privilege Escalation (Windows/Linux)' },
    ]
  },
  {
    title: 'Web Application Security',
    subs: [
      { icon: <i className="fa-solid fa-globe"></i>, name: 'OWASP Top 10' },
      { icon: <i className="fa-solid fa-user-check"></i>, name: 'Authentication & Authorization Testing' },
      { icon: <i className="fa-solid fa-bug"></i>, name: 'Security Misconfiguration Analysis' },
    ]
  },
  {
    title: 'Offensive Operations',
    subs: [
      { icon: <i className="fa-solid fa-user-secret"></i>, name: 'Red Team Operations' },
      { icon: <i className="fa-solid fa-user-ninja"></i>, name: 'Penetration Testing' },
      { icon: <i className="fa-solid fa-user-astronaut"></i>, name: 'Ethical Hacking' },
      { icon: <i className="fa-solid fa-eye-slash"></i>, name: 'Detection Evasion' },
      { icon: <i className="fa-solid fa-user-shield"></i>, name: 'Post-Exploitation' },
    ]
  },
  {
    title: 'Vulnerability Management',
    subs: [
      { icon: <i className="fa-solid fa-magnifying-glass"></i>, name: 'Vulnerability Assessment' },
      { icon: <i className="fa-solid fa-list-check"></i>, name: 'CVE & CVSS Analysis' },
      { icon: <i className="fa-solid fa-virus"></i>, name: 'Nessus' },
      { icon: <i className="fa-solid fa-bug"></i>, name: 'OpenVAS' },
    ]
  },
  
  {
    title: 'Scripting & OS',
    subs: [
      { icon: <i className="fa-brands fa-python"></i>, name: 'Python (Security Automation)' },
      { icon: <i className="fa-solid fa-terminal"></i>, name: 'Bash Scripting' },
      { icon: <i className="fa-brands fa-windows"></i>, name: 'Powershell Scripting' },
      { icon: <i className="fa-brands fa-linux"></i>, name: 'Kali Linux' },
      { icon: <i className="fa-brands fa-windows"></i>, name: 'Windows/Linux Security' },
    ]
  },
  {
    title: 'Reporting',
    subs: [
      { icon: <i className="fa-solid fa-file-lines"></i>, name: 'Technical Pentest Reporting' },
      { icon: <i className="fa-solid fa-flask"></i>, name: 'Proof-of-Concept (PoC) Development' },
    ]
  },
];

const languages = [
  { flag: '🇬🇧', name: 'English', level: 'B1' },
  { flag: '🇷🇺', name: 'Russian', level: 'B1' },
  { flag: '🇺🇿', name: 'Uzbek', level: 'Native' },
];

export default function Skills() {
  return (
    <Page className="mt-5">
      <Title>Skills & Technologies</Title>
      <Subtitle>Professional skills and technologies for offensive security, penetration testing, and automation. All skills are presented in a unified minimalist black and white design.</Subtitle>
      <LanguageBar>
        {languages.map(lang => (
          <Lang key={lang.name}>
            <span>{lang.flag}</span>
            {lang.name} <span style={{color:'#bbb',fontWeight:400}}>{lang.level}</span>
          </Lang>
        ))}
      </LanguageBar>
      <Grid>
        {skillsData.map(skill => (
          <Card key={skill.title}>
            <CardTitle>{skill.title}</CardTitle>
            <SubList>
              {skill.subs.map((sub, idx) => (
                <SubItem key={idx}>
                  {sub.icon}
                  {sub.name}
                </SubItem>
              ))}
            </SubList>
          </Card>
        ))}
      </Grid>

<div>
          <h1 className="mb-5  mt-5 text-center">Technical Skills</h1>

<div className="technicalskill">
  <p  data-aos="fade-up" data-aos-duration="1000" align="left">
<img className="skillImage" src="https://img.shields.io/badge/Kali_Linux-557C94?style=for-the-badge&logo=kali-linux&logoColor=white&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Parrot_OS-33CCCC?style=for-the-badge&logo=linux&logoColor=white&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Windows_Server-0078D6?style=for-the-badge&logo=windows&logoColor=white&labelColor=000000" />
</p>

<p  data-aos="fade-up" data-aos-duration="1000" align="left">
<img className="skillImage" src="https://img.shields.io/badge/Nmap-000000?style=for-the-badge&logo=nmap&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Wireshark-1679A7?style=for-the-badge&logo=wireshark&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Metasploit-2596CD?style=for-the-badge&logo=metasploit&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Nessus-00C176?style=for-the-badge&logo=tenable&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Netcat-000000?style=for-the-badge&logo=gnu-bash&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Masscan-000000?style=for-the-badge&logo=hackaday&logoColor=00FF41&labelColor=000000" />
</p>

<p  data-aos="fade-up" data-aos-duration="1000" align="left">
<img className="skillImage" src="https://img.shields.io/badge/Burp_Suite-FF6633?style=for-the-badge&logo=burp-suite&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/OWASP_ZAP-000000?style=for-the-badge&logo=owasp&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/SQLMap-000000?style=for-the-badge&logo=postgresql&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Nikto-8B0000?style=for-the-badge&logo=security&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Wfuzz-000000?style=for-the-badge&logo=hackaday&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Ffuf-000000?style=for-the-badge&logo=hackaday&logoColor=00FF41&labelColor=000000" />
</p>

<p  data-aos="fade-up" data-aos-duration="1000" align="left">
<img className="skillImage" src="https://img.shields.io/badge/Hashcat-000000?style=for-the-badge&logo=hackaday&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/John_The_Ripper-8B0000?style=for-the-badge&logo=lock&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Hydra-4B0082?style=for-the-badge&logo=atom&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/CrackMapExec-FF0000?style=for-the-badge&logo=hackaday&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Medusa-8B008B?style=for-the-badge&logo=security&logoColor=00FF41&labelColor=000000" />
</p>

<p  data-aos="fade-up" data-aos-duration="1000" align="left">
<img className="skillImage" src="https://img.shields.io/badge/Active_Directory-0078D4?style=for-the-badge&logo=windows&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/BloodHound-DC143C?style=for-the-badge&logo=bloodhound&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Mimikatz-FF0000?style=for-the-badge&logo=windows&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/PowerShell-5391FE?style=for-the-badge&logo=powershell&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Impacket-00ADD8?style=for-the-badge&logo=python&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Responder-8B0000?style=for-the-badge&logo=hackaday&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Rubeus-000000?style=for-the-badge&logo=windows&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/SharpHound-DC143C?style=for-the-badge&logo=windows&logoColor=00FF41&labelColor=000000" />
</p>

<p  data-aos="fade-up" data-aos-duration="1000" align="left">
<img className="skillImage" src="https://img.shields.io/badge/Aircrack--ng-000080?style=for-the-badge&logo=wifi&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Ettercap-8B4513?style=for-the-badge&logo=ethernet&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Tcpdump-4682B4?style=for-the-badge&logo=wireshark&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Scapy-3776AB?style=for-the-badge&logo=python&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Bettercap-000000?style=for-the-badge&logo=hackaday&logoColor=00FF41&labelColor=000000" />
</p>

<p  data-aos="fade-up" data-aos-duration="1000" align="left">
<img className="skillImage" src="https://img.shields.io/badge/Cobalt_Strike-FF0000?style=for-the-badge&logo=hackaday&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Empire-8B0000?style=for-the-badge&logo=powershell&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Meterpreter-2596CD?style=for-the-badge&logo=metasploit&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/SearchSploit-000000?style=for-the-badge&logo=exploit-database&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/MSFVenom-2596CD?style=for-the-badge&logo=metasploit&logoColor=00FF41&labelColor=000000" />
</p>

<p  data-aos="fade-up" data-aos-duration="1000" align="left">
<img className="skillImage" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnu-bash&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=00FF41&labelColor=000000" />
</p>

<p  data-aos="fade-up" data-aos-duration="1000" align="left">
<img className="skillImage" src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=00FF41&labelColor=000000" />
</p>

<p className="mb-5" data-aos="fade-up" data-aos-duration="1000"  align="left">
<img className="skillImage" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/VirtualBox-183A61?style=for-the-badge&logo=virtualbox&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/VMware-607078?style=for-the-badge&logo=vmware&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Vim-019733?style=for-the-badge&logo=vim&logoColor=00FF41&labelColor=000000" />
<img className="skillImage" src="https://img.shields.io/badge/Tmux-1BB91F?style=for-the-badge&logo=tmux&logoColor=00FF41&labelColor=000000" />
</p>
</div>


</div>


    </Page>
  );
}
