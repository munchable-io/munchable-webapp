import { useEffect, useRef } from "react";
import Button from "../features/ui/button/Button";
import Divider from "../features/ui/divider/Divider";
import Form from "../features/ui/form/Form";
import Input from "../features/ui/input/Input";

const Register = () => {
	const firstNameRef = useRef("");
	const lastNameRef = useRef("");
	const emailRef = useRef("");
	const passwordRef = useRef("");
	const confirmPasswordRef = useRef("");

	useEffect(() => {
		firstNameRef.current.focus();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const firstName = firstNameRef.current.value;
		const lastName = lastNameRef.current.value;
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		const confirmPassword = confirmPasswordRef.current.value;

		console.log(firstName, lastName, email, password, confirmPassword);
	};
	return (
		<Divider>
			<div className="section">
				<div>
					<h2>Welcome!</h2>
					<p>
						Please fill in the following information to create an
						account.
					</p>
				</div>
				<Form handleSubmit={handleSubmit}>
					<section className="row">
						<Input ref={firstNameRef} label="First Name" required />
						<Input ref={lastNameRef} label="Last Name" required />
					</section>
					<Input ref={emailRef} label="Email" type="email" required />
					<section className="row">
						<Input
							ref={passwordRef}
							label="Password"
							type="password"
							required
						/>
						<Input
							ref={confirmPasswordRef}
							label="Confirm Password"
							type="password"
							required
						/>
					</section>
					<Button>Create Account</Button>
				</Form>
			</div>
		</Divider>
	);
};

export default Register;
