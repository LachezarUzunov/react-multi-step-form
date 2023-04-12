import { createContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [data, setData] = useState({
    mobileNum: "",
    emailAddress: "",
    newUser: false,
  });

  const onSubmit = (data) => {
    if (data.mobileNum.length === 1 || data.emailAddress.length === 1) {
      return;
    }
    console.log(data);
  };

  const [step, setStep] = useState(0);

  const title = {
    0: "Welcome",
    1: "Email or Phone",
    2: "Verify Mobile",
    3: "Verify Email",
    4: "Success",
  };

  return (
    <FormContext.Provider
      value={{ data, setData, step, setStep, title, onSubmit }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
