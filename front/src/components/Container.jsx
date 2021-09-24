import React, { useState, useEffect } from "react";

import TaskList from "./TaskList";
import FormTodo from "./FormTodo";

const Container = (fid) => {
	const [list, setList] = useState([]);
	const getData = async() => {
		const response = await fetch(`http://localhost:8080/api/tasks/folder/${fid}`);
		const data = await response.json();
		//console.log("asdasdasd",data);
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
