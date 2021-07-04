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
      let currentEle;

      if (currentDiv !== toDiv) {
        currentEle = { ...divs[currentDiv]
        };
        divs = divs.filter((val, idx) => {
          return idx !== currentDiv;
        });
        divs.splice(toDiv, 0, currentEle); // This is a hack - Initialize the state as blank and then reset the state
        // With only 1 setState, the entire component doesnot get rerendered.

        this.setState({
          divs: [],
          currentDiv: null,
          toDiv: null
        }, () => {
          this.setState({
            divs
          });
        });
      }

      if (this.props?.onPosChange) this.props.onPosChange(currentDiv, toDiv, currentEle);
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
    let ele = [];

    for (let i = 0; i < this.state.divs.length; i++) {
      ele.push( /*#__PURE__*/React.createElement(DraggableChildComponent, {
        dragStart: () => this.dragStart(i),
        dragEnter: () => this.dragEnter(i),
        dragEnd: this.dragDrop,
        key: i
      }, this.state.divs[i]));
    }

    return /*#__PURE__*/React.createElement(React.Fragment, null, ele);
  }

}

export default DraggableComponent;