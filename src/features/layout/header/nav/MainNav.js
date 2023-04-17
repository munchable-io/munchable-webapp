import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import MainNavModal from "./MainNavModal";

const MainNav = () => {
	const [navOpen, setNavOpen] = useState(false);

	return (
		<>
			<FiMenu onClick={() => setNavOpen(true)} />
			{navOpen && <MainNavModal setNavOpen={setNavOpen} />}
		</>
	);
};

export default MainNav;
