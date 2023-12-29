export async function doLoginuser(login) {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify(login),
    // headers: {
    //   "Content-Type": "application/json",
    // },
  };

  try {
    const response = await fetch(process.env.API_ENDPOINT + "login", requestOptions);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to sign up");
    }

    // If response status is in the range 200-299
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}

