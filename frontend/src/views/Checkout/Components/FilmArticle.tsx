import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import AddIcon from "@material-ui/icons/Add"
import RemoveIcon from "@material-ui/icons/Remove"
import React, { useState } from "react"
import { specialColor } from "../../../components/design/system/colors/colors"
import { IFilmArticle } from "./Checkout.interfaces"

const useStyles = makeStyles(() => ({
  filmArticle: {
    width: "22.5em",
    height: "27em",
    boxShadow: "0px 0px 10px #ffffff"
  },
  filmTitle: {
    width: "100%",
    margin: "0",
    textAlign: "center",
    padding: ".5em 0",
    borderBottom: "2px solid #ffffff",
    textDecoration: "underline",
    color: `${specialColor}`,
    fontSize: "1.5em",
    "&:hover": {
      textShadow: "0px 0px 10px ",
      transition: ".5s all"
    }
  },
  flexSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  filmImage: {
    width: "16em",
    padding: "2em 0 0em 3em"
  },
  filmQuantityDiv: {
    textAlign: "center",
    "& *": {
      width: "100%"
    },
    "& strong": {
      color: `${specialColor}`,
      fontSize: "1.2em",
      padding: "1em"
    }
  },
  filmColorButton: {
    color: "#ffffff",
    width: ".5em",
    height: "2em"
  }
}))

const FilmArticle: React.FC<IFilmArticle> = (
  props: IFilmArticle
): JSX.Element => {
  const [quantity, setQuantity] = useState<number>(props.quantity)
  const [showComponent, setShowComponent] = useState<boolean>(true)
  const handleChange = props.onQuantityChange
  const classes = useStyles()

  const handleDecrease = (): void => {
    setQuantity((prevQuantity) => prevQuantity - 1)
    handleChange(false)
    quantity === 1 &&
      setShowComponent((prevShowComponent) => !prevShowComponent)
  }

  const handleIncrement = (): void => {
    handleChange(true)
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  return (
    <>
      {showComponent && (
        <article className={classes.filmArticle}>
          <h4 className={classes.filmTitle}>{props.title}</h4>
          <div className={classes.flexSection}>
            <img
              src={props.imageUrl}
              alt="Film Preview"
              className={classes.filmImage}
            />
            <div className={classes.filmQuantityDiv}>
              <em>Quantity: </em>
              <div>
                <Button
                  className={classes.filmColorButton}
                  onClick={() => handleDecrease()}
                >
                  <RemoveIcon />
                </Button>
                <strong>{quantity}</strong>
                <Button
                  className={classes.filmColorButton}
                  onClick={() => handleIncrement()}
                >
                  <AddIcon />
                </Button>
              </div>
            </div>
          </div>
        </article>
      )}
    </>
  )
}

export default FilmArticle
