import React, { Component } from "react";
import DraggableChildComponent from "../draggableChildren/draggableChildren";
class DraggableComponent extends Component {
	state = {
		divs: [],
		currentDiv: null,
		toDiv: null
	};
	componentDidMount = () => {
		this.setState({ divs: this.props.children });
	};

	insertElementBefore = () => {
		let divs = [...this.state.divs];
		let currentDiv = this.state.currentDiv;
		let toDiv = this.state.toDiv;
		let currentEle = divs.splice(currentDiv, 1);
		divs.splice(toDiv, 0, currentEle[0]);
		this.setState({ divs, currentDiv: null, toDiv: null });
	};

	dragStart = idx => {
		this.setState({ currentDiv: idx });
	};

	dragEnter = idx => {
		this.setState({ toDiv: idx });
	};

	dragDrop = () => {
		this.insertElementBefore();
	};
	render() {
		return (
			<React.Fragment>
				{this.state.divs.map((ele, idx) => {
					return (
						<DraggableChildComponent
							dragStart={() => this.dragStart(idx)}
							dragEnter={() => this.dragEnter(idx)}
							dragEnd={this.dragDrop}
							key={idx}
						>
							{ele}
						</DraggableChildComponent>
					);
				})}
			</React.Fragment>
		);
	}
}

export default DraggableComponent;
