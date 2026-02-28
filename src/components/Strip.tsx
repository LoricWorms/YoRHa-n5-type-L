import React from "react";
import styled from "styled-components";

const StripParent = styled.div`
  width: 100%;
  height: 20px;
  min-height: 20px;
  flex-shrink: 0;
  /* Ligne à y=6, Rectangle (width=12) y=4, Ronds (r=2.5) rapprochés (y=12 et y=16) */
  /* Motif répété tous les 80px */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='20' viewBox='0 0 80 20'%3E%3Cline x1='0' y1='6' x2='80' y2='6' stroke='%234e4b42' stroke-width='1'/%3E%3Crect x='5' y='4' width='12' height='4' fill='%234e4b42'/%3E%3Ccircle cx='50' cy='12' r='2.5' fill='%234e4b42'/%3E%3Ccircle cx='65' cy='12' r='2.5' fill='%234e4b42'/%3E%3Ccircle cx='57.5' cy='16' r='2.5' fill='%234e4b42'/%3E%3C/svg%3E");
  background-repeat: repeat-x;
  background-position: center;
  opacity: 0.9;
  margin: 0;
  display: block;
`;

export const Strip = () => {
  return <StripParent />;
}
