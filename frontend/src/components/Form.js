import React from "react";
import Welcome from "./Welcome"; //
import useFormContext from "../hooks/useFormContext";
import EmailOrPhone from "./EmailOrPhone";
import VerifyMobile from "./VerifyMobile";
import VerifyEmail from "./VerifyEmail";
import Success from "./Sucess";

const Form = () => {
  const { step } = useFormContext();

  return (
    <section>
      {step === 0 ? <Welcome /> : null}
      {step === 1 ? <EmailOrPhone /> : null}
      {step === 2 ? <VerifyMobile /> : null}
      {step === 3 ? <VerifyEmail /> : null}
      {step === 4 ? <Success /> : null}
    </section>
  );
};

export default Form;
