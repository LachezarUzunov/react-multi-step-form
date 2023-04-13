import React, { useEffect } from "react";
import Card from "./Card";
import ProgressBar from "./ProgressBar";
import classes from "./VerifyMobile.module.css";
import useFormContext from "../hooks/useFormContext";

const VerifyMobile = () => {
  const {
    setStep,
    verificationCode,
    setVerificationCode,
    onValidation,
    errorInput,
    setErrorInput,
    data,
  } = useFormContext();

  useEffect(() => {
    if (verificationCode.length === 6) {
      setErrorInput(false);
    }
  }, [verificationCode, setErrorInput]);

  const nextStep = () => {
    setStep((prevState) => prevState + 1);
  };

  const onChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (verificationCode.length !== 6) {
      setErrorInput(true);
      return;
    } else {
      onValidation(verificationCode);
      setErrorInput(false);
    }
  };

  return (
    <section className="verify__section">
      <h3 className="verify__header">Verify your mobile number</h3>
      <Card>
        <ProgressBar width={66} />
        <div className={classes.header}>
          <img
            className="arrow"
            src={require("../assets/arrow.png")}
            alt="left-arrow"
          />
          <h5 className={classes.enter__email}>
            A 6-digit code has been sent as a text message to
          </h5>
        </div>
        <div className="mobile__img">
          <img src={require("../assets/mobile.png")} alt="phone" />
        </div>
        <div>
          <form className={classes.form}>
            <label htmlFor="mobile">Verification code</label>
            <input
              id="mobile"
              value={verificationCode}
              onChange={onChange}
              placeholder="Enter 6-digit verification code here"
            />
            {errorInput ? (
              <div className="error_box">
                <p className="error_para">
                  {" "}
                  Invalid code, enter 6 digit valid code
                </p>
              </div>
            ) : null}
            <button onClick={onSubmit} className="btn__width primary__btn">
              {data.newUser ? "Create account" : "Continue"}
            </button>
          </form>
        </div>
        <div>
          <p>
            Didn't receive code? <span>Resend Code</span>
          </p>
          <p>OR</p>
          <p>
            <span onClick={nextStep} className={classes.or}>
              Send verification code on email
            </span>
          </p>
        </div>
      </Card>
    </section>
  );
};

export default VerifyMobile;
