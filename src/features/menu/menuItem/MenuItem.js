import { StyledMenuItem } from "./MenuItem.styled";
import { MdFastfood } from "react-icons/md";

const MenuItem = ({ onClick, name, price }) => {
	return (
		<StyledMenuItem onClick={onClick}>
			<MdFastfood />
			<h4>{name}</h4>
			<p>${price?.toFixed(2)}</p>
		</StyledMenuItem>
	);
};

export default MenuItem;
