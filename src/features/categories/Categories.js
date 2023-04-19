import { StyledCategories } from "./Categories.styled";
import Category from "./Category";

const Categories = () => {
	return (
		<StyledCategories>
			<div className="row space-between baseline">
				<h3>Categories</h3>
			</div>
			<div className="overflow row">
				<Category href="appetizers">Appetizers</Category>
				<Category href="soups">Soups</Category>
				<Category href="chicken">Chicken</Category>
				<Category href="combination">Combination</Category>
				<Category href="shrimp">Shrimp</Category>
				<Category href="pork">Pork</Category>
				<Category href="beef">Beef</Category>
				<Category href="veggie">Veggie</Category>
				<Category href="house">House Specials</Category>
				<Category href="beverages">Beverages</Category>
			</div>
		</StyledCategories>
	);
};

export default Categories;
