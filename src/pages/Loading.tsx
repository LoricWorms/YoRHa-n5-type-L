import styled from "styled-components";
import { LoadingDots, LoadingLogs, SpinLoadingIcon } from "../components";
import yorhaLogo from "./../assets/yorha-opacity-logo.png";
import { useNavigate } from "react-router-dom";
/*
TODO: Fix fonts
TODO: Fix padding
TODO: Add props descriptions
TODO: Add route changing animation
TODO: Add glitching animation
*/

const Section = styled.section`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85) url(${yorhaLogo}) center center no-repeat;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  padding: 2% 4% 4% 4%;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Loading = () => {
  const navigate = useNavigate();
  const waitngTime = 1000;

  const loadingCompleted = () => {
    setTimeout(() => {
      navigate("/map");
    }, waitngTime);
  };

  return (
    <Section>
      <Header>
        <Container style={{}}>
          <h1>LOADING </h1>
          <p> - CHECKING SYSTEM</p>
          <LoadingDots />
        </Container>
        <SpinLoadingIcon />
      </Header>
      <LoadingLogs callBack={loadingCompleted} />
    </Section>
  );
};
