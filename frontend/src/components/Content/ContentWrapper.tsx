import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import React from "react"
import { mainColor } from "../design/system/colors/colors"

const ContentWrapper: React.FC = (props) => {
  return (
    <main>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography
          component="div"
          style={{
            backgroundColor: mainColor,
            height: "100vh",
            color: "white"
          }}
        >
          {props.children}
        </Typography>
      </Container>
    </main>
  )
}

export default ContentWrapper
