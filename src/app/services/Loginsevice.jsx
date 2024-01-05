"use client";

export async function doLoginuser(login) {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify(login),
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(
      process.env.API_ENDPOINT + "login",
      requestOptions
    );
    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}

export async function GetCurrentuser() {
  const responce = await fetch(process.env.API_ENDPOINT + "Current");
  const responseBody = await responce.json();

  return responseBody;
}

export async function Logoutuser() {
  const requestOptions = {
    method: "POST",
        headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(
      process.env.API_ENDPOINT + "logout",
      requestOptions
    );
    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}
