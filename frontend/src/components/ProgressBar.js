import React, { useEffect, useState } from "react";
import classes from "./ProgressBar.module.css";

const ProgressBar = ({ width }) => {
  const [progressWidth, setWidth] = useState();
  useEffect(() => {
    setWidth(width);
  }, [width]);

  return (
    <div className={classes.bar}>
      <div
        className={`${classes.progress} ${
          progressWidth === 66
            ? classes.progress_sixty
            : progressWidth === 100
            ? classes.progress_full
            : null
        }`}
      ></div>
    </div>
  );
};

export default ProgressBar;
