import { useState } from "react";
import Categories from "../features/categories/Categories";
import { MenuCategory } from "../features/menu/Menu.styled";
import MenuItem from "../features/menu/menuItem/MenuItem";
import SearchBar from "../features/searchBar/SearchBar";
import Modal from "../features/ui/modal/Modal";
import { StyledOverlay } from "../features/ui/overlay/Overlay.styled";

const HomePage = () => {
	const [menuItemModalOpen, setMenuItemModalOpen] = useState(false);
	return (
		<>
			<div className="column rg-2">
				<SearchBar />
				<Categories />
				<MenuCategory id="appetizers">
					<h3>Appetizers</h3>
					<div className="menuGrid">
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
					</div>
				</MenuCategory>
				<MenuCategory id="soups">
					<h3>Soups</h3>
					<div className="menuGrid">
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
					</div>
				</MenuCategory>
				<MenuCategory id="chicken">
					<h3>Chicken Entrees</h3>
					<div className="menuGrid">
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
					</div>
				</MenuCategory>
				<MenuCategory id="combination">
					<h3>Combination Entrees</h3>
					<div className="menuGrid">
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
					</div>
				</MenuCategory>
				<MenuCategory id="shrimp">
					<h3>Shrimp Entrees</h3>
					<div className="menuGrid">
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
					</div>
				</MenuCategory>
				<MenuCategory id="pork">
					<h3>Pork Entrees</h3>
					<div className="menuGrid">
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
					</div>
				</MenuCategory>
				<MenuCategory id="beef">
					<h3>Beef Entrees</h3>
					<div className="menuGrid">
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
					</div>
				</MenuCategory>
				<MenuCategory id="veggie">
					<h3>Vegetable Entrees</h3>
					<div className="menuGrid">
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
					</div>
				</MenuCategory>
				<MenuCategory id="house">
					<h3>House Specials</h3>
					<div className="menuGrid">
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
					</div>
				</MenuCategory>
				<MenuCategory id="beverages">
					<h3>Beverages</h3>
					<div className="menuGrid">
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
						<MenuItem onClick={() => setMenuItemModalOpen(true)} />
					</div>
				</MenuCategory>
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
