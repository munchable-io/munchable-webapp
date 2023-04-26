import { useEffect, useState } from "react";
import Categories from "../features/categories/Categories";
import SearchBar from "../features/searchBar/SearchBar";
import Modal from "../features/ui/modal/Modal";
import { StyledOverlay } from "../features/ui/overlay/Overlay.styled";
import { useDispatch } from "react-redux";
import { fetchItems } from "../features/menu/items.slice";
import { fetchCategories } from "../features/categories/categories.slice";
import Menu from "../features/menu/Menu";

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
				<StyledOverlay>
					<Modal
						title="Test Title"
						onExit={() => setMenuItemModalOpen(false)}
					>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Necessitatibus, earum omnis harum illum odio
							voluptatem dicta dignissimos officia quas
							consequuntur.
						</p>
					</Modal>
				</StyledOverlay>
			)}
		</>
	);
};

export default HomePage;
