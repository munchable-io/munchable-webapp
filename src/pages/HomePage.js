import { useEffect, useState } from "react";
import Categories from "../features/categories/Categories";
import SearchBar from "../features/searchBar/SearchBar";
import { useDispatch } from "react-redux";
import { fetchItems } from "../features/menu/items.slice";
import { fetchCategories } from "../features/categories/categories.slice";
import Menu from "../features/menu/Menu";
import ItemModal from "../features/menu/itemModal/ItemModal";

const HomePage = () => {
	const dispatch = useDispatch();
	const [menuItemModalOpen, setMenuItemModalOpen] = useState(false);

	useEffect(() => {
		dispatch(fetchCategories());
		dispatch(fetchItems());
	}, [dispatch]);

	return (
		<>
			<div className="column rg-2">
				<SearchBar />
				<Categories />
				<Menu setMenuItemModalOpen={setMenuItemModalOpen} />
			</div>
			{menuItemModalOpen && (
				<ItemModal setMenuItemModalOpen={setMenuItemModalOpen} />
			)}
		</>
	);
};

export default HomePage;
