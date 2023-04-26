import { useSelector } from "react-redux";
import { StyledCategories } from "./Categories.styled";
import Category from "./Category";
import { getCategories } from "./categories.slice";

const Categories = () => {
	const categories = useSelector(getCategories);

	return (
		<StyledCategories>
			<div className="row space-between baseline">
				<h3>Categories</h3>
			</div>
			<div className="overflow row">
				{categories?.map((category) => (
					<Category
						key={category._id}
						href={category.name.split(" ").join("").toLowerCase()}
					>
						{category.name}
					</Category>
				))}
			</div>
		</StyledCategories>
	);
};

export default Categories;
