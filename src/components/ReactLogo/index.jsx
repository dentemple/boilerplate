import React from 'react'
import styled from 'styled-components'

import logo from './logo.svg'

const Logo = () => <Image src={logo} alt='logo' />

const Image = styled.img`
  height: 20vmin;
`

export default Logo
