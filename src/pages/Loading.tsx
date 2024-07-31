import styled from "styled-components";
import { LoadingDots, LoadingLogs, SpinLoadingIcon } from "../components";
import yorhaLogo from "./../assets/yorha-opacity-logo.png";

/*
TODO: Fix fonts
TODO: Fix padding
TODO: Fix remove loading
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
      <LoadingLogs removeSpeed={10000} />
    </Section>
  );
};
