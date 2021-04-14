import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import Logo from "../../../components/Header/Logo"

const useStyles = makeStyles(() => ({
  title: {
    width: "40%",
    paddingTop: "2em",
    textAlign: "center",
    fontSize: "1.8em",
    fontStyle: "italic",
    borderBottom: "2px solid #ffffff",
    "&:hover": {
      textShadow: "0px 0px 0 #969696, 1px 1px 5px #aba8a8",
      transition: ".5s all"
    }
  }
}))

const CheckoutHeader: React.FC = () => {
  const classes = useStyles()

  return (
    <h3 className={classes.title}>
      <Logo /> | Your Shopping List
    </h3>
  )
}

export default CheckoutHeader
