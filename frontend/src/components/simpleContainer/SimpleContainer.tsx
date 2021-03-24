import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import React from "react"

const SimpleContainer: React.FC = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography
          component="div"
          style={{
            backgroundColor: "#000000",
            height: "100vh",
            color: "white"
          }}
        >
          {props.children}
        </Typography>
      </Container>
    </React.Fragment>
  )
}

export default SimpleContainer
