import styled, { css, keyframes } from "styled-components";

const spinDuration = 1;

const rotating = keyframes`
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
  }
`;

const defaultPositionCssValues = css`
  border-radius: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  `;

const defaultCssValues = css`
  width: 80%;
  height: 80%;
  ${defaultPositionCssValues}
`;

const SpinContainer = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  animation: ${rotating} ${spinDuration}s linear infinite;
  @media (max-width: 400px) {
    position: fixed;
    bottom: 4%;
    right: 4%;
  }
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
  ${defaultCssValues}
  border: 3px solid black;
  z-index: 1;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
`;
const Outter = styled.div`
  ${defaultCssValues}
  border: 6px solid white;
`;
const Close = styled.div`
  width: 100%;
  height: 100%;
  ${defaultPositionCssValues}
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
