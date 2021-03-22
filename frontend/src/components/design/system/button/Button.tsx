import { Button as MaterialButton, ButtonProps } from "@material-ui/core"

type Props = {
  type?: "button" | "submit"
} & ButtonProps

const Button: React.FC<Props> = ({ type = "button", ...rest }) => (
  <MaterialButton type={type} {...rest} />
)

export default Button
