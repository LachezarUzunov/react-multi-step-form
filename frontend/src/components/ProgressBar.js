import React from "react";
import classes from "./ProgressBar.module.css";

const ProgressBar = () => {
  return (
    <div className={classes.bar}>
      <div className={classes.progress}></div>
    </div>
  );
};

export default ProgressBar;
