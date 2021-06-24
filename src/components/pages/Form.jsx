import React, { useEffect, useState } from "react";
import "../Components.scss";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

//MATERIAL UI STYLE FOR INPUTS
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      display: "flex",
    },
  },
}));

export default function Form() {
  //TO RENDER THE THANK YOU MESSAGE
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  //MATERIAL UI CLASS NAME FOR FORM
  const classes = useStyles();

  return (
    <form
      name="contact"
      method="POST"
      className="form"
      data-netlify="true"
      action="/contact/?success=true"
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      {success && <p style={{ color: "#2f4858" }}>Thanks for your message! </p>}

      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Name"
        type="text"
        color="secondary"
      />

      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Email"
        type="email"
        color="secondary"
      />

      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Subject"
        type="text"
        color="secondary"
      />

      <TextField
        id="outlined-textarea"
        label="Message"
        placeholder="Type Here..."
        multiline
        variant="outlined"
        color="secondary"
      />

      <button className="form--ctn__input form--ctn__btn" type="submit">
        SEND
      </button>
    </form>
  );
}
