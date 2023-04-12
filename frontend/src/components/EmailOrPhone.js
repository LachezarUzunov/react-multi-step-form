import React from "react";
import classes from "./EmailOrPhone.module.css";
import ProgressBar from "./ProgressBar";
import useFormContext from "../hooks/useFormContext";

const EmailOrPhone = () => {
  const { setStep, setData, data, onSubmit } = useFormContext();

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

  const nextStep = (e) => {
    onSubmit(data);
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
              name="mobileNum"
              id="mobileNum"
              placeholder="Enter your mobile no."
              value={data.mobileNum}
            />
            <label htmlFor="emailAddress">Email address</label>
            <input
              onChange={onChange}
              name="emailAddress"
              id="emailAddress"
              placeholder="Enter your email id"
              value={data.emailAddress}
            />
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
