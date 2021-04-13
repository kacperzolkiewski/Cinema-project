import blue from "@material-ui/core/colors/blue"
import { makeStyles } from "@material-ui/core/styles"
import { specialColor } from "../design/system/colors/colors"

const useStyles = makeStyles(() => ({
  premiere: {
    display: "flex",
    maxWidth: "90px",
    fontSize: "0.6rem",
    position: "absolute",
    textTransform: "uppercase",
    zIndex: 2
  },
  rectangle: {
    padding: "2px 20px 1px 8px",
    background: `linear-gradient(to right, ${specialColor} 50%, ${blue[900]})`
  },
  triangle: {
    margin: 0,
    width: 0,
    height: 0,
    borderTop: `15px solid ${blue[900]}`,
    borderRight: "3px solid transparent"
  },
  hidden: {
    display: "none"
  }
}))

function PremiereFlag() {
  const classes = useStyles()
  return (
    <div className={classes.premiere}>
      <div className={classes.rectangle}>premiera</div>
      <div className={classes.triangle} />
    </div>
  )
}

export default PremiereFlag
