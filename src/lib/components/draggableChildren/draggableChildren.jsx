import React from "react";

import "./draggableChild.css";
const DraggableChildComponent = props => {
	return (
		<div
			draggable
			onDragStart={props.dragStart}
			onDragEnter={props.dragEnter}
			onDragEnd={props.dragEnd}
			className="grabbable"
		>
			{props.children}
		</div>
	);
};

export default DraggableChildComponent;
