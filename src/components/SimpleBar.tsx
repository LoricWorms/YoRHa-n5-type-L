import React from "react";
import styled from "styled-components";
import colors from './colors.json';

const StyledSimpleBar = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.colors[2].hex}; /* dark-brown */
  opacity: 0.5;
  margin: 1rem 0;
`;

export const SimpleBar = () => {
  return <StyledSimpleBar />;
}
