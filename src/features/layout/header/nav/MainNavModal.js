import { FiX } from "react-icons/fi";
import { StyledFullscreenModal } from "../../../styles/FullscreenModal";

const MainNavModal = ({ setNavOpen }) => {
	return (
		<StyledFullscreenModal>
			<div className="row space-between">
				<h2>My Nav</h2>
				<FiX
					className="float-right"
					onClick={() => setNavOpen(false)}
				/>
			</div>
			<div className="row">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Placeat sit quaerat veniam quisquam cum incidunt exercitationem
				asperiores soluta odio enim!
			</div>
		</StyledFullscreenModal>
	);
};

export default MainNavModal;
