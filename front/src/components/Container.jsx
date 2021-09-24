import React, { useState, useEffect } from "react";

import TaskList from "./TaskList";
import FormTodo from "./FormTodo";

const Container = ({folder, setFolder}) => {
	const [list, setList] = useState([]);
	const getData = async() => {
		const response = await fetch(`http://localhost:8080/api/tasks/folder/${folder.id}`);
		const data = await response.json();
		setList(data);
	}
	useEffect(() => {
		getData();
	},[folder])

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
			<a onClick={()=>setFolder(null)}>&larr;  </a>
			<a>Folders &rsaquo; {folder.name}</a>
			<TaskList folderId={folder.id} list={list} setList={setList} getData={getData} />
			<FormTodo folderId={folder.id} handleAddItem={handleAddItem} />
		</div>
	);
};

export default Container;
