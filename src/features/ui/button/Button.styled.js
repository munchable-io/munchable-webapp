import styled, { keyframes } from "styled-components";

const spin = keyframes`
	100% { rotate: 360deg; }
`;

export const StyledButton = styled.button`
	padding: 0.25rem 1rem;
	font-size: 1rem;
	cursor: ${(props) =>
		props.loading === "true" ? "not-allowed" : "pointer"};

	.loader {
		display: default;
		width: 1.25rem;
		height: 1.25rem;
		animation: ${spin} 1s linear infinite;
	}
`;
