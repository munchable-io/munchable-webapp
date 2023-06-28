import { useNavigate } from "react-router-dom";
import Button from "../features/ui/button/Button";

const Unauthorized = () => {
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	return (
		<section>
			<h1>Unauthorized</h1>
			<p>You do not have access to the requested page.</p>
			<Button onClick={goBack}>Go Back</Button>
		</section>
	);
};

export default Unauthorized;
