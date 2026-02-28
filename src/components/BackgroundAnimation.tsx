import React from "react";
import styled, { keyframes } from 'styled-components';
import colors from './colors.json';

const movement = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(10px, 10px); }
  100% { transform: translate(0, 0); }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  overflow: hidden;
  background-color: transparent;
  pointer-events: none;
`;

const Ring = styled.div<{ size: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 2px solid ${colors.colors[2].hex};
  border-radius: 50%;
  opacity: 0.2;
  pointer-events: none;
`;

const SvgLines = styled.svg<{ angle: number; isTopLeft: boolean; offset: number }>`
  position: absolute;
  width: 300vw;
  height: 120px; /* Augmenté pour l'espacement de 40px */
  overflow: visible;
  pointer-events: none;
  
  ${props => props.isTopLeft ? `
    top: 0;
    left: 0;
    transform-origin: left center;
    transform: rotate(${props.angle}deg) translateY(-50%);
  ` : `
    bottom: 0;
    right: 0;
    transform-origin: right center;
    transform: rotate(${props.angle}deg) translateY(50%);
  `}
`;

const CornerAnchor = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  animation: ${movement} 40s ease-in-out infinite;
`;

const TopLeft = styled(CornerAnchor)`
  top: 0;
  left: 0;
`;

const BottomRight = styled(CornerAnchor)`
  bottom: 0;
  right: 0;
`;

const TripleLinesSVG = ({ angle, corner }: { angle: number, corner: 'top-left' | 'bottom-right' }) => {
  const color = colors.colors[2].hex;
  const isTopLeft = corner === 'top-left';
  
  return (
    <SvgLines angle={angle} isTopLeft={isTopLeft} offset={0}>
      {/* Espacement de 40px entre les lignes (10, 50, 90) */}
      <line x1="0" y1="10" x2="300vw" y2="10" stroke={color} strokeWidth="2" opacity="0.3" />
      <line x1="0" y1="50" x2="300vw" y2="50" stroke={color} strokeWidth="2" opacity="0.3" />
      <line x1="0" y1="90" x2="300vw" y2="90" stroke={color} strokeWidth="2" opacity="0.3" />
    </SvgLines>
  );
};

export const BackgroundAnimation = () => {
  return (
    <BackgroundContainer>
      {/* Système Haut-Gauche */}
      <TopLeft>
        <Ring size={800} style={{ top: -400, left: -400 }} />
        <Ring size={860} style={{ top: -430, left: -430 }} />
        
        {/* Un seul triplé à 45° */}
        <TripleLinesSVG angle={45} corner="top-left" />
      </TopLeft>

      {/* Système Bas-Droite */}
      <BottomRight>
        <Ring size={1000} style={{ bottom: -500, right: -500 }} />
        <Ring size={1060} style={{ bottom: -530, right: -530 }} />
        
        {/* Un seul triplé à 45° */}
        <TripleLinesSVG angle={45} corner="bottom-right" />
      </BottomRight>
    </BackgroundContainer>
  );
}
