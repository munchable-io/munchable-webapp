import React from "react";
import { StyledModal } from "./Modal.styled";
import { FiX } from "react-icons/fi";

const Modal = ({ children, title, onExit }) => {
	return (
		<StyledModal>
			<div className="row space-between">
				<h2>{title}</h2>
				<FiX onClick={onExit} />
			</div>
			{children}
		</StyledModal>
	);
};

export default Modal;
