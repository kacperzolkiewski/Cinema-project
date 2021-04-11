import { Card, CardContent, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  cardContainer: {
    display: "flex"
  },
  root: {
    width: 140,
    height: 80,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "transparent",
    color: "white",
    border: "2px solid #6E093A",
    margin: "15px"
  },
  textCenter: {
    textAlign: "center"
  }
}))
const ShowingCard = (props: {
  hours: string[]
  is3D: boolean
}): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={classes.cardContainer}>
      {props.hours!.map((h, i) => (
        <Card key={i} className={classes.root}>
          <CardContent>
            <Typography variant={"h6"} key={i} className={classes.textCenter}>
              {h}
            </Typography>
            <Typography
              variant={"subtitle1"}
              key={i - 1}
              className={classes.textCenter}
            >
              {props.is3D ? "3D" : "2D"}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default ShowingCard
