import React from "react";
import Container from "./Container";

const FolderList = props => {
	const { list, setList } = props;

	const getData = async() => {
		const response = await fetch('http://localhost:8080/api/folders');
		const data = await response.json();
		//console.log("asdasdasd",data);
		setList(data);
	}

	const onChangeStatus = async e => {
		getData();
	};

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

  const setFolderId = (id) => {
		folder_id = id;
	};

  const folder_id = 0;

	const chk = list.map(item => (
	  <div>
      <button >{item.name}</button>
      <button onClick={() => onClickRemoveItem(item.id)}>
        Delete
      </button>
    </div>
	));
	return (
    <dic>
      <div className="todo-list">
        {list.length ? chk : "No folders"}
        
      </div>
        <Container
          f_id={folder_id}
        />
    </dic>
	);
};

export default FolderList;
