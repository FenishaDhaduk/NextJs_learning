import handleResponse from "@/components/handleResponce";
import axios from "axios";

export async function doAddTask(task) {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(process.env.API_ENDPOINT + "CompanyProduct", requestOptions);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to addtask");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
  
}
