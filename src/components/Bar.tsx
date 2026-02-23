import React from "react";
import styled from 'styled-components';
import colors from './colors.json';

interface BarProps {
  dark?: boolean;
}

const BarParent = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  position: relative;
  align-items: stretch;
`;

const MainBar = styled.div<{ themeColor: string }>`
  background-color: ${props => props.themeColor};
  width: 8px;
  height: 100%;
  margin-right: 4px;
  position: relative;

  /* Terminaux horizontaux */
  &::before, &::after {
    content: "";
    position: absolute;
    left: -2px;
    width: 12px;
    height: 2px;
    background-color: ${props => props.themeColor};
  }

  &::before { top: 0; }
  &::after { bottom: 0; }
`;

const ThinBar = styled.div<{ themeColor: string }>`
  background-color: ${props => props.themeColor};
  width: 2px;
  height: 100%;
`;

export const Bar = ({ dark = false, ...props }: BarProps) => {
  const color = dark ? colors.colors[2].hex : colors.colors[1].hex;
  
  return (
    <BarParent {...props}>
      <MainBar themeColor={color} />
      <ThinBar themeColor={color} />
    </BarParent>
  );
}
