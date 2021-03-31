/** @jsxImportSource @emotion/react */
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import grey from "@material-ui/core/colors/grey"
import { makeStyles } from "@material-ui/core/styles"
import PersonOutlineIcon from "@material-ui/icons/PersonOutline"
import { Link } from "react-router-dom"
import { RouteBuilder } from "../../routes"
import { Button } from "../design/system/button"
import { mainColor, specialColor } from "../design/system/colors/colors"
import Logo from "./Logo"

const useStyles = makeStyles((theme) => ({
  header: {
    marginRight: "auto",
    backgroundColor: mainColor,
    borderBottom: `0.5px solid ${grey[800]}`
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontFamily: "Sarpanch, sans-serif",
    fontWeight: 700,
    fontSize: "30px"
  },
  userIcon: {
    color: specialColor
  },
  link: {
    color: "white",
    textDecoration: "none"
  }
}))

const Header: React.FC = () => {
  const classes = useStyles()

  return (
    <header className={classes.header}>
      <AppBar color="primary" position="static" className={classes.header}>
        <Toolbar>
          <Typography variant="h1" className={classes.title}>
            <Link className={classes.link} to={RouteBuilder.toMain()}>
              <Logo />
            </Link>
          </Typography>

          <Button href={RouteBuilder.toLogin()} color="inherit">
            <PersonOutlineIcon className={classes.userIcon} />
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header
