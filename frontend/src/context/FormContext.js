import { createContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [data, setData] = useState({
    mobileNum: "",
    emailAddress: "",
    newUser: false,
  });

  const [step, setStep] = useState(0);

  const title = {
    0: "Welcome",
    1: "Email or Phone",
    2: "Verify Mobile",
    3: "Verify Email",
    4: "Success",
  };

  return (
    <FormContext.Provider value={{ data, setData, step, setStep, title }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
