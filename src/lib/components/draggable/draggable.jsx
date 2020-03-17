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
		if (currentDiv !== toDiv) {
			let currentEle = { ...divs[currentDiv] };
			divs = divs.filter((val, idx) => {
				return idx !== currentDiv;
			});
			divs.splice(toDiv, 0, currentEle);
			// This is a hack - Initialize the state as blank and then reset the state
			// With only 1 setState, the entire component doesnot get rerendered.
			this.setState({ divs: [], currentDiv: null, toDiv: null }, () => {
				this.setState({ divs });
			});
		}
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
		let ele = [];
		for (let i = 0; i < this.state.divs.length; i++) {
			ele.push(
				<DraggableChildComponent
					dragStart={() => this.dragStart(i)}
					dragEnter={() => this.dragEnter(i)}
					dragEnd={this.dragDrop}
					key={i}
				>
					{this.state.divs[i]}
				</DraggableChildComponent>
			);
		}
		return <React.Fragment>{ele}</React.Fragment>;
	}
}

export default DraggableComponent;
