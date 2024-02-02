"use client";

import React, { useContext, useEffect, useState } from "react";
import {
  DeleteTaskService,
  fetchsingleuser,
} from "../services/addtaskservices";
import { toast } from "react-toastify";
import UserContext from "@/context/userContext";
import SearchLoader from "@/components/Searchloader";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

function page() {
  const [taskData, setTasks] = useState();
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  const context = useContext(UserContext);

  useEffect(() => {
    if (context?.user?._id) {
      dofetchSingleuserdata();
    }
  }, [context?.user?._id]);

  useEffect(() => {
    fetchtask()
  }, []);

  const fetchtask = async()=>{
    const responce = await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      setCompleted(json.filter((task) => task.completed));
      setIncomplete(json.filter((task) => !task.completed));
    });

    return responce

  }

  const dofetchSingleuserdata = async () => {
    try {
      setLoading(true);
      const responce = await fetchsingleuser(context?.user?._id);
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
    const deletetask = taskData.filter((item) => item._id != id);
    setTasks(deletetask);
  };

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (source.droppableId == destination.droppableId) return;
    // remove from source array
    if (source.droppableId == 2) {
      setCompleted(removeItemById(draggableId, completed));
    } else {
      setIncomplete(removeItemById(draggableId, incomplete));
    }
    // get item
    const task = findItemById(draggableId, [...incomplete, ...completed]);

    // add item

    if( destination.droppableId == 2){
      setCompleted([{...task , completed : !task.completed}, ...completed])
    }
    else{
      setIncomplete([{...task , completed : !task.completed}, ...incomplete])

    }
  };

  function findItemById(id, array) {
    return array.find((item) => item.id == id);
  }

  function removeItemById(id, array) {
    return array.find((item) => item.id != id);
  }
  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex items-center flex-row">
          <Column title={"TO DO"} tasks={incomplete} id={"1"}></Column>
          <Column title={"DONE"} tasks={completed} id={"2"}></Column>

        </div>
      </DragDropContext>
    </>
  );
}

export default page;
