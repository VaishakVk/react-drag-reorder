import React from "react";
import "./draggableChild.css";

const DraggableChildComponent = props => {
  return React.createElement("div", {
    draggable: true,
    onDragStart: props.dragStart,
    onDragEnter: props.dragEnter,
    onDragEnd: props.dragEnd,
    className: "grabbable"
  }, props.children);
};

export default DraggableChildComponent;