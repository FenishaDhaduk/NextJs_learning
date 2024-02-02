"use client";

import React, {useContext, useState } from "react";

// import loginimage from "@/assets/login.svg";
import Image from "next/image";
import { doAddTask } from "../services/addtaskservices";
import { toast } from "react-toastify";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
import UserContext from "@/context/userContext";
/** @jsxImportSource theme-ui */
import { jsx, Box, Container, Heading, Text, Button } from 'theme-ui';
import bannerBg from "@/app/assets/addtask_bg.jpg"


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
    <Box as="section" id="home" sx={styles.section}>
    <Container>
      <Box sx={styles.contentWrapper}>
        <Box sx={styles.bannerContent}>
          <Heading as="h1" sx={styles.heroTitle}>
            Add Your Task Here!!
          </Heading>
          
          <Box as="form">
          <form>
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-lg font-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="task_title"
              name="task_title"
              className="w-full p-2 rounded-lg focus:ring-gray-500-100 border border-gray-400"
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
              className="block text-lg font-bold mb-2"
            >
              Content
            </label>
            <textarea
              id="task_content"
              name="task_content"
              className="w-full p-2 rounded-lg focus:ring-gray-500-100 border border-gray-400"
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
              className="block text-lg font-bold mb-2"
            >
              Status
            </label>
            <select
              id="task_status"
              name="task_status"
              className="w-full p-2 rounded-lg focus:[#8D448B] border border-[#8D448B]"
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
              <option className="bg-gray-200" value={"none"} disabled>
                --Selected Status--
              </option>
              <option className="bg-gray-300 focus:[#5856d6]" value={"Pending"}>Pending</option>
              <option className="bg-gray-300 focus:[#5856d6]" value={"Completed"}>Completed</option>
            </select>
            {errors.status && <p style={{ color: "red" }}>{errors.status}</p>}
          </div>
        
        </form>
        {loader ? (
          <Loader height={30} width={28} style={{ color: "white" }} />
        ) : (
          <Button
          sx={styles.button} 
            type="submit"
            
            onClick={(event) => handleAddTask(event)}
            disabled={!isFormValid}
            style={{
              opacity: isFormValid ? 1 : 0.5,
              cursor: !isFormValid ? "not-allowed" : "pointer",
            }}
          >
            Add Task
          </Button>
        )}
            
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
    </>
  );
}

export default AddTask;

const styles = {
  section: {
    background:"#b5b5c5",
    backgroundSize: ['cover'],
    height:'100vh'
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    minHeight: [null, null, null, null, '50vh', '100vh'],
  },
  bannerContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.93)',
    boxShadow: [
      '0px 10px 16px rgba(52, 61, 72, 0.12)',
      null,
      null,
      null,
      'none',
    ],
    maxWidth: [null, null, null, 600, 500, null, 650],
    padding: [
      '20px',
      '30px',
      null,
      null,
      null,
      '30px 50px 60px',
      '50px 60px 90px',
    ],
    borderRadius: 5,
    m: ['110px 0 0', null, null, '150px 276px 0', '60px 0 0', null, 0],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      maxWidth: 515,
      mt: 70,
      padding: '30px 50px 65px',
    },
  },
  heroTitle: {
    fontSize: [22, 28, 28, 40, , 5, 6],
    color:"#5856d6",
    fontWeight: 700,
    letterSpacing: 'heading',
    lineHeight: [1.4, null, null, null, null, null, 1.57],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      fontSize: 40,
    },
  },
 
  button: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 20,
    width: '100%',
    minHeight: [50, null, null, null, 60],
    backgroundColor:"var(--theme-ui-colors-primary,#5856d6)",
    fontSize: [16, 16, 16, 20],
    ':focus': {
      outline: '0 none',
    },
  },
};
