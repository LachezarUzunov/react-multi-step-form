import React, { useState, useEffect } from "react";
import classes from "./EmailOrPhone.module.css";
import ProgressBar from "./ProgressBar";
import useFormContext from "../hooks/useFormContext";

const EmailOrPhone = () => {
  const { setStep, setData, data, onSubmit } = useFormContext();
  const [errorMobile, setErrorMobile] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const onGoingBack = () => {
    console.log("clicked");
    setStep((prevState) => prevState - 1);
  };

  const onChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (data.mobileNum.trim().length === 10) {
      setErrorMobile(false);
    }
  }, [data.mobileNum]);

  useEffect(() => {
    if (
      data.emailAddress.trim().length > 5 &&
      data.emailAddress.trim().includes("@")
    ) {
      setErrorEmail(false);
    }
  }, [data.emailAddress]);

  const nextStep = (e) => {
    e.preventDefault();

    if (data.mobileNum.trim().length !== 10) {
      setErrorMobile(true);
      return;
    }

    if (
      data.emailAddress.trim().length <= 5 ||
      !data.emailAddress.includes("@")
    ) {
      setErrorEmail(true);
      return;
    }

    onSubmit(data);
    setErrorEmail(false);
    setErrorMobile(false);
    setStep((prevState) => prevState + 1);
  };

  return (
    <section className={classes.emailPhone__section}>
      <h3 className={classes.welcome}>Welcome to Website</h3>
      <section className={classes.box}>
        <ProgressBar width={33} />
        <div className={classes.header}>
          <img
            className="arrow"
            src={require("../assets/arrow.png")}
            alt="left-arrow"
          />
          <h5 className={classes.enter__email}>
            Enter your mobile no. & email id
          </h5>
        </div>
        <div className="mobile__img">
          <button onClick={onGoingBack}>
            <img src={require("../assets/mobile.png")} alt="phone" />
          </button>
        </div>
        <div>
          <form className={classes.form}>
            <label htmlFor="mobileNum">Mobile No.</label>
            <input
              onChange={onChange}
              className={`${errorMobile ? classes.error : null}`}
              name="mobileNum"
              id="mobileNum"
              placeholder="Enter your mobile no."
              value={data.mobileNum}
            />
            {errorMobile ? (
              <div className={classes.error_box}>
                <p>Please enter your mobile no.</p>
              </div>
            ) : null}
            <label htmlFor="emailAddress">Email address</label>
            <input
              onChange={onChange}
              className={`${errorEmail ? classes.error : null}`}
              name="emailAddress"
              id="emailAddress"
              placeholder="Enter your email id"
              value={data.emailAddress}
            />
            {errorEmail ? (
              <div className="error_box">
                <p className="error_para">Please enter your email id</p>
              </div>
            ) : null}
            <button onClick={nextStep} className="btn__width primary__btn">
              Continue
            </button>
          </form>
        </div>
        <div>
          <p>
            By signing up, I agree to the <span>Privary Policy</span> &{" "}
            <span>Terms of Use</span>
          </p>
        </div>
      </section>
    </section>
  );
};

export default EmailOrPhone;
