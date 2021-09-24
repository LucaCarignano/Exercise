import React from "react";

const FolderList = props => {
	const { list, setList, setFolder } = props;

	const getData = async() => {
		const response = await fetch('http://localhost:8080/api/folders');
		const data = await response.json();
		setList(data);
	}

	const onClickRemoveItem = (id) => {
		getData();
		list.map(async item => {
      if (item.id == id) {
        await fetch(`http://localhost:8080/api/folders/${item.id}`, {
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
	  <div>
      <a style={{width:'400px'}}>- {item.name}</a>
      <a href='#' onClick={() => setFolder(item)}>View items</a>
      <a href='#' onClick={() => onClickRemoveItem(item.id)}>
        Delete
      </a>
    </div>
	));
	return (
  <div>
    <div className="todo-list">
      Folders
      {list.length ? chk : "No Tasks"}
    </div>
  </div>
	);
};

export default FolderList;
