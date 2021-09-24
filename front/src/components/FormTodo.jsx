import React, { useState } from "react";

const FormTodo = props => {
	const { handleAddItem } = props; 
	const [description, setDescription] = useState(""); 
	const handleSubmit = e => {
		e.preventDefault(); 
		handleAddItem({
			check: false,
			description
		});
		setDescription("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className="todo-list">
				<div>
					<input
						type="text"
						className="text"
						value={description}
						onChange={e => setDescription(e.target.value)}
					/>
					<button
						disabled={description ? "" : "disabled"}
					>
						Add
					</button>
				</div>
			</div>
		</form>
	);
};

export default FormTodo;
