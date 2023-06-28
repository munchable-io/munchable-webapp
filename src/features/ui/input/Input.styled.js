import styled from "styled-components";

export const StyledInputContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const StyledInput = styled.input`
	font-size: 1rem;
	padding: 0.5rem;
	border-radius: 3px;
	outline: none;
	border: 1px solid black;

	&:focus,
	&:active {
		border: 2px solid black;
	}
`;
