import Form from "../features/ui/form/Form";
import Divider from "../features/ui/divider/Divider";
import Input from "../features/ui/input/Input";
import Button from "../features/ui/button/Button";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getAccessToken,
	getRole,
	handleLogin,
} from "../features/login/loginSlice";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const accessToken = useSelector(getAccessToken);
	const role = useSelector(getRole);

	const emailRef = useRef("");
	const passwordRef = useRef("");

	useEffect(() => {
		emailRef.current.focus();
	}, []);

	useEffect(() => {
		accessToken && role && console.log({ accessToken, role });
	}, [accessToken, role]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		if (!loading) {
			await dispatch(handleLogin({ email, password }));
			emailRef.current.value = "";
			passwordRef.current.value = "";
			setLoading(false);
			navigate(from, { replace: true });
		}
	};

	return (
		<Divider>
			<div className="section">
				<div>
					<h2>Welcome Back!</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quis, deserunt.
					</p>
				</div>
				<Form handleSubmit={handleSubmit}>
					<Input ref={emailRef} label="Email" type="email" required />
					<Input
						ref={passwordRef}
						label="Password"
						type="password"
						required
					/>
					<Button loading={loading}>Login</Button>
				</Form>
			</div>
		</Divider>
	);
};

export default Login;
