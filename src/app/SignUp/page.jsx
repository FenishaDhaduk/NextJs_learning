"use client";
import React, { useState } from "react";
import Signupimage from "@/app/assets/Signup.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import { doSignup } from "../services/signupservices";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";


function SignUpPage() {
  const [userdata, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const [visible, setVisible] = useState(false);

  const router = useRouter()

  const validateForm = () => {
    let errors = {};
    const { name, email, password, about } = userdata;

    if (!name) {
      errors.name = "Name is required.";
    }

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

    if (!about) {
      errors.about = "about is required.";
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await doSignup(userdata);
      toast.success(response.message);
      router.push("/login");
      setUserData({
        name: "",
        email: "",
        password: "",
        about: "",
      });
      return response;
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="grid grid-cols-12 text-white">
        <div className="col-span-4 col-start-5">
          <div className="py-[4rem]">
            <div className="my-8 flex justify-center">
              <Image
                src={Signupimage}
                style={{ width: "30%" }}
                alt="Signup banner"
              />
            </div>
            <h1 className="text-3xl text-center">SignUp Here!!</h1>
            <form autoComplete="off" className="mt-5">
              <div className="mt-3">
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium mb-2 ps-2"
                >
                  Username
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  id="user_name"
                  placeholder="Enter here username"
                  value={userdata?.name}
                  onBlur={validateForm}
                  onChange={(event) => {
                    setUserData({ ...userdata, name: event.target.value });
                    validateForm();
                  }}
                  className="w-full p-2 rounded-lg bg-gray-500 focus:ring-gray-500-100 border border-gray-400"
                ></input>
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
              </div>
              <div className="mt-3">
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium mb-2 ps-2"
                >
                  Email
                </label>
                <input
                  autoComplete="false"
                  type="email"
                  id="user_email"
                  placeholder="Enter here email"
                  value={userdata?.email}
                  onChange={(event) => {
                    setUserData({ ...userdata, email: event.target.value });
                    validateForm();
                  }}
                  onBlur={validateForm}
                  className="w-full p-2 rounded-lg bg-gray-500 focus:ring-gray-500-100 border border-gray-400"
                ></input>
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
              </div>
              <div className="mt-3">
                <label
                  htmlFor="user_password"
                  className="block text-sm font-medium mb-2 ps-2"
                >
                  Password
                </label>
                <input
                  type={visible ? "text" : "password"}
                  autoComplete="false"
                  value={userdata?.password}
                  onChange={(event) => {
                    setUserData({ ...userdata, password: event.target.value });
                    validateForm();
                  }}
                  onBlur={validateForm}
                  placeholder="Enter here password"
                  className="w-full p-2 rounded-lg bg-gray-500 focus:ring-gray-500-100 border border-gray-400"
                ></input>
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
                  <p style={{ color: "red" }}>{errors.password}</p>
                )}
              </div>
              <div className="mt-4">
                <label
                  htmlFor="task_content"
                  className="block text-sm font-medium mb-2 ps-2"
                >
                  About
                </label>
                <textarea
                  id="user_about"
                  name="user_about"
                  placeholder="Enter here about"
                  value={userdata?.about}
                  onChange={(event) => {
                    setUserData({ ...userdata, about: event.target.value });
                    validateForm();
                  }}
                  onBlur={validateForm}
                  className="w-full p-2 rounded-lg bg-gray-500 focus:ring-gray-500-100 border border-gray-400"
                  rows={5}
                ></textarea>
                {errors.about && <p style={{ color: "red" }}>{errors.about}</p>}
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  disabled={!isFormValid}
                  style={{ opacity: isFormValid ? 1 : 0.5 }}
                  className="bg-green-600 py-2 px-3 rounded-lg hover:bg-green-800"
                  onClick={(event) => handleSignup(event)}
                >
                  SignUp
                </button>
                <button
                  type="submit"
                  // disabled={!isFormValid}
                  // style={{ opacity: isFormValid ? 1 : 0.5 }}
                  className="bg-orange-600 py-2 px-3 rounded-lg hover:bg-orange-900 ms-3"
                  onClick={(event) => {
                    event.preventDefault();
                    setUserData({
                      name: "",
                      email: "",
                      password: "",
                      about: "",
                    });
                    setIsFormValid(false);
                  }}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
