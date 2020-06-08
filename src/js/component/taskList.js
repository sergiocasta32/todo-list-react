import React from "react";
import ReactDOM from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";

export class TaskList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
			tasklist: [
				//{ description: "buy some milk" },
				//{ descript ion: "play mario kart"}
			]
		};
		this.deleteTask = this.deleteTask.bind(this);
	}

	checkInput(e) {
		e.target.state = e.target.value.trim().length ? "valid" : "invalid";
	}
	createTask(e) {
		if (
			e.key == "Enter" &&
			e.target.state == "valid" &&
			e.target.value.trim() != ""
		) {
			const task = e.target.value.trim();
			this.setState({
				tasklist: this.state.tasklist.concat([task])
			});
		} else if (e.key == "Enter" && e.target.state == "invalid") {
			alert("No se permite meter espacios");
		}
	}

	deleteTask(item) {
		const newTaskList = this.state.tasklist.filter(tasklist => {
			return tasklist !== item; //comparamos cada item que queremos eliminar con cada item del array "messages".
		});
		this.setState({ tasklist: [...newTaskList] });
	} /*
	deleteTask = id => {
		const tasklist = this.state.tasklist.filter(task => {
			return task.id !== id;
		});
		this.setState({
			tasklist: tasklist
		});
    };
    */
	/*
	removeItem = props => {
		this.state.tasklist.splice(props, 1);
		this.setState({ tasklist: this.state.tasklist });
		console.log(this.state.tasklist);
    };
    
    */
	render() {
		return (
			<div className="container d-flex justify-content-center">
				<ul className="listContainer">
					<h1 className="display-2"> ToDo List</h1>
					<input
						className="imput mt-3 w-100"
						types="text"
						id="newTask"
						placeholder="What is new?"
						required
						minLength="1"
						onInput={this.checkInput}
						onKeyPress={e => {
							this.createTask(e);
						}}
					/>
					{this.state.tasklist.map((item, i) => (
						<li className="list-group-item d-flex" key={i}>
							{item}
							<i
								//onClick={() => this.deleteTask(i)}
								onClick={e => this.deleteTask(item)}
								className="far fa-trash-alt ml-auto"
							/>
						</li>
					))}
					<div className="taskCounter">
						You have{" "}
						<strong className="length">
							{this.state.tasklist.length} tasks to do{" "}
						</strong>
					</div>
				</ul>
			</div>
		);
	}
}
