import { StyledInput, StyledInputContainer } from "./Input.styled";
import { forwardRef } from "react";

const Input = forwardRef(({ label, type, placeholder, required }, ref) => {
	return (
		<StyledInputContainer>
			<label>{label}:</label>
			<StyledInput
				ref={ref}
				type={type}
				placeholder={placeholder}
				required={required}
			/>
		</StyledInputContainer>
	);
});

export default Input;
