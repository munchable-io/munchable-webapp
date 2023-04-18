import { StyledMenuItem } from "./MenuItem.styled";
import { MdFastfood } from "react-icons/md";

const MenuItem = () => {
	return (
		<StyledMenuItem>
			<MdFastfood />
			<h4>Food Item Name</h4>
			<p>$3.99</p>
		</StyledMenuItem>
	);
};

export default MenuItem;
