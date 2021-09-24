import React from "react";
import Checkbox from "./Checkbox";

const TaskList = props => {
	const { list, setList } = props;

	const getData = async() => {
		const response = await fetch('http://localhost:8080/api/tasks');
		const data = await response.json();
		//console.log("asdasdasd",data);
		setList(data);
	}

	const onChangeStatus = async e => {
		const { name, checked: check } = e.target;
		await fetch(`http://localhost:8080/api/tasks/${name}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({check})
		});
		getData();
	};

	const onClickRemoveItem = () => {
		getData();
		list.map(async item => {
			if (item.check){	
			await fetch(`http://localhost:8080/api/tasks/${item.id}`, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json'
					},
				});
			}
		})
		getData();
	};

	const chk = list.map(item => (
		<Checkbox key={item.id} data={item} onChange={onChangeStatus} />
	));
	return (
		<div className="todo-list">
			{list.length ? chk : "No tasks"}
			{list.length ? (
				<p>
					<button className="button blue" onClick={onClickRemoveItem}>
						Delete all done
					</button>
				</p>
			) : null}
		</div>
	);
};

export default TaskList;
