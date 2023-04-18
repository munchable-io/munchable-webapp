import { StyledCategory } from "./Categories.styled";

const Category = ({ children }) => {
	return (
		<StyledCategory>
			<span>{children[0]?.toUpperCase()}</span>
			<p>{children}</p>
		</StyledCategory>
	);
};

export default Category;
