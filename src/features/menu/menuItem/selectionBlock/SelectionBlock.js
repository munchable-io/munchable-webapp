import { StyledSelection } from "./SelectionBlock.styled";

const SelectionBlock = ({ choice, toggleSelection }) => {
	return (
		<StyledSelection
			onClick={() => toggleSelection(choice)}
			selected={choice.selected}
		>
			{choice.name}
			{choice.cost !== 0 && (
				<p>
					({choice.cost > 0 ? `$${choice.cost}` : `-$${choice.cost}`})
				</p>
			)}
		</StyledSelection>
	);
};

export default SelectionBlock;
