import React from "react";

import "./draggableChild.css";
class DraggableChildComponent extends React.Component {
	render() {
		return (
			<div
				draggable
				onDragStart={this.props.dragStart}
				onDragEnter={this.props.dragEnter}
				onDragEnd={this.props.dragEnd}
				className="grabbable"
			>
				{this.props.children}
			</div>
		);
	}
}

export default DraggableChildComponent;
