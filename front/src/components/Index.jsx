import React, { useState, useEffect } from "react";

import FolderList from "./FolderList";
import FormFolder from "./FormFolder";
import Container from "./Container";

const Index = () => {
	const [list, setList] = useState([]);
	const [folder, setFolder] = useState(null);
	const getData = async() => {
		const response = await fetch('http://localhost:8080/api/folders');
		const data = await response.json();
		setList(data);
	}
	useEffect(() => {
		getData();
	},[])

	const handleAddItem = async addItem => {
		await fetch('http://localhost:8080/api/folders', {
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
			<div className="todo-list">
			{!folder ? (
				<>
					<FolderList list={list} setList={setList} setFolder={setFolder} />
					<FormFolder handleAddItem={handleAddItem} />	
				</>	
				) : (	
				<>
					<Container folder={folder} setFolder={setFolder} />
				</>
			)}
			</div>
		</div>
	);
};

export default Index;
