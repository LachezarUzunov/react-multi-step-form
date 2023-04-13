import React from "react";
import Card from "./Card";
import ProgressBar from "./ProgressBar";
import classes from "./Sucess.module.css";

const Success = () => {
  return (
    <section className="verify__section">
      <h3 className="verify__header">Verification successful!</h3>
      <Card>
        <ProgressBar width={100} />

        <div className={classes.verification_sucess}>
          <div className="mobile__img success">
            <img src={require("../assets/success.png")} alt="phone" />
          </div>

          <div>
            <p>Verification sucessfull!</p>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Success;
