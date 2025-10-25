import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

// Animatsiyalar
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const slideIn = keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Styled Components
const StyledNavbar = styled.nav`
  background: #000 ;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2000; /* Yuqori z-index */
  box-shadow: 0 4px 50px rgba(48, 48, 48, 0.56); /* Nozik soya */
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1); /* Hoverda soya */
  }
`;

const NavbarBrand = styled(RRNavLink)`
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  letter-spacing: 1px;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: #e0e0e0;
    transform: translateY(-2px); /* Hoverda kichik ko'tarilish */
    animation: ${pulse} 0.5s ease;
  }

  span {
    color: #b0b0b0; /* Och kulrang aksent */
    font-weight: 400;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    position: fixed;
    top: 60px; /* Navbar balandligiga mos */
    right: 0;
    height: calc(100vh - 60px);
    width: 280px; /* Kengroq mobil menu */
    background: #000;
    padding: 2rem;
    box-shadow: -5px 0 10px rgba(255, 255, 255, 0.05);
    animation: ${slideIn} 0.4s ease-in-out;
  }
`;

const NavItem = styled.li`
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin: 1.5rem 0;
  }
`;

const NavLink = styled(RRNavLink)`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.3s ease;

  &.active {
    color: #e0e0e0;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background: linear-gradient(90deg, #fff, #b0b0b0); /* Gradient chiziq */
      animation: ${fadeIn} 0.3s ease;
    }
  }

  &:hover {
    color: #e0e0e0;
    transform: translateY(-2px); /* Hoverda kichik ko'tarilish */
    animation: ${pulse} 0.5s ease;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0.8rem 0;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  width: 30px;
  height: 20px;
  justify-content: space-between;

  span {
    width: 100%;
    height: 3px;
    background: #fff;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }

  ${props =>
    props.isOpen &&
    `
    span:nth-child(1) {
      transform: rotate(45deg) translate(6px, 6px);
      background: #e0e0e0;
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg) translate(6px, -6px);
      background: #e0e0e0;
    }
  `}
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <StyledNavbar>
      <NavbarBrand  data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300"  to="/">
 <h2 style={{ color: "#fff" , fontFamily: "monospace"}} >The Deep </h2>      </NavbarBrand>
      <Hamburger isOpen={isOpen} onClick={toggle}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <NavList  isOpen={isOpen}>
        {["Home", "About", "Skills", "Certificates", "Contact"].map(item => (
          <NavItem  data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300" key={item}>
            <NavLink
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </StyledNavbar>
  );
};

export default NavBar;

//       
