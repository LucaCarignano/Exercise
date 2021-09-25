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
      <tr>
        <td style={{padding:'10px'}}>
          <a style={{margin:'0px'}}>
            - {item.name}
          </a>
        </td>
        <td>
          <button style={{position:'relative', left:'30px'}} class="access" onClick={() => setFolder(item)}>
            View items
          </button>
        </td>
        <td>
          <button style={{position:'relative', left:'80px'}} class="access" onClick={() => onClickRemoveItem(item.id)}>
            Delete
          </button>
        </td>
      </tr>
	));
	return (
  <div>
      <div style = {{position:'relative', right:'120px', padding:'10px'}}>
        Folders
      </div>
      {list.length ? chk : "No Tasks"}
  </div>
	);
};

export default FolderList;
