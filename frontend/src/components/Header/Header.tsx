/** @jsxImportSource @emotion/react */
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import PersonOutlineIcon from "@material-ui/icons/PersonOutline"
import { Link } from "react-router-dom"
import { RouteBuilder } from "../../routes"
import { Button } from "../design/system/button"
import { mainColor, specialColor } from "../design/system/colors/colors"
import Logo from "./Logo"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const Header: React.FC = () => {
  const classes = useStyles()

  return (
    <header className={classes.root}>
      <AppBar
        color="primary"
        position="static"
        css={{
          backgroundColor: mainColor
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            css={{
              fontFamily: "Sarpanch, sans-serif",
              fontWeight: 700
            }}
          >
            <Link to={RouteBuilder.toMain()}>
              <Logo />
            </Link>
          </Typography>

          <Button href={RouteBuilder.toLogin()} color="inherit">
            <PersonOutlineIcon
              css={{
                color: specialColor
              }}
            />
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header
