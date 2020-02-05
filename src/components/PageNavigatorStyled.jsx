import React from 'react';
import PageItemStyled from './PageItemStyled'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  overflow: hidden;
`

export default (props) => {
  const pageItems = ["<", ...Array.from({length:props.cant}, (e, i)=>i+1), ">"];
  return <Container>
      {pageItems.map(nav => <PageItemStyled nav={nav} theme={props.theme}/>)}
  </Container>
}
