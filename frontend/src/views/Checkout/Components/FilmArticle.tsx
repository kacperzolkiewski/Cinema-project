import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import AddIcon from "@material-ui/icons/Add"
import RemoveIcon from "@material-ui/icons/Remove"
import React, { useState } from "react"
import { IFilmArticle } from "./Checkout.interfaces"

const useStyles = makeStyles(() => ({
  filmArticle: {
    width: "15vw",
    boxShadow: "0px 0px 10px #ffffff"
  },
  filmTitle: {
    width: "100%",
    margin: ".5em 0",
    paddingBottom: ".2em",
    borderBottom: "2px solid #ffffff",
    textAlign: "center",
    fontSize: "1.5vw"
  },
  filmImage: {
    width: "80%",
    marginLeft: "10%"
  },
  filmQuantityDiv: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: ".2em",
    "& strong": {
      padding: "0 1em"
    }
  },
  filmColorButton: {
    color: "#ffffff"
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
          <img
            src={props.imageUrl}
            alt="Film Preview"
            className={classes.filmImage}
          />
          <div className={classes.filmQuantityDiv}>
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
        </article>
      )}
    </>
  )
}

export default FilmArticle
