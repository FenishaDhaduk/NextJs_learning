"use client";
import React, { useState } from "react";
import { doLoginuser } from "../services/Loginsevice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function LoginPage() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

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
  
      toast.success(response.message);
      router.push("/profile/user");
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

  return (
    <div className="grid grid-cols-12 text-white">
      <div className="col-span-4 col-start-5">
        <div className="py-5">
          <h1 className="text-3xl text-center">Login Here!!</h1>
          <form className="mt-5">
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
                value={login?.email}
                onChange={(event) => {
                  setLogin({ ...login, email: event.target.value });
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
                autoComplete="false"
                value={login?.password}
                onChange={(event) => {
                  setLogin({ ...login, password: event.target.value });
                  validateForm();
                }}
                onBlur={validateForm}
                type="password"
                placeholder="Enter here password"
                className="w-full p-2 rounded-lg bg-gray-500 focus:ring-gray-500-100 border border-gray-400"
              ></input>
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password}</p>
              )}
            </div>
            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                disabled={!isFormValid}
                style={{ opacity: isFormValid ? 1 : 0.5 }}
                className="bg-green-600 py-2 px-3 rounded-lg hover:bg-green-800"
                onClick={(event) => handleLogin(event)}
              >
                Login
              </button>
              <button
                type="submit"
                className="bg-orange-600 py-2 px-3 rounded-lg hover:bg-orange-900 ms-3"
                onClick={(event) => {
                  event.preventDefault();
                  setLogin({
                    email: "",
                    password: "",
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
  );
}

export default LoginPage;
