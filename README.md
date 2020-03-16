This is a simple React component that will enable you to reorder HTML elements. You can drag any component and change their position.

## Installation

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install react-drag-reorder
```

## Usage

Import `Draggable` from `react-drag-reorder` and wrap it between the components that you would like to drag and reorder.

```js
// ES6
import { Draggable } from "react-drag-reorder";
```

You would have to wrap the `Draggable` component to the components that you would like to reorder.

```js
import React, { Component } from "react";
import { Draggable } from "react-drag-reorder";

class Drag extends Component {
	state = {
		words: ["Hello", "Hi", "How are you", "Cool"]
	};
	render() {
		return (
			<div className="flex-container">
				<div className="row">
					<Draggable>
						{this.state.words.map((word, idx) => {
							return (
								<div key={idx} className="flex-item">
									{word}
								</div>
							);
						})}
					</Draggable>
				</div>
			</div>
		);
	}
}

export default Drag;
```

## Result

![](react-drag-reorder.gif)
