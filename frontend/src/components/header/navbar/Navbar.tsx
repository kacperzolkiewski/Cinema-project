import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import PersonOutlineIcon from "@material-ui/icons/PersonOutline"
import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { RouteBuilder } from "../../../routes"

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: calc(100% - 20px);
  justify-content: space-between;
  color: #1a90ff;
  padding: 20px;
  font-size: 24px;
`

const Logo = styled.div`
  font-family: Sarpanch, sans-serif;
  font-weight: 700;
  padding-right: 20px;
`
const White = styled.span`
  color: white;
`

const StyledPersonOutlineIcon = styled(PersonOutlineIcon)`
  color: #1a90ff;
`

const StyledMenu = styled(Menu)`
  max-width: 100% - 160px;
  color: #1a90ff;
  left: -40px !important;
  top: 24px !important;
`

const StyledMenuItem = styled(MenuItem)`
  font-size: 0.8rem !important;
`

const StyledLink = styled(Link)`
  color: #1a90ff;
`

const ButtonWrapperWithBorder = styled.div`
  border-left: 1px solid white;
  border-radius: 0;
  height: 100%;
`

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null)

  const handleClick = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Header>
      <StyledLink to="/">
        <Logo>
          .<White>Cinema</White>Crew
        </Logo>
      </StyledLink>
      <ButtonWrapperWithBorder>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <StyledPersonOutlineIcon />
        </Button>
      </ButtonWrapperWithBorder>

      <StyledMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledLink to={RouteBuilder.toLogin()}>
          <StyledMenuItem onClick={handleClose}>Login</StyledMenuItem>
        </StyledLink>
        <StyledLink to={RouteBuilder.toRegister()}>
          <StyledMenuItem onClick={handleClose}>Register</StyledMenuItem>
        </StyledLink>
      </StyledMenu>
    </Header>
  )
}

export default Navbar
