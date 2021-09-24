import React, { useState } from "react";
import Checkbox from "./Checkbox";
import Edit from "./Edit"

const TaskList = props => {
	const { list, getData } = props;
	const [ editing, setEditing ] = useState(false);
	const [ editItem, setEditItem ] = useState(null);

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

	const handlerUpdate = async (id, description) => {
		await fetch(`http://localhost:8080/api/tasks/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({description})
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

	const editTask = (item) => {
		setEditing(true);
		setEditItem(item);
	}

	const chk = list.map(item => (
		<div>
			<Checkbox key={item.id} data={item} onChange={onChangeStatus} />
			<a href="#" onClick={() => editTask(item)}>edit</a>
		</div>
	));
	return (
		<div className="todo-list">
			{list.length ? chk : "No tasks"}
			{list.length ? (
				<p>
					<button onClick={onClickRemoveItem}>
						Delete all done
					</button>
				</p>
			) : null}
			{editing && <Edit item={editItem} handlerUpdate={handlerUpdate} setEditing={setEditing}/>}
		</div>
	);
};

export default TaskList;
