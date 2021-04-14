import styled from 'styled-components'

interface NavbarContainerInterface {}

export const NavbarContainer = styled.nav<NavbarContainerInterface>`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: transparent;
  padding: 40px 40px 24px 40px;
`
