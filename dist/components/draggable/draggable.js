function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from "react";
import DraggableChildComponent from "../draggableChildren/draggableChildren";

class DraggableComponent extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      divs: [],
      currentDiv: null,
      toDiv: null
    });

    _defineProperty(this, "componentDidMount", () => {
      this.setState({
        divs: this.props.children
      });
    });

    _defineProperty(this, "insertElementBefore", () => {
      let divs = [...this.state.divs];
      let currentDiv = this.state.currentDiv;
      let toDiv = this.state.toDiv;
      let currentEle = divs.splice(currentDiv, 1);
      divs.splice(toDiv, 0, currentEle[0]);
      this.setState({
        divs,
        currentDiv: null,
        toDiv: null
      });
    });

    _defineProperty(this, "dragStart", idx => {
      this.setState({
        currentDiv: idx
      });
    });

    _defineProperty(this, "dragEnter", idx => {
      this.setState({
        toDiv: idx
      });
    });

    _defineProperty(this, "dragDrop", () => {
      this.insertElementBefore();
    });
  }

  render() {
    return React.createElement(React.Fragment, null, this.state.divs.map((ele, idx) => {
      return React.createElement(DraggableChildComponent, {
        dragStart: () => this.dragStart(idx),
        dragEnter: () => this.dragEnter(idx),
        dragEnd: this.dragDrop,
        key: idx
      }, ele);
    }));
  }

}

export default DraggableComponent;