import styled from "styled-components";

export const StyledSearchBar = styled.input`
	width: 100%;
	border-radius: 5px;
	padding: 0.5rem 1rem;
	border: 2px solid black;
	font-size: 1rem;
	outline: none;
	transition: all 0.25s;

	&:focus {
		border: 2px solid var(--primary-red);
	}
`;
