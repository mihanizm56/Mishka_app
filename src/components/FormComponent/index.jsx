import React from "react";

export const FormComponent = ({ input, type, label, meta: { error, touched } }) => (
	<label>
		{label}:
		<div>
			<input {...input} type={type} />
			{error && touched && <p>{error}</p>}
		</div>
	</label>
);
