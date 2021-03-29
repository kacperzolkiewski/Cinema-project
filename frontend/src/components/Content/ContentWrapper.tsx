import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import grey from "@material-ui/core/colors/grey"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import { mainColor } from "../design/system/colors/colors"

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: mainColor,
    borderBottom: `0.5px solid ${grey[800]}`,
    boxShadow: "0 10px 6px -6px #777",
    color: "white"
  },
  content: {
    minHeight: "80vh"
  }
}))

const ContentWrapper: React.FC = (props) => {
  const classes = useStyles()
  return (
    <main className={classes.root}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div" className={classes.content}>
          {props.children}
        </Typography>
      </Container>
    </main>
  )
}

export default ContentWrapper
