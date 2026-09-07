import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const blink = keyframes`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`;

const Container = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000;
  font-family: 'Space Mono', monospace;
  color: #fff;
`;

const Logo = styled.div`
  font-size: 2.2rem;
  font-weight: 900;
  letter-spacing: 4px;
  margin-bottom: 30px;

  span { color: #444; }
`;

const Track = styled.div`
  width: min(240px, 60vw);
  height: 3px;
  background: #222;
  border-radius: 3px;
  overflow: hidden;
`;

const Fill = styled.div`
  height: 100%;
  background: #fff;
  border-radius: 3px;
  transition: width 0.1s linear;
`;

const Percent = styled.div`
  margin-top: 14px;
  font-size: 0.7rem;
  color: #666;
  letter-spacing: 2px;
`;

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 250);
          return 100;
        }
        return p + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Logo>The<span>DEEP</span>_</Logo>
      <Track>
        <Fill style={{ width: `${progress}%` }} />
      </Track>
      <Percent>{progress}%</Percent>
    </Container>
  );
};

export default LoadingScreen;
