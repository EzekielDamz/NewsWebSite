import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdditionalPage from "./AdditionalPage";
import { PiEyeLight } from "react-icons/pi";
import { GoEyeClosed } from "react-icons/go";
import { error } from "./constant/ErrorMessage";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config-firebase/firebase";

const Signup = () => {
  let validateName, validateEmail, validatePassword, validateUserName;

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleTogglePassword = () => {
    setShow(!show);
  };

  const [state, setState] = useState({
    fullName: "",
    Email: "",
    userName: "",
    password: "",
  });
  const [errorMessage, setErrorMessages] = useState({
    fullName: "",
    Email: "",
    userName: "",
    password: "",
  });

  // validate input filed with regex
  const isValidInput = (name, value) => {
    switch (name) {
      case "fullName":
        validateName = /^[a-zA-Z]{3,}( {1,2}[a-zA-Z]{3,}){0,}$/.test(
          value.trim()
        );
        return validateName;
      case "Email":
        validateEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(
          value
        );
        return validateEmail;
      case "userName":
        validateUserName = /^[a-zA-Z]{3,}( {1,2}[a-zA-Z]{3,}){0,}$/.test(
          value.trim()
        );
        return validateUserName;
      case "password":
        validatePassword =
          /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[a-zA-Z._\/-\w]{8,}$/.test(value);
        return validatePassword;
    }
  };

  // handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    const validInputValue = isValidInput(name, value);
    //  set the state value of the input field
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrorMessages((prevState) => ({
      ...prevState,
      validInput: { ...prevState.validInput, [name]: validInputValue },
      [name]: validInputValue ? "" : error[name],
      // },
    }));
  };

  // // Sign In Function
  const handleSignIn = async (event) => {
    event.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        state.Email,
        state.password,
        state.userName
      );
      const user = userCredential.user;
      console.log(user);
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("userName", JSON.stringify(state.userName));
      
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <section>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 ">
        <div className="">
          <AdditionalPage />
        </div>
        <div className=" pl-10 pt-10 pr-[8rem] max-sm:pr-[2rem]  max-lg:pr-[4rem]">
          <h1 className="text-4xl font-bold text-gray-800 max-sm:text-2xl">
            Create Account
          </h1>
          <p className="pb-7 pt-2 text-lg text-gray-800 font-normal">
            Get current news updates on{" "}
            <span className="text-blue-800 font-semibold text-xl">
              LatestNew.Web
            </span>
            {/* <p className="text-blue-800 font-semibold text-xl">LatestNew.Web</p> */}
          </p>

          <div className="pt-5">
            <form action="" onSubmit={handleSignIn}>
              <label htmlFor="Name" className="text-xl font-normal">
                Name
              </label>{" "}
              <br />
              <input
                type="text"
                name="fullName"
                required
                value={state.fullName}
                onChange={handleChange}
                className="input-style focus:outline-none "
              />
              <br />
              <p className="text-red-500">{errorMessage.fullName}</p>
              <label htmlFor="Email" className="text-xl font-normal">
                Email
              </label>
              <br />
              <input
                type="email"
                name="Email"
                value={state.Email}
                onChange={handleChange}
                required
                className={`input-style focus:outline-none`}
              />
              <br />
              <p className="text-red-500">{errorMessage.Email}</p>
              <label htmlFor="Username" className="text-xl font-normal">
                Username
              </label>
              <br />
              <input
                type="text"
                name="userName"
                value={state.userName}
                onChange={handleChange}
                className="input-style focus:outline-none"
                required
              />{" "}
              <br />
              <p className="text-red-500">{errorMessage.userName}</p>
              <label htmlFor="password" className="text-xl font-normal">
                Password
              </label>
              <br />
              <div className="flex relative">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                  value={state.password}
                  // onChange={(event) => onChangeHandler(event)}
                  required
                  className="input-style focus:outline-none"
                />

                <span
                  className="absolute  ml-[90%] top-4"
                  onClick={handleTogglePassword}
                >
                  {show ? (
                    <div>
                      <PiEyeLight />
                    </div>
                  ) : (
                    <div>
                      <GoEyeClosed />
                    </div>
                  )}
                </span>
              </div>
              <p className="text-red-500">{errorMessage.password}</p>
              <p className="text-lg font-light text-gray-800">
                Already have an account{" "}
                <Link to="/login" className="text-lg text-blue-600 font-bold ">
                  Log In
                </Link>
              </p>
              <div className="text-center mt-5 pb-8">
                <button
                  type="submit"
                  className="xl:bg-blue-800  xl:px-[10rem]  lg:px-5 py-2 rounded-2xl
                   text-white xl:text-xl font-medium md:px-[5rem] md:bg-blue-800 max-sm:bg-blue-800 max-sm:px-[6rem]"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
