import Selection from "../menuItem/selectionBlock/SelectionBlock";
import { StyledSingleSelection } from "./SingleSelection.styled";

const SingleSelection = ({ option, updateOption }) => {
	const toggleSelection = (choice) => {
		const newChoices = [...option.choices];
		for (let i = 0; i < newChoices.length; i++) {
			if (newChoices[i]._id === choice._id) {
				newChoices[i].selected = !choice.selected;
			}
		}
		const updatedOption = {
			...option,
			choices: [...newChoices],
		};
		updateOption(updatedOption);
	};

	return (
		<>
			<h4>
				{option.name}
				{option.required && <span className="red">*</span>}
			</h4>
			<StyledSingleSelection>
				{option?.choices.map((choice) => (
					<Selection
						key={choice._id}
						choice={choice}
						toggleSelection={toggleSelection}
					/>
				))}
			</StyledSingleSelection>
		</>
	);
};

export default SingleSelection;
