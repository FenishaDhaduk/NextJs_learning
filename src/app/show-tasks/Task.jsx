import UserContext from "@/context/userContext";
import { FaX } from "react-icons/fa6";
import React, { useContext, useState } from "react";
import { DeleteTaskService } from "../services/addtaskservices";
import { MdModeEdit } from "react-icons/md";
import { useRouter } from "next/navigation";

function Task({ task, id, DeleteTask, setEditTask, editTask }) {
  const { user } = useContext(UserContext);
  const router = useRouter();
  console.log(task?.status);

  return (
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
      <div className="flex justify-between">
      <div>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {task?.title}
      
    </h5>
    </div>
    <div>
    {task?.status == "Pending" ? (
      <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
        {task?.status}
      </span>
    ) : (
      <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">
        {task?.status}
      </span>
    )}
    </div>
      </div>
       
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {task?.content}
      </p>
      <button
        href="#"
        onClick={() => DeleteTask()}
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Delete
      </button>
    </div>
  );
}

export default Task;
