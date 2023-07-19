"use client";

import styles from "@/app/contact/contact.module.css";
import { Mulish } from "next/font/google";
import commonstyle from "@/app/styles/common.module.css";
import React from "react";

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function ContactForm() {
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = React.useState(null);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });

      console.log("11", response);
      // Set the status based on the response from the API route
      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      className={styles.contact_form}
      autocomplete="off"
      onSubmit={() => handleSubmit()}
    >
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Enter your name
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your name"
            className={mulish.className}
            value={user.username}
            required
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
      </div>

      {/* Email */}
      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
          Enter your email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className={mulish.className}
            value={user.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </label>
      </div>

      {/* contact */}

      <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
          Phone Number
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter your phone"
            className={mulish.className}
            value={user.phone}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </label>
      </div>

      {/* message */}

      <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
          Message
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Enter your Message"
            className={mulish.className}
            value={user.message}
            onChange={handleChange}
            // onChange={handleChange}
            required
            autoComplete="off"
          />
        </label>
      </div>

      <div>
        <button
          type="submit"
          className={`${mulish.className} ${commonstyle.button_css}`}
        >
          Send Message
        </button>
      </div>

      <div>
        {status === "success" && (
          <p className={styles.success_msg}>Thank you for your message!</p>
        )}
        {status === "error" && (
          <p className={styles.error_msg}>
            There was an error submitting your message. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}
