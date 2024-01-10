import UserContext from "@/context/userContext";
import { FaX } from "react-icons/fa6";
import React, { useContext, useState } from "react";
import { DeleteTaskService } from "../services/addtaskservices";
import { MdModeEdit } from "react-icons/md";
import { useRouter } from "next/navigation";

function Task({ task, id, DeleteTask, setEditTask, editTask }) {
  const { user } = useContext(UserContext);
  const router = useRouter();

  return (
    <div
      className={`shadow-lg text-white mt-[1.5rem] + ${
        task?.status == "Completed" ? "bg-green-800" : "bg-gray-800"
      }`}
    >
      <div className="p-5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">{task.title}</h1>
          <div className="flex">
            <MdModeEdit
              style={{ cursor: "pointer" }}
              onClick={() => {
                router.push("/addTask", {
                  data: {
                    title: 'My Task',
                    description: 'Task description' 
                  } 
                });
                setEditTask(!editTask);
              }}
            />
            <FaX style={{ cursor: "pointer" }} onClick={() => DeleteTask()} />
          </div>
        </div>

        <p className="font-normal">{task?.content}</p>
        <div className="flex justify-between mt-3">
          <p className="text-left">
            Status :{" "}
            <span className="font-bold">{task?.status.toUpperCase()}</span>
          </p>

          <p className="text-right">
            Author : <span className="font-bold">{user?.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Task;
