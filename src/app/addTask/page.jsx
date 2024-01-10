"use client";

import React, {useContext, useState } from "react";
import loginimage from "@/app/assets/login.svg";
import Image from "next/image";
import { doAddTask } from "../services/addtaskservices";
import { toast } from "react-toastify";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
import UserContext from "@/context/userContext";

function AddTask() {

  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [loader, setLoader] = useState(false);
  const router = useRouter()


  const context = useContext(UserContext);
  const validateForm = () => {
    let errors = {};
    const { title, content, status } = task;

    if (!title) {
      errors.title = "title is required.";
    }

    if (!content) {
      errors.content = "content is required.";
    }

    if (!status) {
      errors.status = "status is required.";
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleAddTask = async (event) => {
    event.preventDefault();
    try {
      let payload = {
        title: task?.title,
        content: task?.content,
        status: task?.status,
        userId: "6584206826aee16583dbf980",
      };
      setLoader(true);
      const responce = await doAddTask(payload);
      toast.success(responce.message, {
        position: "top-right",
      });
      router.push("/show-tasks");
      setLoader(false);
      setTask({
        title: "",
        content: "",
        status: "none",
      });
      setLoader(false);
      return responce;
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
      });
      setLoader(false);
    }
  };

  const handleClearTask = (event) => {
    event.preventDefault();
    setTask({
      title: "",
      content: "",
      status: "none",
    });
  };
  return (
    <>
      <div className="grid grid-cols-12 justify-center  text-white">
        <div className="col-span-4 col-start-5 p-5 shadow-sm">
          <div className="my-[4rem] flex justify-center">
            <Image
              src={loginimage}
              style={{ width: "50%" }}
              alt="Login banner"
            />
          </div>
          <h1 className="text-3xl text-center">{context?.editTask == true ? "Edit Your Task Here!!!" : "Add Your task here!!!"}</h1>
          <form>
            <div className="mt-4">
              <label
                htmlFor="task_title"
                className="block text-sm font-medium mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="task_title"
                name="task_title"
                className="w-full p-2 rounded-lg bg-gray-500 focus:ring-gray-500-100 border border-gray-400"
                value={task?.title}
                onBlur={validateForm}
                onChange={(event) => {
                  setTask({
                    ...task,
                    title: event.target.value,
                  });
                  validateForm();
                }}
              ></input>
              {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
            </div>

            <div className="mt-4">
              <label
                htmlFor="task_content"
                className="block text-sm font-medium mb-2"
              >
                Content
              </label>
              <textarea
                id="task_content"
                name="task_content"
                className="w-full p-2 rounded-lg bg-gray-500 focus:ring-gray-500-100 border border-gray-400"
                rows={5}
                value={task?.content}
                onBlur={validateForm}
                onChange={(event) => {
                  setTask({
                    ...task,
                    content: event.target.value,
                  });
                  validateForm();
                }}
              ></textarea>
              {errors.content && (
                <p style={{ color: "red" }}>{errors.content}</p>
              )}
            </div>
            <div className="mt-4">
              <label
                htmlFor="task_status"
                className="block text-sm font-medium mb-2"
              >
                Status
              </label>
              <select
                id="task_status"
                name="task_status"
                className="w-full p-2 rounded-lg bg-gray-500 focus:ring-gray-500-100 border border-gray-400"
                value={task?.status}
                onBlur={validateForm}
                onChange={(event) => {
                  setTask({
                    ...task,
                    status: event.target.value,
                  });
                  validateForm();
                }}
              >
                <option value={"none"} disabled>
                  --Selected Status--
                </option>
                <option value={"Pending"}>Pending</option>
                <option value={"Completed"}>Completed</option>
              </select>
              {errors.status && <p style={{ color: "red" }}>{errors.status}</p>}
            </div>
            <div className="mt-4 flex justify-center">
              {loader ? (
                <Loader height={30} width={28} style={{ color: "white" }} />
              ) : (
                <button
                  type="submit"
                  className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800"
                  onClick={(event) => handleAddTask(event)}
                  disabled={!isFormValid}
                  style={{
                    opacity: isFormValid ? 1 : 0.5,
                    cursor: !isFormValid ? "not-allowed" : "pointer",
                  }}
                >
                  Add Task
                </button>
              )}
              <button
                type="submit"
                className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-900 ms-3"
                onClick={(event) => {
                  handleClearTask(event);
                  setIsFormValid(false);
                }}
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTask;
