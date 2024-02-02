"use client";
import React, { useContext, useState } from "react";
import { doLoginuser } from "../services/Loginsevice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import UserContext from "@/context/userContext";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import logo from "@/app/assets/taskHublogo.png";


function LoginPage() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [visible, setVisible] = useState(false);
  const userfetchdata = useContext(UserContext);

  const validateForm = () => {
    let errors = {};
    const { email, password } = login;

    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid.";
    }

    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
    let payload = {
      email: login?.email,
      password: login?.password,
    };
    try {
      const response = await doLoginuser(payload);
      console.log(response);
      toast.success(response.message);
      userfetchdata.setUser(response?.user);
      if (response?.success == true) {
        router.push("/");
      }
      setLogin({
        email: "",
        password: "",
      });
      return response;
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const googlelogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      checkIfUserRegistered(tokenResponse?.access_token);
    },
  });

  const checkIfUserRegistered = async (accessToken) => {
    try {
      const responce = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      const data = await responce.json();
      console.log(data, "55555");

      return data;
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="bg-[#b5b5c5] h-screen flex justify-center items-center">
    <div className="max-[512px] mt-[0px] mr-auto mb-[28px] ml-auto pt-[62px] pr-[99px] pb-[48px] pl-[99px]  bg-white shadow-2xl">
      <div className="flex justify-center items-center mt-[-52px] p-[8px]">
        <Image width={100} src={logo} />
        <h3 className="text-[#5856d6] font-serif text-3xl font-bold ml-[-14px]">
          TaskHub
        </h3>
      </div>

      <p className="text-[#333333] font-serif font-bold  text-2xl text-center p-[15px]">
        Log In Your Account Here!!
      </p>
      <div
        className="flex justify-center items-center mt-[10px] mb-[7px]  h-[40px] bg-[#ffffff] text-center decoration-none border rounded-md border-slate-300 cursor-pointer relative"
        onClick={(event) => {
          googlelogin();
          event.preventDefault();
        }}
      >
        <span className="mt-[4px] text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.98em"
            height="1em"
            viewBox="0 0 256 262"
          >
            <path
              fill="#4285F4"
              d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
            />
            <path
              fill="#34A853"
              d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
            />
            <path
              fill="#FBBC05"
              d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
            />
            <path
              fill="#EB4335"
              d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
            />
          </svg>{" "}
        </span>
        <button className="ml-[8px] flex text-center">
          Continue With Google
        </button>
      </div>
      <li className="list-none p-[15px]">
        <div className="flex items-center justify-center">
          <div className="flex-grow h-0.5 bg-gray-300"></div>
          <div className="mx-4 text-gray-500">or</div>
          <div className="flex-grow h-0.5 bg-gray-300"></div>
        </div>
      </li>

      <div className="gap-7">
        <form class="max-w-md mx-auto">
     
          <div class="relative z-0 w-full mb-5 group">
            <input
              autoComplete="off"
              type="email"
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={login?.email}
              onChange={(event) => {
                setLogin({ ...login, email: event.target.value });
                validateForm();
              }}
              onBlur={validateForm}
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
            {errors.email && (
              <p style={{ color: "red", fontSize: "10px" }}>{errors.email}</p>
            )}
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type={visible ? "text" : "password"}
              autoComplete="off"
              name="floating_password"
              id="floating_password"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={login?.password}
              onChange={(event) => {
                setLogin({ ...login, password: event.target.value });
                validateForm();
              }}
              onBlur={validateForm}
            />
            <label
              for="floating_password"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
            <span
              style={{
                position: "relative",
                display: "block",
                float: "right",
                color: "black",
                top: "-2em",
                right: "0.8em",
                cursor: "pointer",
              }}
            >
              {
                <FontAwesomeIcon
                  icon={visible ? faEyeSlash : faEye}
                  onClick={() => setVisible(!visible)}
                />
              }
            </span>
            {errors.password && (
              <p style={{ color: "red", fontSize: "10px" }}>
                {errors.password}
              </p>
            )}
          </div>
       
          <button
            type="submit"
            disabled={!isFormValid}
            style={{ opacity: isFormValid ? 1 : 0.5 }}
            onClick={(event) => {
              handleLogin(event);
            }}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default LoginPage;
