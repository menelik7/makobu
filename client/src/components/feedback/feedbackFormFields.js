import React from "react";

export default ({
	input,
	label,
	type,
	style,
	rows,
	meta: { error, touched },
}) => {
	return rows ? (
		<div className={`form-group ${style}`}>
			<textarea
				className="form-control"
				{...input}
				placeholder={label}
				type={type}
				rows={rows}
			/>
			<small className="text-danger">{touched && error}</small>
		</div>
	) : (
		<div className={`form-group ${style}`}>
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
