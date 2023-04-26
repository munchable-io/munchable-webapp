import { useSelector } from "react-redux";
import { MenuCategory } from "./Menu.styled";
import { getCategories } from "../categories/categories.slice";
import { getItems } from "./items.slice";
import MenuItem from "./menuItem/MenuItem";

const Menu = ({ setMenuItemModalOpen }) => {
	const categories = useSelector(getCategories);
	const items = useSelector(getItems);

	return (
		<>
			{categories?.map((category) => (
				<MenuCategory
					key={category._id}
					id={category.name.split(" ").join("").toLowerCase()}
				>
					<h3>{category.name}</h3>
					<div className="menuGrid">
						{items
							?.filter((item) => item.category === category.name)
							?.map((item) => (
								<MenuItem
									key={item._id}
									onClick={() => setMenuItemModalOpen(true)}
									name={item.name}
									price={item.price}
								/>
							))}
					</div>
				</MenuCategory>
			))}
		</>
	);
};

export default Menu;
