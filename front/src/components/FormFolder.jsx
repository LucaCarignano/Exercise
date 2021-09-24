import React, { useState } from "react";

const FormFolder = props => {
	const { handleAddItem } = props; 
	const [name, setName] = useState(""); 
	const handleSubmit = e => {
		e.preventDefault(); 
		handleAddItem({
			name
		});
		setName("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className="todo-list">
				<div className="file-input">
					<input
						type="text"
						className="text"
						placeholder="New Folder"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<button
						className="button pink"
						disabled={name ? "" : "disabled"}
					>
						Add Folder
					</button>
				</div>
			</div>
		</form>
	);
};

export default FormFolder;
