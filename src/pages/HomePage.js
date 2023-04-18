import Categories from "../features/categories/Categories";
import { StyledMenu } from "../features/menu/Menu.styled";
import MenuItem from "../features/menu/menuItem/MenuItem";
import SearchBar from "../features/searchBar/SearchBar";

const HomePage = () => {
	return (
		<div className="column rg-2">
			<SearchBar />
			<Categories />
			<StyledMenu>
				<MenuItem />
				<MenuItem />
				<MenuItem />
				<MenuItem />
				<MenuItem />
				<MenuItem />
			</StyledMenu>
		</div>
	);
};

export default HomePage;
