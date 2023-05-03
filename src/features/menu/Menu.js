import { useDispatch, useSelector } from "react-redux";
import { MenuCategory } from "./Menu.styled";
import { getCategories } from "../categories/categories.slice";
import { getItems, setSelectedItem } from "./items.slice";
import MenuItem from "./menuItem/MenuItem";

const Menu = ({ setMenuItemModalOpen }) => {
	const dispatch = useDispatch();

	const categories = useSelector(getCategories);
	const items = useSelector(getItems);

	const handleItemClick = (id) => {
		dispatch(setSelectedItem(id));
		setMenuItemModalOpen(true);
	};

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
									onClick={() => handleItemClick(item._id)}
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
