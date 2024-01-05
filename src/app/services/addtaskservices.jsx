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
    const response = await fetch(
      process.env.API_ENDPOINT + "CompanyProduct",
      requestOptions
    );

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

export async function fetchsingleuser(id) {
  const requestOptions = {
    method: "GET",
  };
  const responce = await fetch(
    process.env.API_ENDPOINT + "users/" + id + "/task");

  const data = await responce.json();

  return data;
}


export async function DeleteTaskService(id){
  const requestOptions={
    method:"DELETE"
  }
  const responce = await fetch(
    process.env.API_ENDPOINT + "CompanyProduct/" + id,requestOptions);

  const data = await responce.json();

  return data;
}