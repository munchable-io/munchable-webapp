import { StyledCategories } from "./Categories.styled";
import Category from "./Category";

const Categories = () => {
	return (
		<StyledCategories>
			<div className="row space-between baseline">
				<h3>Categories</h3>
			</div>
			<div className="overflow row">
				<Category>Appetizers</Category>
				<Category>Soups</Category>
				<Category>Chicken</Category>
				<Category>Beef</Category>
				<Category>Shrimp</Category>
				<Category>Combos</Category>
			</div>
		</StyledCategories>
	);
};

export default Categories;
