import React, { useState } from "react";
import Checkbox from "./Checkbox";
import Edit from "./Edit"

const TaskList = props => {
	const { list, getData, editing, setEditing } = props;
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
			<tr>
				<td style={{padding:'10px'}}>
					<Checkbox key={item.id} data={item} onChange={onChangeStatus} /></td>
				<td>	<button style={{position:'relative', left:'80px'}} class="access" onClick={() => editTask(item)}>edit</button>
				</td>
			</tr>
	));
	return (
		<div>
			{!list.length ? "No tasks"
			: list.length && !editing ? chk : null}
			{(list.length && !editing) ? (
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
