import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import colors from './colors.json';

interface WidgetProps {
  dark?: boolean;
  title?: string | number;
  content?: React.ReactNode;
  icon?: boolean; // controls the colored square marker — title always visible
  lvl?: string | number;
}

const WidgetParent = styled.div`
  width: 100%;
  height: 100%;
  background-color: #dad4bb;
  border: 1px solid rgba(95, 90, 74, 0.35);
  display: flex;
  flex-direction: column;
`

const TitleSquare = styled.div`
  height: 20px;
  width: 20px;
  flex-shrink: 0;
  background-color: ${props => props.theme.bg};
`

TitleSquare.defaultProps = {
  theme: { bg: `${colors.colors[2].hex}` }
}

const TitleSquareDark = styled(TitleSquare)``;
TitleSquareDark.defaultProps = {
  theme: { bg: `${colors.colors[0].hex}` }
}

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background-color: ${props => props.theme.main};
  color: ${props => props.theme.color};
  padding: 0.5rem 1rem;
  width: 100%;
  font-size: 1.1rem;
  overflow: hidden;
  span:first-of-type {
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  span:last-of-type {
    flex-shrink: 0;
    white-space: nowrap;
    font-size: 0.85rem;
    opacity: 0.8;
  }
`;

const Content = styled.div`
  width: 100%;
  flex: 1;
  font-size: 1rem;
  color: #3F3D36;
  overflow: hidden;
`;

Header.defaultProps = {
  theme: {
    main: `${colors.colors[1].hex}`,
    color: `${colors.colors[2].hex}`
  }
}

const darkHeaderTheme = {
  main: `${colors.colors[2].hex}`,
  color: `${colors.colors[0].hex}`
};

export const Widget = ({ dark = false, title, content, lvl, icon = true, ...props }: WidgetProps) => {
  return (
    <WidgetParent>
      {dark ? (
        <ThemeProvider theme={darkHeaderTheme}>
          <Header>
            {icon && <TitleSquareDark />}
            <span>{title}</span>
            {lvl && <span>{lvl}</span>}
          </Header>
        </ThemeProvider>
      ) : (
        <Header>
          {icon && <TitleSquare />}
          <span>{title}</span>
          {lvl && <span>{lvl}</span>}
        </Header>
      )}
      <Content>
        {content}
      </Content>
    </WidgetParent>
  );
}
