import React from "react";
import styled from "styled-components";

const StripParent = styled.div`
  width: 100%;
  height: 16px;
  /* Ligne à y=6, Rectangles y=4 (hauteur 4), Points y=10 et y=13 */
  /* Motif répété tous les 80px */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='16' viewBox='0 0 80 16'%3E%3Cline x1='0' y1='6' x2='80' y2='6' stroke='%234e4b42' stroke-width='1'/%3E%3Crect x='5' y='4' width='30' height='4' fill='%234e4b42'/%3E%3Ccircle cx='50' cy='10' r='1.5' fill='%234e4b42'/%3E%3Ccircle cx='65' cy='10' r='1.5' fill='%234e4b42'/%3E%3Ccircle cx='57.5' cy='14' r='1.5' fill='%234e4b42'/%3E%3C/svg%3E");
  background-repeat: repeat-x;
  opacity: 0.9;
  margin: 0;
`;

export const Strip = () => {
  return <StripParent />;
}
