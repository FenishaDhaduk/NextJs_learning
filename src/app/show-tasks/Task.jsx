import UserContext from "@/context/userContext";
import { FaX } from "react-icons/fa6";
import React, { useContext } from "react";
import { DeleteTaskService } from "../services/addtaskservices";

function Task({ task, id ,DeleteTask}) {
  const { user } = useContext(UserContext);

  return (
    <div
      className={`shadow-lg text-white mt-2 + ${
        task?.status == "Completed" ? "bg-green-800" : "bg-gray-800"
      }`}
    >
      <div className="p-5">
      <div className="flex justify-between">
      <h1 className="text-2xl font-semibold">{task.title}</h1>
      <FaX style={{cursor:"pointer"}} onClick={()=>DeleteTask()}/>
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
