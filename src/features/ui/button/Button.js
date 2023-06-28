import { StyledButton } from "./Button.styled";
import { VscLoading } from "react-icons/vsc";

const Button = ({ loading = false, onClick, children }) => {
	const handleClick = async () => {
		onClick && (await onClick());
	};

	return (
		<StyledButton onClick={handleClick} loading={loading.toString()}>
			{loading ? <VscLoading className="loader" /> : children}
		</StyledButton>
	);
};

export default Button;
