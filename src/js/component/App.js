import React, { Component } from "react";
import { Todos } from "./Todo";

export class App extends Component {
	state = {
		todos: [
			{ id: 1, content: "buy some milk" },
			{ id: 2, content: "play mario kart" }
		]
	};

	deleteTodo = id => {
		const todos = this.state.todos.filter(todo => {
			return todo.id !== id;
		});
		this.setState({
			todos: todos
		});
	};
	render() {
		return (
			<div className="todo-app container text-center mt-5">
				<h1 className="center blue-text">Teteh List</h1>
				<div className="container">
					<input
						id="buh"
						placeholder="ShUrManItoH"
						type="text"
						minLength="1"
						onInput={this.checkImput}
						onKeyPress={e => {
							this.createAddTodo(e);
						}}
					/>
				</div>
				<Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
			</div>
		);
	}
}
//export default App;
//<AddTodo addTodo={this.addTodo} /> esto va debajo del imput

/*
		    { this.state.AddTodo.map((item, index) => (

         ))}
         */
