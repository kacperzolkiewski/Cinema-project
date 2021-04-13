import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import { specialColor } from "../../../components/design/system/colors/colors"
import { IPaymentButton } from "./Checkout.interfaces"

const useStyles = makeStyles(() => ({
  paymentSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "2em 0"
  },
  submitButton: {
    borderColor: "#ffffff",
    color: "#ffffff",
    fontSize: "1.3em"
  },
  totalPayment: {
    fontSize: "1.5em",
    "& strong": {
      margin: "0 .5em",
      color: `${specialColor}`,
      textDecoration: "underline"
    }
  }
}))

const PaymentButton: React.FC<IPaymentButton> = (
  props: IPaymentButton
): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={classes.paymentSection}>
      <span className={classes.totalPayment}>
        SUBTOTAL:
        <strong>{(props.total * 25.0).toFixed(2)} PLN</strong>
      </span>
      <Button variant="outlined" className={classes.submitButton}>
        Submit Payment
      </Button>
    </div>
  )
}

export default PaymentButton
