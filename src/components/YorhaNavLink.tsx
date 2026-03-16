import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { NavLink, useSearchParams, useLocation } from "react-router-dom"
import pointeurNoir from '../pointeur-noir.png';

type YorhaNavLinkProps = {
  text?: string | any;
  to?: string;
  filter?: string;
  className?: string;
  disabled?: boolean;
  filterType?: string;
  variant?: "button" | "nav" | "transparent" | "neutral";
  rightText?: string | number;
}

const Icon = styled.div`
  width: 10px;
  height: 10px;
  min-width: 10px;
  flex-shrink: 0;
  background-color: #57544a;
  transform: rotate(45deg);
  transition: background-color .15s linear;
`;

export const YorhaCustomLink = ({ className, text, filter, filterType, to, disabled = false, rightText, ...props }: YorhaNavLinkProps) => {
  const [params] = useSearchParams();
  const location = useLocation();

  const searchIsActive = filterType && filter ? params.get(filterType) === filter : false;

  const basePathForActive = to?.endsWith('/default') ? to.replace('/default', '') : null;
  const pathPrefixActive = basePathForActive
    ? location.pathname.startsWith(basePathForActive + '/')
    : false;

  return (
    <div className={className}>
      <Button disabled={disabled} type="button">
        <NavLink
          className={({ isActive }) =>
            ['mainClass', (isActive || searchIsActive || pathPrefixActive) ? "active" : "inactive"].join(' ')
          }
          to={filter && filterType ? `${to}?${filterType}=${filter}` : `${to}`}
          {...props}
        >
          <div className='wrapper'>
            <div className='leftContent'><Icon /> {text}</div>
            {rightText !== undefined && <span className='rightText'>{rightText}</span>}
          </div>
        </NavLink>
      </Button>
    </div>
  )
}

const Button = styled.button`
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  border: none;
  &:disabled{
    opacity: 0.6;
    pointer-events: none;
  }
`

const CustomNavLink = styled(YorhaCustomLink)`
  .mainClass{
    position: relative;
    font-size: 1rem;
    height: 100%;
    width: 100%;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    color: #57544a;
    align-items: flex-start;
    background-image: ${props => props.theme.backgroundImage};
    background-size: 200%;
    transition: .2s linear;
    z-index: 2;
    &:hover{
      background-position: -100%;
      color: #b4af9a;
    }
    &:hover ${Icon}{
      background-color: #b4af9a;
    }
    &::before{
      height: 0px;
      width: 100%;
      background-color: #57544a;
      content: "";
      transform: translate(0px, 0px);
      transition: 0.2s;
      pointer-events: none;
    }
    &::after{
      height: 0px;
      width: 100%;
      background-color: #57544a;
      content: "";
      transform: translate(0px, 0px);
      transition: 0.2s;
      z-index: -1;
      pointer-events: none;
    }
    &:hover{
      &::before{
        height: 2px;
        width: 100%;
        content: "";
        transform: translate(0px, -8px);
        pointer-events: none;
      }
      &::after{
        height: 2px;
        z-index: -1;
        width: 100%;
        content: "";
        transform: translate(0px, 8px);
        pointer-events: none;
      }
    }
  }
  .active{
    background-position: -100%;
    width: ${props => props.theme.width || '100%'};
    padding-bottom: ${props => props.theme.padding || '0rem'};
    color: #b4af9a;
    > .wrapper::before {
      display: ${props => (props.theme as any).showCursor ? 'block' : 'none'};
      content: "";
      position: absolute;
      left: -54px;
      top: 50%;
      transform: translateY(-50%);
      width: 42px;
      height: 50px;
      background-image: url(${pointeurNoir});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      filter: ${props => (props.theme as any).cursorFilter || 'none'};
      pointer-events: none;
    }
    &:hover{
      &::before{
        height: 0px;
        transform: translate(0px, 0px);
      }
      &::after{
        height: 0px;
        transform: translate(0px, 0px);
      }
    }
  }
  .active ${Icon}{
    background-color: #b4af9a;
  }
  .inactive{
  }
  .wrapper{
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: inherit;
    font-weight: 500;
    font-size: 1rem;
    .leftContent {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
    }
    .rightText {
      flex-shrink: 0;
      opacity: 0.75;
    }
  }
  .active > .wrapper{
    color: #b4af9a;
  }
`

CustomNavLink.defaultProps = {
  theme: {
    backgroundImage: `linear-gradient(90deg, #b4af9a 50%, #b4af9a 50%, #57544a 50%, #57544a 100%)`,
    padding: `2rem`,
    width: `100%`,
    showCursor: true,
    cursorFilter: 'invert(1)',
  }
};

const theme = {
  backgroundImage: `linear-gradient(90deg, #b4af9a 50%, #b4af9a 50%, #57544a 50%, #57544a 100%)`,
  width: `110%`,
  padding: `0rem`,
  showCursor: true,
  cursorFilter: 'invert(1)',
};

const transparent = {
  backgroundImage: `linear-gradient(90deg, transparent 50%, transparent 50%, #57544a 50%, #57544a 100%)`,
  width: `100%`,
  padding: `0rem`,
  showCursor: true,
};

const neutral = {
  backgroundImage: `linear-gradient(90deg, #b4af9a 50%, #b4af9a 50%, #57544a 50%, #57544a 100%)`,
  width: `100%`,
  padding: `0rem`,
  showCursor: false,
}

export const YorhaNavLink = ({ to, filter = "", filterType, variant = "nav", text, rightText, ...props }: YorhaNavLinkProps) => {
  const checker = () => {
    if (variant === "nav") {
      return <CustomNavLink to={to} filter={filter} text={text} filterType={filterType} variant={variant} rightText={rightText} {...props} />
    } else if (variant === "button") {
      return (
        <ThemeProvider theme={theme}>
          <CustomNavLink to={to} filter={filter} filterType={filterType} variant={variant} text={text} rightText={rightText} {...props} />
        </ThemeProvider>
      )
    } else if (variant === "transparent") {
      return (
        <ThemeProvider theme={transparent}>
          <CustomNavLink to={to} filter={filter} filterType={filterType} variant={variant} text={text} rightText={rightText} {...props} />
        </ThemeProvider>
      )
    } else if (variant === "neutral") {
      return (
        <ThemeProvider theme={neutral}>
          <CustomNavLink to={to} filter={filter} filterType={filterType} variant={variant} text={text} rightText={rightText} {...props} />
        </ThemeProvider>
      )
    }
  }
  return <>{checker()}</>
}
