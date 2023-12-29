import handleResponse from "@/components/handleResponce";
import axios from "axios";

export async function doSignup(user) {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(process.env.API_ENDPOINT + "users", requestOptions);

    if (!response.ok) {
      // If response status is not in the range 200-299
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to sign up");
    }

    // If response status is in the range 200-299
    const data = await response.json();
    return data;
  } catch (error) {
    // Network errors or parsing errors will end up here
    console.error(error);
    throw new Error(error.message);
  }
}

