import { useSelector } from "react-redux";
import Modal from "../../ui/modal/Modal";
import { StyledOverlay } from "../../ui/overlay/Overlay.styled";
import { getSelectedItems } from "../items.slice";

const ItemModal = ({ setMenuItemModalOpen }) => {
	const selectedItem = useSelector(getSelectedItems);

	return (
		<StyledOverlay>
			<Modal
				title={selectedItem?.name}
				onExit={() => setMenuItemModalOpen(false)}
			>
				<p>{selectedItem?.description}</p>
				{selectedItem?.options.length > 0 && <h3>Options:</h3>}
				{selectedItem?.options?.map((option) => (
					<p>option</p>
				))}
				<p className="bold">${selectedItem?.price}</p>
			</Modal>
		</StyledOverlay>
	);
};

export default ItemModal;
