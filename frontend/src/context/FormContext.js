import { createContext, useState } from "react";

const FormContext = createContext();
const APP_URL = `http://localhost:5000/api`;

export const FormProvider = ({ children }) => {
  const [data, setData] = useState({
    mobileNum: "",
    emailAddress: "",
    newUser: false,
  });

  const onSubmit = async () => {
    console.log(data);
    try {
      const res = await fetch(APP_URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await res.json();
      return result;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return message;
    }
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
