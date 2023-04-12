import React from "react";
import Welcome from "./Welcome";
import EmailOrPhone from "./EmailOrPhone";
import VerifyMobile from "./VerifyMobile";
import VerifyEmail from "./VerifyEmail";
import Success from "./Sucess";

const Form = () => {
  return (
    <section className="form">
      <EmailOrPhone />
      <Welcome />
      <VerifyMobile />
      <VerifyEmail />
      <Success />
    </section>
  );
};

export default Form;
