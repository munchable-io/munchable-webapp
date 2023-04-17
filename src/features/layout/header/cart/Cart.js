import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import CartModal from "./CartModal";

const Cart = () => {
	const [cartOpen, setCartOpen] = useState(false);

	return (
		<>
			<FiShoppingCart onClick={() => setCartOpen(true)} />
			{cartOpen && <CartModal setCartOpen={setCartOpen} />}
		</>
	);
};

export default Cart;
