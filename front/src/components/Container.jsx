import React, { useState, useEffect } from "react";

import TaskList from "./TaskList";
import FormTodo from "./FormTodo";

const Container = ({folder, setFolder}) => {
	const [list, setList] = useState([]);
	const [ editing, setEditing ] = useState(false);
	const getData = async() => {
		const response = await fetch(`http://localhost:8080/api/tasks/folder/${folder.id}`);
		const data = await response.json();
		setList(data);
	}
	useEffect(() => {
		getData();
	},[folder])

	const handleAddItem = async addItem => {
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
			
			<div style = {{position:'relative', right:'80px'}}>
			<a class="arrow" style={{position:'relative', top:'3px'}} onClick={()=>setFolder(null)}>&larr;</a>
			Folders &rsaquo; {folder.name}
			</div>
			
			<TaskList folderId={folder.id} list={list} setList={setList} getData={getData} setEditing={setEditing} editing={editing}/>
			{!editing && <FormTodo folderId={folder.id} handleAddItem={handleAddItem} />}
		</div>
	);
};

export default Container;
