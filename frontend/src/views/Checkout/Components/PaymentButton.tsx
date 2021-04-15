import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import { specialColor } from "../../../components/design/system/colors/colors"
import { IPaymentButton } from "./Checkout.interfaces"

type RequestParamsPay = {
  name: string
  quantity: number
  description: string
}

const useStyles = makeStyles(() => ({
  paymentSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
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
  const url: string =
    "https://coderscamp-cinema-app.herokuapp.com/api/payment/pay"
  const data: RequestParamsPay = {
    name: "Star Wars",
    quantity: 2,
    description: "Movie Film"
  }
  const classes = useStyles()

  const handlePayment = (): void => {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .catch((err) => console.error(err))
  }

  return (
    <div className={classes.paymentSection}>
      <span className={classes.totalPayment}>
        SUBTOTAL:
        <strong>{(props.total * 25.0).toFixed(2)} PLN</strong>
      </span>
      <Button
        variant="outlined"
        className={classes.submitButton}
        onClick={handlePayment}
      >
        Submit Payment
      </Button>
    </div>
  )
}

export default PaymentButton
