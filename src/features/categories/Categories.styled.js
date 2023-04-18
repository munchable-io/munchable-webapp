import styled from "styled-components";

export const StyledCategories = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.5rem;

	.overflow {
		overflow-x: scroll;
		column-gap: 1rem;
	}
`;

export const StyledCategory = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 70px;
	min-width: 70px;

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
	}
`;
