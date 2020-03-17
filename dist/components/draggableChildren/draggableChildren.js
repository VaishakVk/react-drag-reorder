import React from "react";
import "./draggableChild.css";

class DraggableChildComponent extends React.Component {
  render() {
    return React.createElement("div", {
      draggable: true,
      onDragStart: this.props.dragStart,
      onDragEnter: this.props.dragEnter,
      onDragEnd: this.props.dragEnd,
      className: "grabbable"
    }, this.props.children);
  }

}

export default DraggableChildComponent;