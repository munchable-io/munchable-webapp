import styled from "styled-components";

export const StyledCategories = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.5rem;
	position: sticky;
	top: 0;
	background: white;
	padding: 0.5rem 0;

	.overflow {
		overflow-x: scroll;
		column-gap: 1rem;
	}
`;

export const StyledCategory = styled.a`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: max-content;

	span {
		border: 2px solid black;
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		font-size: 2rem;
		font-weight: 600;
	}

	p {
		font-size: 14px;
		white-space: nowrap;
	}
`;
