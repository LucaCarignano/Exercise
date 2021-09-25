import React, { useState } from "react";

const FormTodo = props => {
	const { handleAddItem, folderId } = props; 
	const [description, setDescription] = useState(""); 
	const handleSubmit = e => {
		e.preventDefault(); 
		handleAddItem({
			check: false,
			folder_id: folderId,
			description
		});
		setDescription("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<div>
					<input
						class="inputt"
						type="text"
						placeholder="New Task"
						value={description}
						onChange={e => setDescription(e.target.value)}
					/>
					<button
						class="button"
						disabled={description ? "" : "disabled"}
					>
						Add Task
					</button>
				</div>
			</div>
		</form>
	);
};

export default FormTodo;
