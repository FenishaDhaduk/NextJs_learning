"use client";

import React, { useContext, useEffect, useState } from "react";
import {
  DeleteTaskService,
  fetchsingleuser,
} from "../services/addtaskservices";
import { toast } from "react-toastify";
import UserContext from "@/context/userContext";
import Task from "./Task";
import SearchLoader from "@/components/Searchloader";

function page() {
  const [task, setTasks] = useState();
  const [loading, setLoading] = useState(false);

  const context = useContext(UserContext);

  useEffect(() => {
    if (context?.user?._id) {
      dofetchSingleuserdata();
    }
    // return () => {
    //  setTasks()
    // };
  }, [context?.user?._id]);

  console.log(context, "context");

  const dofetchSingleuserdata = async () => {
    try {
      setLoading(true);
      const responce = await fetchsingleuser(context?.user?._id);
      console.log(responce, "responce");
      setTasks(responce);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error.message);
    }
  };

  const DeleteTask = async (id) => {
    console.log(id, "id");
    const responce = await DeleteTaskService(id);
    const deletetask = task.filter((item) => item._id != id);
    setTasks(deletetask);

    console.log(deletetask, "responce");
  };
  console.log("taskkk", task);
  return (
    <>
      <div className="grid grid-cols-12 mt-3">
        {loading ? (
          <SearchLoader />
        ) : (
          <div className="col-span-6 col-start-4">
            <h1 className="text-white text-3xl">Show Task ({task?.length})</h1>
            {task?.map((data) => {
              return (
                <>
                  <Task
                    task={data}
                    id={data?._id}
                    DeleteTask={() => DeleteTask(data?._id)}
                  ></Task>
                </>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default page;
