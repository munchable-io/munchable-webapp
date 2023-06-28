import styled from "styled-components";

export const StyledHeader = styled.header`
	background: whitesmoke;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.75rem 3rem;

	h1 {
		text-transform: uppercase;

		a {
			color: black;
			text-decoration: none;
		}
	}

	section {
		display: flex;
		column-gap: 1rem;
	}
`;
