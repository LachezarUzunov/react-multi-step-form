import { createContext, useState } from "react";

const FormContext = createContext();
const APP_URL = `http://localhost:5000/api`;

export const FormProvider = ({ children }) => {
  const [data, setData] = useState({
    mobileNum: "",
    emailAddress: "",
    newUser: false,
  });
  const [step, setStep] = useState(0);

  const [verificationCode, setVerificationCode] = useState("");

  const [token, setToken] = useState("");

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
      setToken(result.token);
      console.log(result);
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

  const onValidation = async () => {
    console.log(verificationCode);
    try {
      const response = await fetch(`${APP_URL}/verify`, {
        method: "POST",
        body: JSON.stringify({ code: verificationCode }),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const success = await response.json();
        console.log(success);
        return success;
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
    }
  };

  return (
    <FormContext.Provider
      value={{
        data,
        setData,
        step,
        setStep,
        onSubmit,
        verificationCode,
        setVerificationCode,
        onValidation,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
