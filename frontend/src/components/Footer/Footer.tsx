import { makeStyles } from "@material-ui/core/styles"
import { mainColor } from "../design/system/colors/colors"

const useStyles = makeStyles(() => ({
  footer: {
    flexGrow: 1,
    color: "white",
    backgroundColor: mainColor
  }
}))

const Footer = () => {
  const classes = useStyles()
  return <footer className={classes.footer}>&copy; CodersCamp 2021</footer>
}

export default Footer
