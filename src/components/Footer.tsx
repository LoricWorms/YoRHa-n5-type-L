import React from "react";
import styled from "styled-components";
import { Bar } from "./Bar";
import colors from './colors.json'

type FooterProps = {
  text?: string;
}

const FooterParent = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  background-color: ${colors.colors[0].hex};
  align-items: center;
  position: relative;
`

const TextContainer = styled.div`
  font-size: 20px;
  padding: 0 1rem;
  color: ${colors.colors[2].hex};
  display: flex;
  align-items: center;
  height: 100%;
`

export const Footer = ({text, ...props}: FooterProps) => {
  return(
    <FooterParent {...props}>
        <Bar dark={true}/>
        <TextContainer>
          {text}
        </TextContainer>
    </FooterParent>
  )
}