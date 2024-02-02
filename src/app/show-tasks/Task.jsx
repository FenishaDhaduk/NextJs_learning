import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
border-radius:10px;
padding:8px;
color:#000;
margin-bottom:8px;
min-height:90px;
margin-left:10px;
margin-right:10px;
bakground-color:${(props) => bgcolorchange(props)};
cursor:pointer;
display:flex;
justify-content:space-between;
flex-direction:column;
`;

const TextContent = styled.div``;


function bgcolorchange(props) {
 
  return props.isDragging
    ? "lightgreen"
    : "lightblue"
    
}

function Task({ task, index }) {
  console.log(task, "ADSSFCSSCF");
 
  return (
    <Draggable draggableId={`${task?.id}`} key={task?.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <div className="flex justify-start p-2">
            <span>
              <small>#{task.id}</small>
            </span>
          </div>

          <div className="flex justify-start p-2">
            <TextContent>{task.title}</TextContent>
          </div>
          {provided.placeholder}
        </Container>
      )}
    </Draggable>
  );
}

export default Task;
