import React from 'react'
import Icon from '../../foundation/Icon'
import { NavbarContainer } from './style'

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Icon iconId="ramenGo" width={125} height={16} color="blue" />
    </NavbarContainer>
  )
}

export default Navbar
