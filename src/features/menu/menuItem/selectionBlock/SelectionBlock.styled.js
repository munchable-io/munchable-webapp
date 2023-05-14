import styled from "styled-components";

export const StyledSelection = styled.div`
	border: 1px solid black;
	text-align: center;
	font-size: 1rem;
	padding: 0.5rem;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	transition: all 0.25s;
	background: ${(props) => (props.selected ? "black" : "none")};
	color: ${(props) => (props.selected ? "white" : "black")};
`;
