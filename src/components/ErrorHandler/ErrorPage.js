import React from "react";
import classes from "./ErrorStyle.module.css";
import Card from "./Card";
import Button from "./Button";
const ErrorHandler = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <div className={classes.actions}>
          <Button onClick={props.onConfirm}>Close</Button>
        </div>
      </Card>
    </div>
  );
};

export default ErrorHandler;
