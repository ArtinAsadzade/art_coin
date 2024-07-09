import { useCallback, useRef, useState } from "react";
import { decrypted, encrypted, findUserHandler, getPinAsNumber } from "../utils";
import { adminsData } from "../data/Data";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const decryptedData = decrypted("user");
  const [users] = useState(adminsData);
  const [step, setStep] = useState(1);
  const [value, setValue] = useState({
    email: "",
    pin: ["", "", "", ""],
  });

  const navigate = useNavigate();

  const inputRefs = useRef([]);
  const pinNumber = getPinAsNumber(value.pin);
  const findUser = findUserHandler(value.email, pinNumber, users);

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
        setStep(2);
      }
    } else if (step === 2) {
      if (findUser.email && findUser.code) {
        encrypted(findUser, "user");
        navigate("/home");
        setValue({
          email: "",
          pin: ["", "", "", ""],
        });
      }
    }
  };

  return (
    <>
      {decryptedData ? (
        <Navigate to={"/home"} />
      ) : (
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
      )}
    </>
  );
}
