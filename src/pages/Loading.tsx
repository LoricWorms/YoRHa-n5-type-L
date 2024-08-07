import styled from "styled-components";
import { LoadingDots, LoadingLogs, SpinLoadingIcon } from "../components";
import yorhaLogo from "./../assets/yorha-opacity-logo.png";
import { useNavigate } from "react-router-dom";
/*
TODO: Add props descriptions
TODO: Add route changing animation
TODO: Add glitching animation
TODO: centralize media mobile width value
*/

const Main = styled.main`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85) url(${yorhaLogo}) center center no-repeat;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  text-shadow: 0px 0px 5px white;
  line-height: 2.1vh;
  padding: 2% 4% 4% 4%;
  @media (max-width: 400px) {
    background-size: contain;
  }
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
    <Main>
      <Header>
        <Container style={{}}>
          <h1>LOADING </h1>
          <p style={{ marginLeft: "4px" }}> - CHECKING SYSTEM</p>
          <LoadingDots />
        </Container>
        <SpinLoadingIcon />
      </Header>
      <section style={{ marginLeft: "2%" }}>
        <LoadingLogs callBack={loadingCompleted} />
      </section>
    </Main>
  );
};
