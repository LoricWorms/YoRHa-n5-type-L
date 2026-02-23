import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import colors from './colors.json';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  background-color: transparent;
`;

const Shape = styled(motion.div)`
  position: absolute;
  border: 1px solid ${colors.colors[1].hex};
  opacity: 0.25;
`;

const Circle = styled(Shape)`
  border-radius: 50%;
`;

const SemiCircle = styled(Shape)`
  border-radius: 100px 100px 0 0;
  height: 50px !important;
`;

const QuarterCircle = styled(Shape)`
  border-radius: 100% 0 0 0;
`;

const Line = styled(motion.div)`
  position: absolute;
  background-color: ${colors.colors[1].hex};
  height: 1px;
  opacity: 0.2;
`;

export const BackgroundAnimation = () => {
  // Animation de va-et-vient subtile
  const movement = {
    x: [0, 30, 0],
    y: [0, 15, 0],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const reverseMovement = {
    x: [0, -30, 0],
    y: [0, -15, 0],
    transition: {
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <BackgroundContainer>
      {/* Groupes Haut Gauche */}
      <div style={{ position: 'absolute', top: '5%', left: '2%' }}>
        <Circle animate={movement} style={{ width: 120, height: 120 }} />
        <QuarterCircle animate={reverseMovement} style={{ width: 180, height: 180, top: -20, left: -20 }} />
        <Line animate={movement} style={{ width: 600, top: 40, left: -100, rotate: '20deg' }} />
        <Line animate={reverseMovement} style={{ width: 600, top: 70, left: -100, rotate: '20deg' }} />
        <Line animate={movement} style={{ width: 600, top: 100, left: -100, rotate: '20deg' }} />
      </div>

      {/* Groupes Bas Droite */}
      <div style={{ position: 'absolute', bottom: '5%', right: '2%' }}>
        <SemiCircle animate={reverseMovement} style={{ width: 200, height: 100, bottom: 20, right: 20, rotate: '180deg' }} />
        <Circle animate={movement} style={{ width: 150, height: 150, bottom: -10, right: -10 }} />
        <Line animate={movement} style={{ width: 700, bottom: 50, right: -150, rotate: '-15deg' }} />
        <Line animate={reverseMovement} style={{ width: 700, bottom: 85, right: -150, rotate: '-15deg' }} />
        <Line animate={movement} style={{ width: 700, bottom: 120, right: -150, rotate: '-15deg' }} />
      </div>
    </BackgroundContainer>
  );
};
