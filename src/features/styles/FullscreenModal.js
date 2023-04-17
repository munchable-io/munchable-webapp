import styled from "styled-components";

export const StyledFullscreenModal = styled.section`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	background: white;
	padding: 1rem;
	color: black;

	svg {
		width: 3rem;
		height: 3rem;
	}
`;
