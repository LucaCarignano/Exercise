import React, { Fragment } from "react";

const Checkbox = props => {
	const {
		onChange,
		data: { id, description, check }
	} = props;
	return (
		<Fragment>

			<label>
				<input
					name={id}
					type="checkbox"
					defaultChecked={check}
					onChange={onChange}
				/>
				<a>{description}</a>
			</label>
		</Fragment>
	);
};

export default Checkbox;