import styled from "styled-components";

export const MenuCategory = styled.section`
	display: flex;
	flex-direction: column;
	row-gap: 0.5rem;

	.menuGrid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 0.5rem;
	}
`;
