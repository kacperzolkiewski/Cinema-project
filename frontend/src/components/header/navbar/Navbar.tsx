/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import PersonOutlineIcon from "@material-ui/icons/PersonOutline"
import { Link } from "react-router-dom"
import { RouteBuilder } from "../../../routes"
import { Button } from "../../design/system/button/index"

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

const Navbar: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        css={css`
          background-color: #000000;
        `}
      >
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            css={css`
              font-family: Sarpanch, sans-serif;
              font-weight: 700;
            `}
          >
            <Link to={RouteBuilder.toMain()}>
              <span
                css={css`
                  color: #1a90ff;
                `}
              >
                .
              </span>
              Cinema
              <span
                css={css`
                  color: #1a90ff;
                `}
              >
                Crew
              </span>
            </Link>
          </Typography>

          <Button href={RouteBuilder.toLogin()} color="inherit">
            <PersonOutlineIcon
              css={css`
                color: #1a90ff;
              `}
            />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
