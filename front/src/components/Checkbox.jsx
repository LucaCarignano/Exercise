import React, { Fragment } from "react";

const Checkbox = props => {
	const {
		onChange,
		data: { id, description, check }
	} = props;
	return (
		<Fragment>

			<label className="todo new-item">
				<input
					name={id}
					type="checkbox"
					defaultChecked={check}
					onChange={onChange}
				/>
				<div className="todo__text">{description}</div>
			</label>
		</Fragment>
	);
};

export default Checkbox;