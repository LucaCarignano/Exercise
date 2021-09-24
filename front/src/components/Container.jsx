import React, { useState, useEffect } from "react";

import TaskList from "./TaskList";
import FormTodo from "./FormTodo";

const Container = () => {
	const [list, setList] = useState([]);
	const getData = async() => {
		const response = await fetch('http://localhost:8080/api/tasks');
		const data = await response.json();
		setList(data);
	}
	useEffect(() => {
		getData();
	},[])

	const handleAddItem = async addItem => {
		console.log("addItem: ", addItem)
		await fetch('http://localhost:8080/api/tasks', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(addItem)	
		});
		getData();
	};

	return (
		<div>
			<FormTodo handleAddItem={handleAddItem} />
			<TaskList list={list} setList={setList} />
		</div>
	);
};

export default Container;
