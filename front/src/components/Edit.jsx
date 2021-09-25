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
      <div style={{padding:'20px'}}> Editing Task "{item.description}"</div>
    <div>
      <div>
        <input
          class="inputt"
          type="text"
          placeholder="New task description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <div><button
          class="button"
          disabled={description ? "" : "disabled"}
        >
          Save
        </button>
        <button 
          class="button"
          onClick={()=>setEditing(false)}>
            Cancel
        </button></div>
      </div>
    </div>
  </form>
	);
};

export default Edit;
