import styled, { keyframes } from "styled-components";

/* TODO: Fix color */
/* TODO: Create communs styles variables */

const spinDuration = 1;

const rotating = keyframes`
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
  }
`;

const SpinContainer = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  animation: ${rotating} ${spinDuration}s linear infinite;
`;
const Inner = styled.div`
  width: 35%;
  height: 35%;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Spin = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid black;
  z-index: 1;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
`;
const Outter = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 6px solid white;
`;
const Close = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid white;
`;

export const SpinLoadingIcon = () => (
  <SpinContainer>
    <Inner />
    <Spin />
    <Outter />
    <Close />
  </SpinContainer>
);
