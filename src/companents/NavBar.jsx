import React, { useState, useEffect } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Hexagon, Menu, X } from "lucide-react";

// --- Styled Components ---
const Nav = styled(motion.nav)`
  background: ${props => props.scrolled ? "rgba(0, 0, 0, 0.95)" : "transparent"};
  backdrop-filter: ${props => props.scrolled ? "blur(10px)" : "none"};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5000;
  padding: ${props => props.scrolled ? "0.8rem 2rem" : "1.2rem 2rem"};
  display: flex;
  justify-content: space-between; /* Logo chapda, Nav o'ngda */
  align-items: center;
  border-bottom: 1px solid ${props => props.scrolled ? "rgba(255, 255, 255, 0.1)" : "transparent"};
  transition: all 0.3s ease;
`;

const Logo = styled(RRNavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: #fff;
  font-family: 'Space Mono', monospace;
  
  .logo-text {
    font-size: 1.2rem;
    font-weight: 900;
    letter-spacing: 2px;
    span { color: #555; }
  }
`;

const DesktopNav = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
  margin: 0;

  @media (max-width: 992px) {
    display: none;
  }
`;

const NavLink = styled(RRNavLink)`
  color: #777;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: 0.3s;

  &.active, &:hover {
    color: #fff;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
`;

const MobileToggle = styled.button`
  background: none;
  border: none;
  color: #fff;
  display: none;
  cursor: pointer;
  @media (max-width: 992px) { display: block; }
`;

// MOBIL MENYU: Eniga yarim (50%), Bo'yiga to'liq (100vh)
const SideDrawer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 50%; /* Horizontal yarim */
  height: 100vh; /* Vertical to'liq */
  background: #050505;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 6000;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.9);

  @media (max-width: 576px) {
    width: 70%; /* Juda kichik ekranlarda biroz kengroq */
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 5500;
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { n: "Home", p: "/" },
    { n: "About", p: "/about" },
                { n: "News", p: "/news" },
        { n: "Portfolio", p: "/portfolio" },
    { n: "Skills", p: "/skills" },
    { n: "Certificates", p: "/certificates" },
    { n: "Contact", p: "/contact" }
  ];

  return (
    <>
      <Nav scrolled={scrolled}>
        {/* CHAPDA LOGO */}
        <Logo to="/">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
            <Hexagon size={22} color="#fff" />
          </motion.div>
          <div className="logo-text">The<span>DEEP</span>_</div>
        </Logo>

        {/* O'NGDA NAVBAR */}
        <DesktopNav>
          {links.map((link) => (
            <li key={link.n}>
              <NavLink to={link.p}>{link.n}</NavLink>
            </li>
          ))}
        </DesktopNav>

        <MobileToggle onClick={() => setIsOpen(true)}>
          <Menu size={24} />
        </MobileToggle>
      </Nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <Overlay 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setIsOpen(false)} 
            />
            
            <SideDrawer
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                <X size={28} onClick={() => setIsOpen(false)} style={{ cursor: 'pointer', color: '#fff' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', marginTop: '40px' }}>
                {links.map((link, i) => (
                  <motion.div
                    key={link.n}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <NavLink 
                      to={link.p} 
                      onClick={() => setIsOpen(false)}
                      style={{ fontSize: '1.2rem', display: 'block' }}
                    >
                      {link.n}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div style={{ marginTop: 'auto', borderTop: '1px solid #111', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.6rem', color: '#444', letterSpacing: '2px' }}>
                  OPERATOR: S.SHOAKBAROV
                </span>
              </div>
            </SideDrawer>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;