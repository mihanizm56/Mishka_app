import React, { memo } from "react";

export const FormTextField = memo(({ input, type, label, meta: { error, touched } }) => (
	<label>
		{label}:
		<div>
			<input {...input} type={type} />
			{error && touched && <p>{error}</p>}
		</div>
	</label>
));
