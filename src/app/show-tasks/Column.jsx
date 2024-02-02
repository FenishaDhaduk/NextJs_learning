import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import "./scroll.css";
import Task from "./Task";

const Container = styled.div`
  background-color: #f4f5f7;
  border-radius: 2.5px;
  width: 300px;
  height: 475px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border: 1px solid gray;
`;

const Title = styled.h3`
  padding: 8px;
  background-color: pink;
  text-align: center;
`;

const TaskList = styled.div`
  padding: 3px;
  transition: background-color 0.2 ease;
  background-color: #f4f5f7;
  flex-grow: 1;
  min-height: 100px;
`;

function Column({ title, tasks, id }) {

    console.log(tasks,5555555)
  return (
    <Container className="column">
      <Title style={{ backgroundColor: "lightblue", position: "sticky" }}>
        {title}
      </Title>
      <Droppable droppableId={id}>
        {(provided, snapshot) => {
          return (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggaingOver={snapshot.isDraggingOver}
            >
              {tasks && tasks.map((task, index) => {
                return(
                    <Task
                    key={index}
                      task={task}
                      index={index}
                    />
                  )}
                )

              }
               
              {provided.placeholder}
            </TaskList>
          );
        }}
      </Droppable>
    </Container>
  );
}

export default Column;
