import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'

const Item = styled.div`
  border-top: 1px solid ${ props => props.theme.borderColor };
  border-bottom: 1px solid ${ props => props.theme.borderColor };
  border-right: 1px solid ${ props => props.theme.borderColor };
  padding: 10px;
  cursor: pointer;
  background-color: ${ props => props.theme.backgroundColor ? props.theme.backgroundColor : '#383B3E' };
  color: ${props => props.clicked ? props.theme.clicked : props.theme.unclicked};
  &:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-left: 1px solid ${ props => props.theme.borderColor };
  }
  &:last-child{
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-right: 1px solid ${ props => props.theme.borderColor };
  }
  &:hover{
    color: ${ props => props.theme.hovered };
  }
`;

const themes = {
  dark: {
    'backgroundColor': '#383B3E',
    'clicked': '#B580E4',
    'hovered': '#B580E4',
    'unclicked': '#80A6E4',
    borderColor: '#202124'
  },
  light: {
    'backgroundColor': '#f1fcfc',
    'clicked': '#72b5b7',
    'hovered': '#72b5b7',
    'unclicked': '#40e0d0',
    borderColor: '#633a82'
  },
  pastel: {
    'backgroundColor': '#ffffdd',
    'clicked': '#a0ffe6',
    'hovered': '#a0ffe6',
    'unclicked': '#81f5ff',
    borderColor: '#ffd5e5'
  },
}

export default (props) => {
  const [ clicked, setClicked ] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return <ThemeProvider theme={themes[props.theme]}>
    <Item clicked={clicked} onClick={handleClick}>{props.nav}</Item>
  </ThemeProvider>
}
