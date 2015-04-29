import React from "react";
import Game from "./Game";

export default class App extends React.Component
{
	state = {
		games: JSON.parse(localStorage.getItem("games") || "[]")
	};

	constructor(props)
	{
		super(props);
	}

	componentDidUpdate()
	{
		localStorage.setItem("games", JSON.stringify(this.state.games));
	}

	addGame()
	{
		let name = document.getElementById("name");
		let path = document.getElementById("path");
		this.setState({
			games: this.state.games.concat({name: name.value, path: path.value})
		});
		name.value = "";
		path.value = "";
	}

	render()
	{
		return (
			<div>
				<input id="name" type="text" placeholder="Name" />
				<input id="path" type="text" placeholder="Executable path" />
				<button onClick={this.addGame.bind(this)}>Add game</button>

				{this.state.games.map((game) =>
					<Game key={game.name} name={game.name} path={game.path} />)}
			</div>
		);
	}
};
