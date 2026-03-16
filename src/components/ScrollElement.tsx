import React from "react";
import styled from "styled-components";

type TabProps = {
  content?: React.ReactNode;
}

const StyledTab = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #dad4bb;
  border: 1px solid rgba(95, 90, 74, 0.35);
  justify-content: space-between;
`

const Separator = styled.div`
  width: 100%;
  height: 2px;
  margin: 1rem 0rem 1rem 0rem;
  background-color: #b4af9a;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &::after{
    content: ".";
    opacity: 0;
    width: 0;
  }
`

const SeparatorStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1.2rem;
  align-items: center;

`

const Dot = styled.div`
  height: 0.3rem;
  width: 0.3rem;
  background-color: #b4af9a;
  border-radius: 50%;
`

const Content = styled.div`
  overflow-y: auto;
  flex: 1;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  
  /* NieR Style Scrollbar */
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    border-left: 1px solid #57544a33;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #57544a;
    &:hover {
      background-color: #8c8671;
    }
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: #57544a transparent;
`

export const ScrollElement = ({content}:TabProps) =>{
  return(
    <StyledTab>
      <SeparatorStyle><Separator/> <Dot/></SeparatorStyle>
        <Content>
          {content}
        </Content>
        <SeparatorStyle><Separator/> <Dot/></SeparatorStyle>
    </StyledTab>
  )
}