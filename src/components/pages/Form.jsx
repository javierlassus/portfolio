import React, { useEffect, useState } from "react";
import "../Components.scss";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

//MATERIAL UI STYLE FOR INPUTS
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: 340,
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
    <div className="form">
      <form
        name="contact"
        method="POST"
        action="/contact/?success=true"
        data-netlify="true"
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        {success && (
          <p style={{ color: "#2f4858" }}>Thanks for your message! </p>
        )}
        <div className="form--textfield">
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Name"
            type="Full Name"
            color="secondary"
          />
        </div>
        <div className="form--textfield">
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Email"
            type="email"
            color="secondary"
          />
        </div>
        <div className="form--textfield">
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Subject"
            type="text"
            color="secondary"
          />
        </div>
        <div className="form--textfield">
          <TextField
            id="outlined-textarea"
            label="Message"
            placeholder="Type Here..."
            multiline
            variant="outlined"
            color="secondary"
          />
        </div>
      </form>
      <button className="form--ctn__input form--ctn__btn" type="submit">
        SEND
      </button>
    </div>
  );
}
