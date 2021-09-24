import React, { useState } from "react";

const Edit = ({ item, setEditing, handlerUpdate }) => {
  const [ description, setDescription ] = useState(item.description)

  const handlerSubmit = e => {
    e.preventDefault();
    handlerUpdate(item.id, description);
    setEditing(false);
  }

	return (
    <form onSubmit={handlerSubmit}>
    <div className="todo-list">
      <div>
        <input
          type="text"
          className="text"
          placeholder="New task description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button
          disabled={description ? "" : "disabled"}
        >
          Edit Task
        </button>
      </div>
    </div>
  </form>
	);
};

export default Edit;
