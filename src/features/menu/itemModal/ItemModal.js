import { useSelector } from "react-redux";
import Modal from "../../ui/modal/Modal";
import { StyledOverlay } from "../../ui/overlay/Overlay.styled";
import { getSelectedItems } from "../items.slice";
import SingleSelection from "../singleSelection/SingleSelection";
import MultiSelection from "../multiSelection/MultiSelection";
import { useEffect } from "react";
import { useState } from "react";

const ItemModal = ({ setMenuItemModalOpen }) => {
	const selectedItem = useSelector(getSelectedItems);
	const [options, setOptions] = useState([]);

	useEffect(() => {
		if (selectedItem?.options.length > 0) {
			setOptions(
				selectedItem.options.map((option) => ({
					...option,
					choices: option.choices.map((choice) => ({
						...choice,
						selected: false,
					})),
				}))
			);
		}
	}, [selectedItem]); // eslint-disable-line

	const updateOption = (newOption) => {
		const otherOptions = options.filter((opt) => opt.id === newOption._id);
		setOptions([...otherOptions, newOption]);
	};

	return (
		<StyledOverlay>
			<Modal
				title={selectedItem?.name}
				onExit={() => setMenuItemModalOpen(false)}
			>
				<p>{selectedItem?.description}</p>
				{options.length > 0 && <h3>Options:</h3>}
				{options.map((option) =>
					option?.selectionType === "single" ? (
						<SingleSelection
							key={option._id}
							option={option}
							updateOption={updateOption}
						/>
					) : (
						<MultiSelection
							key={option._id}
							option={option}
							updateOption={updateOption}
						/>
					)
				)}
				<p>${selectedItem?.price}</p>
			</Modal>
		</StyledOverlay>
	);
};

export default ItemModal;
