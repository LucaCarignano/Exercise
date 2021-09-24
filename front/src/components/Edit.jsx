import React, { useState } from "react";

const Edit = ({ item, setEditing, handlerUpdate }) => {
  const [ description, setDescription ] = useState(item.description)

  const handlerSubmit = e => {
    e.preventDefault();
    handlerUpdate(item.id, description);
    setEditing(false);
  }

	return (
    <form style={{padding:'20px'}} onSubmit={handlerSubmit}>
      Editing Task "{item.description}"
    <div className="todo-list">
      <div>
        <input
          class="inputt"
          type="text"
          className="text"
          placeholder="New task description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button
          disabled={description ? "" : "disabled"}
        >
          Save
        </button>
        <button onClick={()=>setEditing(false)}>
          Cancel
        </button>
      </div>
    </div>
  </form>
	);
};

export default Edit;
