import React from "react";
import Card from "./Card";
import ProgressBar from "./ProgressBar";

const Success = ({ props }) => {
  return (
    <section className="verify__section">
      <h3 className="verify__header">Verify your mobile number</h3>
      <Card>
        <ProgressBar width={100} />

        <div className="mobile__img success">
          <img src={require("../assets/success.png")} alt="phone" />
        </div>

        <div>
          <p>Verification sucessfull!</p>
        </div>
      </Card>
    </section>
  );
};

export default Success;
