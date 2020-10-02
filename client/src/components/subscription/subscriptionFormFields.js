import React from "react";

export default ({ input, label, type, meta: { error, touched } }) => {
	return (
		<div className="form-group">
			<input
				className="form-control"
				{...input}
				placeholder={label}
				type={type}
				autoComplete="off"
			/>
			<small className="text-danger">{touched && error}</small>
		</div>
	);
};
