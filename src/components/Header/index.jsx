import React from 'react'
import styled from 'styled-components'

import ReactLogo from '../ReactLogo'

const Header = () => (
  <StyledContainer>
    <ReactLogo />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <StyledLink
      href='https://reactjs.org'
      target='_blank'
      rel='noopener noreferrer'>
      Learn React
    </StyledLink>
  </StyledContainer>
)

const StyledContainer = styled.header`
  /* display */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* box */
  background-color: #282c34;
  min-height: 100vh;

  /* text */
  color: white;
  font-size: calc(10px + 2vmin);
`

const StyledLink = styled.a`
  color: #61dafb;
`

export default Header
