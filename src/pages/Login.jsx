import { useCallback, useRef, useState } from "react";
import { decrypted, getPinAsNumber } from "../utils";
import { Navigate } from "react-router-dom";
import axios from "axios";
import useFetch from "../hooks/useFetch";
import Toast from "../components/Toast";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Login() {
  const decryptedData = decrypted("user");
  const [step, setStep] = useState(1);
  const [toastData, setToastData] = useState({ msg: "", icon: null });
  const [value, setValue] = useState({
    email: "",
    pin: ["", "", "", ""],
  });
  const { data, setData, err, setErr, loading, setLoading } = useFetch();

  const inputRefs = useRef([]);
  const pinNumber = getPinAsNumber(value.pin);

  const handleValueChanges = useCallback((e) => {
    const { name, value: inputValue } = e.target;

    if (name.startsWith("pin")) {
      const index = parseInt(name.replace("pin", ""), 10);
      setValue((prevValue) => {
        const newPin = [...prevValue.pin];
        newPin[index] = inputValue;
        return {
          ...prevValue,
          pin: newPin,
        };
      });

      if (inputValue !== "" && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    } else {
      setValue((prevValue) => ({
        ...prevValue,
        [name]: inputValue,
      }));
    }
  }, []);

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && value.pin[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const submitHandler = () => {
    if (step === 1) {
      if (value.email) {
        setLoading(true);
        axios
          .post("http://localhost:3000/api/send-verification-code", {
            email: value.email,
          })
          .then((response) => {
            (response.data && setData(response.data)) ||
              setLoading(false) ||
              setStep(2) ||
              setToastData({
                icon: <CheckIcon className="w-6 text-green-500" />,
                msg: response.data.message,
              });
          })
          .catch((error) => {
            setErr(error) ||
              setLoading(false) ||
              setToastData({
                icon: <XMarkIcon className="w-6 text-red-500" />,
                msg: error,
              });
          })
          .finally(setLoading(false));
      } else {
        setToastData({
          icon: <XMarkIcon className="w-6 text-red-500" />,
          msg: "Please fill in the field below",
        });
      }
    } else if (step === 2) {
      if (pinNumber.length === 4 && value.email) {
        axios
          .post("http://localhost:3000/api/verify-email", {
            email: value.email,
            verificationCode: pinNumber,
          })
          .then((response) => {
            if (response) {
              setData(response.data);
              setLoading(false);
              setToastData({
                icon: <CheckIcon className="w-6 text-green-500" />,
                msg: response.data.message,
              });
            }
            console.log(response);
          })
          .catch((error) => {
            setErr(error) ||
              setLoading(false) ||
              setToastData({
                icon: <XMarkIcon className="w-6 text-red-500" />,
                msg: error,
              });
          })
          .finally(setLoading(false));
      } else {
        setToastData({
          icon: <XMarkIcon className="w-6 text-red-500" />,
          msg: "Please fill in the field below",
        });
      }
    }
  };

  return (
    <>
      {decryptedData ? (
        <Navigate to={"/home"} />
      ) : (
        <>
          <Toast icon={toastData.icon} msg={toastData.msg} />
          <div className="w-full bg-primary h-svh flex justify-center items-center">
            <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-primary md:text-2xl">Welcome To Art Coin</h1>
                <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <div className="flex justify-between">
                      <label htmlFor="email" className="mb-2 text-sm font-bold text-primary">
                        {step === 1 ? "Your email" : "Enter Code"}
                      </label>
                      {step === 2 ? (
                        <>
                          <label htmlFor="email" className="mb-2 text-sm font-bold text-primary">
                            {value.email}
                          </label>
                        </>
                      ) : (
                        <></>
                      )}
                      <label htmlFor="email" className="mb-2 text-sm font-bold text-primary">
                        Step: {step}
                      </label>
                    </div>
                    {step === 1 ? (
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-100 text-primary rounded-lg block w-full p-2.5 placeholder-gray-400 outline-none border-2 focus:ring-inset focus:ring-secondary focus:ring-2 border-secondary"
                        placeholder="name@company.com"
                        required
                        onChange={handleValueChanges}
                        value={value.email}
                      />
                    ) : (
                      <div className="flex gap-5 justify-center mt-3">
                        {value.pin.map((pinValue, index) => (
                          <input
                            key={index}
                            type="text"
                            name={`pin${index}`}
                            className="block w-[38px] text-center bg-gray-100 p-3 rounded-md text-sm outline-none border-2 focus:ring-inset focus:ring-secondary focus:ring-2 border-secondary disabled:opacity-50 disabled:pointer-events-none"
                            value={pinValue}
                            onChange={(e) => handleValueChanges(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            ref={(el) => (inputRefs.current[index] = el)}
                            maxLength={1}
                            autoFocus={index === 0}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-secondary"
                    onClick={submitHandler}
                  >
                    {step === 1 ? "Next" : "Login"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
