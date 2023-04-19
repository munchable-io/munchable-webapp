import { StyledCategory } from "./Categories.styled";

const Category = ({ children, href }) => {
	return (
		<StyledCategory href={`#${href?.toLowerCase()}`}>
			<span>{children[0]?.toUpperCase()}</span>
			<p>{children}</p>
		</StyledCategory>
	);
};

export default Category;
