import React from "react";
import { Draggable } from "./lib";
import "./App.css";
class App extends React.Component {
	state = {
		words: ["Hello", "Hi", "How are you", "Cool"],
		languages: ["C", "C++", "Java", "JS"],
		shows: ["GOT", "Friends", "Big Bang"]
	};
	render() {
		return (
			<Draggable>
				<div className="row">
					<p className="text">Words</p>
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
				<div className="row">
					<p className="text">Languages</p>
					<Draggable>
						{this.state.languages.map((lng, idx) => {
							return (
								<div key={idx} className="flex-item">
									{lng}
								</div>
							);
						})}
					</Draggable>
				</div>
				<div className="row">
					<p className="text">Shows</p>
					<Draggable>
						{this.state.shows.map((lng, idx) => {
							return (
								<div key={idx} className="flex-item">
									{lng}
								</div>
							);
						})}
					</Draggable>
				</div>
			</Draggable>
		);
	}
}

export default App;
