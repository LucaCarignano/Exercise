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
			
				<div>
					<input
						class="inputt"
						type="text"
						className="text"
						placeholder="New Folder"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<button
						className="button"
						disabled={name ? "" : "disabled"}
					>
					Add Folder
					</button>
				</div>
			
		</form>
	);
};

export default FormFolder;
